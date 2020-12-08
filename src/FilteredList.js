import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayList from './DisplayList.js';
import TimeCountDisplay from './TimeCountDisplay.js';



export default class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* a filter categroy based on the medium the piece was made in */
            medium: "all",

            /* a filter category based on if the piece has won any awards */
            awards: "all",

            /* a sorting criteria, either "none", "oldest to newest", or "newest to oldest" */
            sort: "none",

            /* the total time spent on making the piece */
            totalTime: parseInt(0),

            /* the list that contains the items currently in the aggregator, which adds up the total amount of time spent on all the pieces added */
            timeCountList: [],
        }

    }
    onSelectFilterMedium = event => {
        /* this function sets the state for medium depending on the medium chosen in the filter */
        this.setState({
            medium: event
        })
    };

    onSelectFilterAwards = event => {
        /* this function sets the state for awards depending on the choice selected, either award-winning or no awards */
        this.setState({
            awards: event
        })
    };

    onSelectSortOrder = event => {
        /* this function changes the state for sort depending on the mode of sorting chosen */
        this.setState({
            sort: event
        })
    }


    matchesFilterMedium = piece => {
        // all pieces should be shown when no filter is selected
        /* returns true only if the state for medium is "all" OR the medium of the piece matches the medium selected */
        if (this.state.medium === "all") {
            return true
        }
        else if (this.state.medium === piece.medium) {
            return true
        }
        else {
            return false
        }
    }

    matchesFilterAwards = piece => {
        // all pieces should be shown when no filter is selected
        /* returns true only if the state for awards is "all" OR the awards status of the piece matches the award status selected */
        if (this.state.awards === "all") {
            return true
        }
        else if (this.state.awards === piece.has_awards) {
            return true
        }
        else {
            return false
        }
    }

    sortOrder = (a, b) => {
        /* this function sorts the pieces in chronological order based on date created*/
        if (this.state.sort === "none") {
            return 0;
        }

        else if (this.state.sort === "New to Old") {
            let a_date = Date.parse(a.date)
            let b_date = Date.parse(b.date)
            return b_date - a_date;
        }

        else if (this.state.sort === "Old to New") {
            let a_date = Date.parse(a.date)
            let b_date = Date.parse(b.date)
            return a_date - b_date;
        }
    }

    addTime = (num, isPressed, img) => {
        /* this function adds the time spent on the piece to the aggregator, TimeCountDisplay. It is called by every TimeAdder button object */
        if (isPressed) {

            this.setState({
                totalTime: this.state.totalTime - parseInt(num),
                timeCountList: this.state.timeCountList.filter(function (value, index, arr) {
                    return value !== img;
                }),

            })

        }
        else {
            this.setState({
                totalTime: this.state.totalTime + parseInt(num),
                timeCountList: this.state.timeCountList.concat([img])
            })

        }

    }



    render() {
        return (
            <div className="flex_column">
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="#home">Vivian's Art Porfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <NavDropdown title="Filter by Awards" id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey="all" onSelect={this.onSelectFilterAwards} href="#action/3.1">ALL</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="yes" onSelect={this.onSelectFilterAwards} href="#action/3.1">award-winning</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="no" onSelect={this.onSelectFilterAwards} href="#action/3.2">no awards</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Filter by Medium" id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey="all" onSelect={this.onSelectFilterMedium} href="#action/3.1">ALL</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="oil paint" onSelect={this.onSelectFilterMedium} href="#action/3.1">oil paint</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="colored pencil" onSelect={this.onSelectFilterMedium} href="#action/3.2">colored pencil</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="ink" onSelect={this.onSelectFilterMedium} href="#action/3.3">ink</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="watercolor" onSelect={this.onSelectFilterMedium} href="#action/3.4">watercolor</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="collage" onSelect={this.onSelectFilterMedium} href="#action/3.5">collage</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="mixed media" onSelect={this.onSelectFilterMedium} href="#action/3.6">mixed media</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Sort By" id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey="none" onSelect={this.onSelectSortOrder} href="#action/3.1">no order</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="New to Old" onSelect={this.onSelectSortOrder} href="#action/3.2">newest to oldest</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="Old to New" onSelect={this.onSelectSortOrder} href="#action/3.3">oldest to newest</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand>
                            <h2>Total Time: {this.state.totalTime}</h2>
                            <div>
                                <TimeCountDisplay timeCountList={this.state.timeCountList} />
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                </div>
                <div className="flex_row tan">
                    <div className="flex_row">
                        <div>
                            <DisplayList list={this.props.list.filter(this.matchesFilterMedium).filter(this.matchesFilterAwards).sort(this.sortOrder)} addTime={this.addTime} />
                        </div>
                        <div>
                            <Navbar bg="dark" variant="dark" expand="lg">
                                <h4 className="whiteText">Currently in Time Counter:</h4>
                                <TimeCountDisplay timeCountList={this.state.timeCountList} />
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}
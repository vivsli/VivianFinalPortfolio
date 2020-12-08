import './index.css';
import './App.css';
import React, { Component } from "react";
import TimeAdder from './TimeAdder';


export default class DisplayList extends Component {
    /* this class displays the list containing all the piece cards */
    render() {
        return (
            <div>
                {this.props.list.map(piece =>
                    <div key={piece.name} className="image_div">
                        <img src={piece.src} alt="blah" className="image" />
                        <div className="image_desc">
                            <div>
                                <div className="title_and_medium">
                                    <h3 className="name">{piece.name}</h3>
                                    <h3 className="medium">  - {piece.medium}</h3>
                                </div>
                                <h6 className="date">{piece.date}</h6>
                            </div>
                            <h5>{piece.awards}</h5>
                            <div className="time">
                                <h6>Total Time: {piece.time} hours</h6>
                                <TimeAdder addTime={this.props.addTime} time={piece.time} img={piece.src} />
                            </div>
                        </div>
                    </div>)

                }
            </div>
        )
    }

}
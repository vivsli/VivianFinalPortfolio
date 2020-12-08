import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

export default class TimeAdder extends Component {
    /*This component is the button that add/removes from the aggregator*/
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        }
    }

    isPressed = () => {
        /* this function sets the state of the button to 'pressed' and calls the addTime method in FilteredList */
        this.setState({
            isPressed: !this.state.isPressed
        })
        this.props.addTime(this.props.time, this.state.isPressed, this.props.img)
    }

    render() {
        return (

            <div>
                <Button variant="dark" onClick={() => this.isPressed()} >Add/Remove from Time Counter</Button>
            </div >
        )
    }
}
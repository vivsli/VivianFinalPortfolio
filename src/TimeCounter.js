import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

export default class TimeAdder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalTime: 0
        }
    }

    addTime = () => {
        this.setState({
            totalTime: this.state.totalTime + 1
        }, () => {
            console.log(this.state.totalTime)
        });
    }

    render() {
        return (
            <div>
                <Button variant="dark" onClick={() => this.addTime()}>Add to Time Counter</Button>
            </div>
        )
    }
}
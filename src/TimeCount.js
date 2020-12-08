import React, { Component } from "react";

export default class TimeCount extends Component {
    /* this class displays the total time taken for all pieces currently in the aggregator */
    render() {
        return (
            <div>
                <h4>Total Time: {this.state.totalTime} hours</h4>
            </div>
        )

    }
}
import React, { Component } from "react";
import './index.css';
import './App.css';

export default class TimeCountDisplay extends Component {
    /* this class displays the items currently in the aggregator, which totals the total time taken for all pieces added*/

    render() {
        if (this.props.timeCountList.length === 0) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <div className="flex_row">
                    {this.props.timeCountList.map(img =>
                        <img key={img} src={img} alt="blah" className="mini_pics" />)
                    }
                </div>
            )
        }
    }
}

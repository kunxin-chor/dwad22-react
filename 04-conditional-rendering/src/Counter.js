import React from "react";

export default class Counter extends React.Component {
    state = {
        "count": 0
    }

    render() {

        let polarity = "";
        if (this.state.count > 0) {
            // can store JSX fragments into variables
            polarity = <p>Positive</p>;
        } else {
            polarity = <p>Negative</p>
        }

        let textColor = "";
        if (this.state.count % 2 === 0) {
            textColor = "white";
        } else {
            textColor = "black";
        }

        return <div style={{
            "border": "1px solid black",
            "margin": "10px",
            "text-align":"center",
            "width":"100px",
            "height":"150px",
            "fontFamily": this.state.count % 2 === 0 ? "Verdana" : "Arial",
            "color": textColor, 
            "backgroundColor": this.getBackgroundColor()
        }} onClick={this.increment}>
            {this.state.count}
            {this.checkIfEven()}
            {/* Display JSX fragements just use them like a JS expression */}
            {polarity}
            {
                this.state.count % 5 === 0 ?
                    <p>Divisible by 5</p> : <p>Not divisble by 5</p>
            }
        </div>
    }

    checkIfEven =() => {
        if(this.state.count % 2 === 0) {
            return <p>Even</p>
        } else {
            return <p>Odd</p>
        }
    }

    getBackgroundColor() {
        if (this.state.count % 2 === 0) {
            return "green";
        } else {
            return "red";
        }
    }

    // must use arrow functions for event handler!
    increment = () => {
        this.setState({
            "count": this.state.count + 1
        })
    }
}
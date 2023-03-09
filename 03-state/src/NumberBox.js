import React from "react";

// NumberBox has all the functionalities and variables from
// React.Component. All the magic that makes components work
// will be inside React.Component (aka class-based component)
export default class NumberBox extends React.Component {
    // every Component that is extended from React.Component
    // must have a render function
    // the render function MUST return JSX
    // whateve JSX is returned is the "display" of the component
    // render must be named `render`
    render() {
        return <React.Fragment>
            {this.state.count}
            <button onClick={this.increase}>Increase</button>
        </React.Fragment>
    }

    increase = () => {
        // do not do this
        // you cannot MUTATE anything in the state directly
        // this.state.count += 1;
        // must use setState
        this.setState({
            "count": this.state.count + 1,
            "count2": -100
        })

        // dont do two setState back to back
        // because setState is asynchronous
        // this.setState({
        //     "count2": -100;
        // })
    }

    // component have state; state are data that is owed 
    // by the component
    // 1) state data can only be changed by the owning componnet
    // 2) state data can cannot be read by other functions outside of the component
    // create a state we use the `state` variable in the class
    // it must be `state` due to constraints by React.Component
    state = {
        //
        "count" : this.props.defaultValue,
        "count2" : 0,
    }

}   

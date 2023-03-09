import React from 'react';

export default class MallDirectory extends React.Component {
    state = {
        "shops":[
            "MacDonalds",
            "Coffee Beans",
            "Don Don Donki",
            "Giants Supermarket",
            "Uliqo"
        ],
        "events":[
            "10% off at Coffee Beans",
            "BTS Dancing and Singing",
            "Free parking vouchers if you spend at least $100"
        ]
    }

    renderShops() {
        // the jsx array is to store all the <li> JSX
        //that will represent the shop
        let jsx = [];
        // go through the array of shops
        for (let shop of this.state.shops) {
            // for each shop create a JSX element
            // to display it as an <li> and push it
            // to the jsx array
            jsx.push(<li>{shop}</li>);
        }
        return jsx;
    }

    render() {
    // you can put JSX in an array
        

        return <React.Fragment>
            <h1>Mall Directory</h1>

            <h2>Shops</h2>
            <ul>
              {this.renderShops()}
            </ul>
            
            <h2>Events</h2>
            <ul>
                {this.state.events.map(function(event){
                    return <li>{event}</li>
                })}
            </ul>
        </React.Fragment>
    }
}
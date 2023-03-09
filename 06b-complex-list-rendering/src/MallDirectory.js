import React from 'react';

export default class MallDirectory extends React.Component {
    state = {
        "shops": [
            {
                "name": "MacDonalds",
                "level": 1,
                "unit-number": "2A"
            },
            {
                "name": "Uniqlo",
                "level": 1,
                "unit_number": "03"
            },
            {
                "name": "Challenge",
                "level": 4,
                "unit_number": "B"
            },
            {
                "name": "Don Don Donki",
                "level": "B1",
                "unit_number": "2A"
            }

        ],
        "events": [
            {
                "title": "10% off at Coffee Beans",
                "datetime": "23rd May 2023"
            },
            {
                "title": "BTS Autograph",
                "datetime": "24rd May 2023"
            }
        ]
    }

    renderShops() {
        let jsx = [];
        for (let shop of this.state.shops) {
            jsx.push(<div className="card" style={{"width":"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{shop.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>Floor: {shop.level}</li>
                            <li>Unit: {shop.unit_number}</li>
                        </ul>
                    </p>
                </div>
            </div>)
        }
        return jsx;
    }


    render() {
         return <React.Fragment>
            <h1>Mall Directory</h1>
            <h2>Shops</h2>
            {this.renderShops()}
            <h2>Events</h2>
            <ul className="list-group">
                {this.state.events.map(function(event){
                    return <li className="list-group-item">
                        {event.title} ({event.datetime})
                    </li>
                })}
            </ul>
        </React.Fragment>
    }
}
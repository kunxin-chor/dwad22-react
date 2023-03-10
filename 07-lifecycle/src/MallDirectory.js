import React from 'react';
import axios from 'axios';

export default class MallDirectory extends React.Component {
    state = {
        "shops": [],
        "events": []
    }

    renderShops() {
        let jsx = [];

        if (this.state.shops) {
            for (let shop of this.state.shops) {
                jsx.push(<div className="card" style={{"width":"18rem"}} key={shop.name}>
                    <div className="card-body">
                        <h5 className="card-title">{shop.name}</h5>
                        <div className="card-text">
                            <ul>
                                <li>Floor: {shop.level}</li>
                                <li>Unit: {shop.unit_number}</li>
                            </ul>
                        </div>
                    </div>
                </div>)
            }
        }

        
        return jsx;
    }


    loadInfo = async () => {
        // when we use axios.get, if we use a relative filepath
        // the starting point is the public folder
        const response = await axios.get("shops.json");
        const eventResponse = await axios.get("events.json");

        this.setState({
            'shops': response.data,
            'events': eventResponse.data
        })
    }

    componentDidMount() {
        this.loadInfo();
    }

    render() {
         return <React.Fragment>
            <h1>Mall Directory</h1>
            <button onClick={this.loadInfo}>Load Info</button>
            <h2>Shops</h2>
            {this.renderShops()}
            <h2>Events</h2>
            <ul className="list-group">
                {this.state.events.map(function(event){
                    return <li className="list-group-item" key={event.title}>
                        {event.title} ({event.datetime})
                    </li>
                })}
            </ul>
        </React.Fragment>
    }
}
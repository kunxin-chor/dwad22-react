import React from "react"

export default function Navbar(props) {
    return <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.link1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.link2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.link3}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
}
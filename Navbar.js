import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <ul className="nav justify-content-center my-3">
                <li className="li">
                    <a href="#" className="nav-link">about</a>
                </li>
                <li className="li mx-4">
                    <a href="#" className="nav-link">portfolio</a>
                </li>
                <li className="li">
                    <a href="#" className="nav-link">contact</a>
                </li>
            </ul>
        );
    }
}

export default Navbar;
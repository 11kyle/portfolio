import React, { Component } from 'react';
import me from '../me.jpg';

class Header extends Component {
    render() {
        return (
            <div className="col-sm-12 text-center">
                <img className="rounded" src={me} alt="..." />
                <h1>Kyle Johnson</h1>
                <p>Front End Developer</p>
            </div>
        );
    }
}

export default Header;
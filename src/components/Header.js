import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
               <h1>ToDo List</h1>
                <Link className="link" to="/">Home</Link> | <Link className="link" to="/about">About</Link>
            </header>
        );
    }
}

export default Header;
import React from 'react';
import SearchBar from '../SearchBar';
import './header.css';

function Header() {
    return (
        <div>
            <h1 className="m-3">The Shoppies</h1>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Header;
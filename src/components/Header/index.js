import React from 'react';
import SearchBar from '../SearchBar';
import './header.css';

function Header() {
  return (
    <header>
      <h1 className="p-3">The Shoppies</h1>
      <SearchBar></SearchBar>
    </header>
  );
}

export default Header;

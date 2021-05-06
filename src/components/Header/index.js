import React from 'react';
import SearchBar from '../SearchBar';
import './header.css';

function Header() {
  return (
    <header>
      <a href="/"><h1 className="p-3">The Shoppies</h1></a>
      <SearchBar></SearchBar>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='results-header'>
      <div className='wrapper top-bar'>
        <h1>RestoFinder</h1>
        <nav>
          <Link to='/'>Back to Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

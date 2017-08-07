import React from 'react';
import { Link } from 'react-router';

const Navigation = ({}) => (
  <nav className='navigation'>
    <div className='navigation__inner'>
      <Link to='/' className='navigation__inner__button'>Home</Link>
      {/* <Link to='/projects' className='navigation__inner__button'>Projects</Link> */}
    </div>
  </nav>
);

export default Navigation;

import React from 'react';
import './header-styles.scss';

const Header = ({text}) => (
  <div className='header'>
    <h1 className='title'>{text}</h1>
  </div>
);

export default Header;
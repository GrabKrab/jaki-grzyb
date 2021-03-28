import React from 'react';
import './button-styles.scss';

const Button = ({buttonText, onPressed}) => (
  <div className='button' onClick={onPressed}>
    <h2>{buttonText}</h2>
  </div>
);

export default Button;


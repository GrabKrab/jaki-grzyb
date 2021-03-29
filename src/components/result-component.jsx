import React from 'react';
import './result-styles.scss';
import Header from './header-component';
import Button from './button-component';

import GRZYBY from '../data/result';

const Result = ({points, onPressed}) => {
  console.log(points);
  const grzybNr = Math.ceil(points / 10) -1;
  console.log(grzybNr);
  return (
    <div>
      <Header text="Jesteś:"/>
        <img className="center" src={GRZYBY[grzybNr].imgUrl} alt='grzyb'/>
      <h1 className="text">{GRZYBY[grzybNr].name}</h1>
      <Header text="TY GRZYBIE!"/>
    
    <Button buttonText="Powrót" onPressed={onPressed}/>
    </div>
  );
}

export default Result;
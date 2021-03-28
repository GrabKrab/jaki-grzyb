import React from 'react';
import './result-styles.scss';
import Header from './header-component';

import GRZYBY from '../data/result';

const Result = ({points}) => {
  console.log(points);
  const grzybNr = Math.ceil(points / 10);
  console.log(grzybNr);
  return (
    <div>
      <Header text="Jesteś:"/>
      <div className='nameandimg'>
        <img src={GRZYBY[grzybNr].imgUrl} alt='grzyb'/>
        <h1 className="text">{GRZYBY[grzybNr].name}</h1>
      </div>
      <Header text="TY GRZYBIE!"/>
    </div>
  );
}

export default Result;
import React from 'react';
import './Professbox.css';

const Professbox = ({year,text,explain,icon}) => {
  return (
    <div >
      <div className='box'>
        <div className='year'>
          {year}
        </div>
        
        <a>{text}</a>
        <em>{icon}</em>
        <p>{explain}</p>
      </div>
    </div>
  );
};
export default Professbox;
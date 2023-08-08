import React from 'react';
import './Memcontent.css';

const Memcontent = ({text ,coment}) => {
  return (
    <div className="box-container">
      <div className="text-container">
        <div className="co">{text}
        <p>{coment}</p>
        </div>
      </div>
    </div>
  );
};

export default Memcontent;

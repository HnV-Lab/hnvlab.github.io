
import  './MemberList.css';
import React from 'react';

const Avater = ({ person_infos }) => {
  return (
    <div className='box'>
      {person_infos.map((person) => (

        <div key={person.id} className="avatar"  style={{gridGap: "5px", columnGap: "10px", gap: "30px 10px", rowGap: "20px"}}  >

           <img src={person.img_src} alt={person.name} />
          <div className='context'>
            <br/>
            <br/>
            <div className='title'>
              <h3>{person.name}</h3>
              <p>{person.degree}</p>
            </div>

            <p>{person.Professional}</p>
            <p>{person.email}</p>

          </div>
        </div>
  
      ))}
    </div>
  );
};

export default Avater;
import React from 'react';

const Professor =()=>{
  const professorData =
    {img_src: '/img/Pro.jpg',

    name:'Ryu-Han Cheol',
    title:'Professor',
    department:'school of artificial intelligence Sahmyook University',
    phone:'02-3399-1801',
    email:'hcryu@syu.ac.kr',
    }
  

  return (
    <div className="professor-profile">
      <div className="profile">
      <img src={professorData.img_src} alt={professorData.name} width={"100%"}  />
        <h2>{professorData.name}</h2>
        <em>{professorData.title}</em>
        <p>{professorData.department}</p>
        <p>Phone: {professorData.phone}</p>
        <p>Email: {professorData.email}</p>
      </div>

    </div>
    
  );
};

export default Professor;

import React from 'react';

const Doctorate =()=>{
  const professorData ={
    img_src: "img/kang.jpg",
    name:'Kyung-Su Kang',
    title:'Professor',
    department:'school of artificial intelligence Sahmyook University',
    phone:'02-3399-1801',
    email:'hcryu@syu.ac.kr'
    }


  return (
    <div className="professor-profile">
      <div className="profile">
      <img width={"100%"} height={"450px"}src={professorData.img_src} alt={professorData.name} />
        <h2>{professorData.name}</h2>
        <em>{professorData.title}</em>
        <p>{professorData.department}</p>
        <p>Phone: {professorData.phone}</p>
        <p>Email: {professorData.email}</p>
      </div>

    </div>
    
  );
};

export default Doctorate;
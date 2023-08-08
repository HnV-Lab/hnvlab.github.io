import Avater from './Navbar/Avater';
import React from 'react';
const person_infos =[
  {
    img_src: "/img/una.jpg",
    id:1,
    name: 'Yeo Woon Ha (여운하)',
    degree: '박사과정',
    Professional: 'professional field:   Image restoration ,\n Gait recognition ,The image restoration',
    email:'email: canal@syuin.ac.kr',
    de: "A"
    
  },

];
  const alumniMembers = person_infos.filter((person) => person.de === "A");

  const Alumni = () => {

    return(
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "5px", columnGap: "10px", gap: "10px 10px", rowGap: "10px",width:"1500px",margin:"0 auto" }}>
<div>
<h2>Alumni</h2>
  {alumniMembers.slice(0, 3).map((member) => (
    <Avater key={member.id} person_infos={[member]} />
  ))}
</div>

<div>
  <h2>&nbsp;</h2>
  {alumniMembers.slice(3, 5).map((member) => (
    <Avater key={member.id} person_infos={[member]} />
  ))}
</div>
<div>
  <h2>&nbsp;</h2>
  {alumniMembers.slice(5,7).map((member) => (
    <Avater key={member.id} person_infos={[member]} />
  ))}
</div>
</div>

    );
  };
export default Alumni;
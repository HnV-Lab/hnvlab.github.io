import React from 'react';
import Avatar from './Navbar/Avater';

const person_infos =[
    // 초기 멤버 구성 정보

    {
      img_src: "/img/una.jpg",
      id:1,
      name: 'Yeo Woon Ha (여운하)',
      degree: '박사과정',
      Professional: 'professional field:   Image restoration ,\n Gait recognition ,The image restoration',
      email:'email: canal@syuin.ac.kr',
      de: "D.S"
      
    },
    {
      img_src: "/img/seunghwan.jpg",
      id:2,
      name: 'Jung Seung Hwan(정승환)',
      degree: '석박사 통합과정',
      Professional: 'professional field: object detection ,\n Gait recognition, denoising',
      email:'email: jshwan0828@syuin.ac.kr',
      de: "M.S"

    },
    {
      img_src: "/img/cat.jpg",
      id:3,
      name: 'Kim Young-il (김영일)',
      degree: '학사',
      Professional: 'professional field: object detection,\n human pose estimation, GUI developer',
      email:'email: qgdrnfde123@gmail.com',
      de:"B.S"
    },
    {
      img_src: "img/mook.jpg",
      id:4,
      name: 'Jung Hyun-mook (정현묵)',
      degree: '학사',
      Professional: 'professional field: react',
      email:'email: tonyj20020510@gmail.com',
      de:"B.S"
    },
    {
      img_src: "img/hun.jpg",
      id:5,
      name: 'kim hyun su (김현수)',
      degree: '학사',
      Professional: 'professional field: react',
      email:'email: ehdejdrnfl@syuin.ac.kr',
      de:"B.S"
    },
    {
      img_src: "img/summer.jpg",
      id:6,
      name: 'Lee Yeo reum (이여름)',
      degree: '학사',
      Professional: 'professional field: object dection,\n semantic segmentation',
      email:'email: leeyeoreum01@gmail.com',
      de:"B.S"
    },

    {
      img_src: "img/woon.jpg",
      id:7,
      name: 'Hong Won-jin (홍원진)',
      degree: '학사',
      Professional: 'professional field: object dection, \n semantic segmentation',
      email:'email: own1045@gmail.com',
      de:"B.S"
    },
    {
      img_src: "img/king.jpg",
      id:8,
      name: 'Oh Wang-taek (오왕택)',
      degree: '학사',
      Professional: 'professional field: Image Restoration,\n Semantic segmentation',
      email:'email: mm074111@gmail.com',
      de:"B.S"
    },
    {
      img_src: "img/cat.jpg",
      id:9,
      name: 'Sun Soo Min (손수민)',
      degree: '학사',
      Professional: 'professional field: object detection,\n pygame ',
      email:'email: tnaln47@gmail.com',
      de:"B.S"
    }
];

  const doctorateMembers = person_infos.filter((person) => person.de === "D.S");
  const masterMembers = person_infos.filter((person) => person.de === "M.S");
  
  const bachelorMembers = person_infos.filter((person) => person.de === "B.S");



const Member = () => {
  return (
    <div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px",width:"1500px",margin:"0 auto" }}>
  <div>
    <h2>Doctorate</h2>
    
    <Avatar person_infos={doctorateMembers} />
  </div>
  <div>
    <h2 >Master</h2>
    <Avatar person_infos={masterMembers} />
  </div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "5px", columnGap: "10px", gap: "10px 10px", rowGap: "10px",width:"1500px",margin:"0 auto" }}>

  <div>

  <h2>Bachelor</h2>
    {bachelorMembers.slice(0, 3).map((member) => (
      <Avatar key={member.id} person_infos={[member]} />
    ))}
  </div>

  <div>
    <h2>&nbsp;</h2>
    {bachelorMembers.slice(3, 5).map((member) => (
      <Avatar key={member.id} person_infos={[member]} />
    ))}
  </div>
  <div>
    <h2>&nbsp;</h2>
    {bachelorMembers.slice(5,7).map((member) => (
      <Avatar key={member.id} person_infos={[member]} />
    ))}
  </div>
</div>
    </div>
  );
};
  
  export default Member;

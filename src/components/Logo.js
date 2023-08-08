import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src="img/hnv.jpg" alt="Your Image" width="600"/>
      <div className={styles.text}>
        <h2>연구실 소개글 작성</h2>
        <h2>삼육대학교 인공지능융합학부 Human and Vision 연구실 방문을 환영합니다</h2>
      </div>
    </div>
  );
};

export default Logo;
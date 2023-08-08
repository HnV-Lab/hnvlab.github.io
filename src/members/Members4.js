import Memcontent from "./mcomponents/Memcontent";
import Professbox from "./mcomponents/Professbox";
import Doctorate from "./mcomponents/Doctorate";
import styles from './Members1.module.css';
import {IoTrophyOutline} from "react-icons/io5";


const Members4 = ()=>{
  return (
  <div>

    <Memcontent text={"Doctorate"} coment={"Home > Members > Doctorate"}> </Memcontent>
  <div className={styles.homeone_box}>
    <div className={styles.left_column}>
      <div><Doctorate/></div> 
    </div>
    <div className={styles.right_column}>
      <h2>Education</h2>
      <div className={styles.small_box}>
        <Professbox year={"1996-2000"} text={" Bachelor of Electronic Engineering"} explain={" Bachelor of Electronic Engineering, Hanyang University"}>
        </Professbox>
        <Professbox year={"2000-2002"} text={"Master of Electronic Engineering"} explain={"Master of Electronic Engineering, Pohang University of Science and Technology"}>
        </Professbox>
        <Professbox year={"2006-2011"} text={"Doctorate of Electronic Engineering"} explain={" Doctorate of Electronic Engineering, Korea Advanced Institute of Science and Technology"}>
        </Professbox>
      </div>
      <h2>Awards</h2>
      <div className={styles.award_box}>
        <Professbox  year={"2019-10"} 
        icon={<IoTrophyOutline/>} explain={" 한국건축시공학회 가을학술발표대회 우수 학술상"}>
        </Professbox>
        
        <Professbox year={"2022-10"}
        icon={<IoTrophyOutline/>} explain={"한국건축시공학회 봄학술발표대회 우수 학술상"}>
        </Professbox>
        <Professbox year={"2022-11"}
        icon={<IoTrophyOutline/>}  explain={"DNA+드론 챌린지 지정공모1 포럼상 "}>
        </Professbox>
        <Professbox year={"2022-11"}
        icon={<IoTrophyOutline/>}  explain={"DNA+드론 챌린지 지정공모2 과학기술정보통신부 장관상"}>
        </Professbox>
      </div>
      <div className={styles.small_box}>
        <Professbox year={"1996-2000"} text={" Bachelor of Electronic Engineering"} explain={" Bachelor of Electronic Engineering, Hanyang University"}>
        </Professbox>
        <Professbox year={"2000-2002"} text={"Master of Electronic Engineering"} explain={"Master of Electronic Engineering, Pohang University of Science and Technology"}>
        </Professbox>
        <Professbox year={"2006-2011"} text={"Doctorate of Electronic Engineering"} explain={" Doctorate of Electronic Engineering, Korea Advanced Institute of Science and Technology"}>
        </Professbox>
      </div>
    </div>
  </div>
  </div>
  );
};
export default Members4;
import Memcontent from "../members/mcomponents/Memcontent"
import Professor from "../members/mcomponents/Professor";
import Professbox from "../members/mcomponents/Professbox";
import styles from './Members1.module.css';

// import './Homeone.css';
const Members1 = () =>{
  return (
  <div>
  <Memcontent text={"Professor"} coment={"Home > Members > Professor"}> </Memcontent>
  <div className={styles.homeone_box}>
    <div className={styles.left_column}>
      <div><Professor /></div>
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
      <h2>  </h2>
      <div className={styles.small_box}>
        <Professbox year={"1996-2000"} text={" Bachelor of Electronic Engineering"} explain={" Bachelor of Electronic Engineering, Hanyang University"}>
        </Professbox>
        <Professbox year={"2000-2002"} text={"Master of Electronic Engineering"} explain={"Master of Electronic Engineering, Pohang University of Science and Technology"}>
        </Professbox>
        <Professbox year={"2006-2011"} text={"Doctorate of Electronic Engineering"} explain={" Doctorate of Electronic Engineering, Korea Advanced Institute of Science and Technology"}>
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
export default Members1;
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";
import ushaResume from "./resume.pdf"; // Import your resume file
import { FaRocket } from 'react-icons/fa';
import Sociallinks from "../sociallinks/Sociallinks";


export const Hero = () => {
  const openResume = () => {
    window.open(ushaResume, "_blank"); // Open the resume in a new tab
  };

  return (
    /*hero section */
    <section className={styles.container}>
      <div className={styles.content}>
        <section className={styles.title}>
          <h4>
            Hello <span className={styles.textColor}>Iam</span>
          </h4>
          <h1 className={styles.textColor}>Usha Kumari</h1>
          <h4>Front-developer student(2022-2024)</h4>
        </section>
        
        <p className={styles.description}>
          A proud mom, baker, painter, and aspiring front-end developer seeking an internship
         to blend my creativity with code. 🎨💻
        </p>
        <button onClick={openResume} className={styles.button}>
            <a href="#">My Resume <FaRocket className="fa-spin fa-lag" size={20} /></a> 
        </button>



       <Sociallinks/>
      </div>
      <img src = {getImageUrl("hero/profile.jpg")} alt="profile" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Sociallinks from "../sociallinks/Sociallinks";
// import Sociallinks from "../sociallinks/Sociallinks";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactSection}>
        <section  className={styles.contactSectionInfo}>
          <span className={styles.contactSectionInfoIcon}> <FaMapMarkerAlt size={24} /></span>
          <div  className={styles.contactSectionInfoText}>
            <h5>Address</h5>
           <h5>Kronborgsgränd 12 kista
            </h5>
          </div>
        </section>
        <section className={styles.contactSectionInfo}>
         <sapn className={styles.contactSectionInfoIcon}><FaPhone size={24} /></sapn>
        <div className={styles.contactSectionInfoText} >
        <h5>Call me</h5>
        <h5> 736745755 </h5>
        </div>
        
        </section>
    
        <section  className={styles.contactSectionInfo}>
          <span className={styles.contactSectionInfoIcon}><FaEnvelope size={24} /></span>
          <div  className={styles.contactSectionInfoText}>
            <h5>Email Me</h5>
            <h5><a href="uavaswani@gmail.com" target="_blank" rel="noopener noreferrer">
            uavaswani@gmail.com
      </a></h5>

          </div>
        </section>
  
      </div>
      <hr />
      <div className={styles.copyRightSection}>
        <p>Copyright © 2023, All Right Reserved</p>
        <Sociallinks/>
      </div>
        

    
    </footer>
  );
};


import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faPhone,
     faEnvelope,
     faLocationDot,
     faHouseChimney
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <section>
        <div className={styles.contactContainer}>
        <div className={styles.yellowline1}></div>
        <div className={styles.cardContainer}>
        <span className={styles.phoneIcon}><FontAwesomeIcon
        icon={faPhone}
        style={{ fontSize: 24, color: "#D4A254", marginBottom: 10 }}/></span>
        <h3 className={styles.contactText}>Hafðu samband í síma frá 8-16 mánudag til fimmtudag og 8-14 á föstudögum</h3>
        <a className={styles.link} href='tel:6927094'><div className={styles.phoneButton} type='button'>
        <p><FontAwesomeIcon
        icon={faPhone}
        style={{ fontSize: 15, color: "white", marginRight: 5 }}/>    692-7094</p></div></a>
        </div>
        <div className={styles.yellowline}></div>
        <div className={styles.cardContainer}>
        <span className={styles.phoneIcon}><FontAwesomeIcon
        icon={faEnvelope}
        style={{ fontSize: 24, color: "#D4A254", marginBottom: 10 }}/></span>
        <h3 className={styles.contactText}>Sendu okkur tölvupóst og við svörum eins fljótt og auðið er</h3>
        <a className={styles.link} href='mailto: apiko@apiko.is'> <div className={styles.phoneButton}><p><FontAwesomeIcon
        icon={faEnvelope}
        style={{ fontSize: 15, color: "white", marginRight: 3 }}/> apiko@apiko.is</p></div></a>
        </div>
        <div className={styles.yellowline}></div>
        <div className={styles.cardContainer}>
        <span className={styles.phoneIcon}><FontAwesomeIcon
        icon={faHouseChimney}
        style={{ fontSize: 24, color: "#D4A254", marginBottom: 10 }}/></span>
        <h3 className={styles.contactText}>Við erum staðsett í Grófarsmára 26, Kópavogi</h3>
        <a className={styles.link} href='#'> <div className={styles.phoneButton}><p><FontAwesomeIcon
        icon={faLocationDot}
        style={{ fontSize: 15, color: "white", marginRight: 3 }}/> Staðsetning</p></div></a>
        </div>
      </div>
      <footer className={styles.footerContainer}>
          <h4 className={styles.footerText}>Apiko ehf. kt. 100586-2589</h4>
          <h4 className={styles.footerText}>Grófarsmári 26, 201 kópavogur</h4>
          <h4 className={styles.footerText}>692-7094 | apiko@apiko.is</h4>
      </footer>
      </section>
    )
}
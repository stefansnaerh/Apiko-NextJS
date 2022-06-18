import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./about.module.css"
import Image from 'next/image'
import aboutImage from '../../public/images/about.jpg'



export default function About() {

    const AboutPhoto = () => (
        <Image
        className='aboutPhoto'
        src={aboutImage}
        alt='about image'
        layout='responsive'
        />
      )

    return (
        <div>
            <Header/>
            <AboutPhoto/>
            <div className={styles.aboutContainer}>
            <h1 className={styles.headline}>Um Apiko</h1>
            <div className={styles.yellowLine}></div>
            <h2 className={styles.maintext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
            <button className={styles.dentistsButton}>Tannlæknar</button>
            <h1 className={styles.headline}>Sérfræðingar með víðtæka þekkingu</h1>
            <div className={styles.yellowLineTwo}></div>
            <h2 className={styles.maintext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
            </div>
            <Footer/>
        </div>
    )
}
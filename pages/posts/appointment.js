import Header from "../../components/header"
import Footer from "../../components/footer"
import styles from "./appointment.module.css"




export default function Appointment() {
    return (
        <div>
        <Header/>
        <section className={styles.appointmentContainer}>
            <h1 className={styles.headline}>Bóka tíma</h1>
            <div className={styles.yellowline}></div>
            <h3 className={styles.mainText}>Hægt  er að bóka tíma hjá Apiko tannlæknastofu með því að:</h3>
            <ul className={styles.list}>
                <li>Hringja í okkur í 692-7094</li>
                <li>Senda okkur tölvupóst á apiko@apiko.is</li>
                <li>Fylla út formið hér að neðan og við höfum samband við fyrsta tækifæri</li>
            </ul>
            <h2 className={styles.subHeadline}>Er um tilvísun að ræða?</h2>
            <h3 className={styles.mainText}>Ef verið er að vísa til okkar frá öðrum tannlækni eða fagaðila er gott að senda okkur fullt nafn tilvísanda og nánari upplýsingar ástæðu tilvísunar. Þá er auðveldara að nálgast nauðsynleg gögn sem getur nýst vel við fyrstu heimsókn </h3>
        </section>
            <form className={styles.formContainer} >
                <input type="text" placeholder="Fullt nafn" className={styles.input} aria-label="Enter Full Name"></input>
                <input type="text" placeholder="Kennitala" className={styles.input} aria-label="Enter social security number"></input>
                <input type="tel" placeholder="Símanúmer"   className={styles.input} aria-label="Enter phone number" ></input>
                <input type="email" placeholder="Netfang"  className={styles.input} aria-label="Enter email"></input>
                <h3 className={styles.mainText}>Ef um tilvísun er að ræða:</h3>
                <input type="text" placeholder="Hver vísaði þér til okkar? Hverjar
                eru helstu ástæður tilvísunar?" className={styles.inputBig}></input>
                <button type="submit" className={styles.sendButton}>Senda</button>
            </form>
            <Footer/>
        </div>
    )
}
import styles from './footer.module.css'

export default function Footer() {
    return (
        <section>
        <div className={styles.contactContainer}>
        <h3 className={styles.contactText}>Hafðu samband við okkur í síma frá 8-16 mánudag til fimmtudag og 8-14 á föstudögum</h3>
        <button className={styles.contactButton} type='button'>692-7094</button>
        <div className={styles.yellowline}></div>
        <h3 className={styles.contactText}>Sendu okkur tölvupóst og við svörum eins fljótt og auðið er</h3>
        <button className={styles.contactButton} type='button'>apiko@apiko.is</button>
      </div>
      <footer className={styles.footerContainer}>
          <h4 className={styles.footerText}>Apiko ehf. kt. 100586-2589</h4>
          <h4 className={styles.footerText}>Grófarsmári 26, 201 kópavogur</h4>
          <h4 className={styles.footerText}>692-7094      |   apiko@apiko.is</h4>
      </footer>
      </section>
    )
}
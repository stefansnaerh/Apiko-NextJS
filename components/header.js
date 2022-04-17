import Image from "next/image"
import styles from "./header.module.css"

export default function Header() {
    const Logo = () => (
        <Image
        src="/images/logo.jpg"
        alt="Logo"
        width={90}
        height={90}
        priority
        />
      )
return (
    <header>
        <div className={styles.headerContainer}>
    <Logo className={styles.logo}/>
    <div className={styles.apikoContainer}>
    <p className={styles.apiko}>APIKO</p>
    <p className={styles.apikoSub}>TANNLÆKNASTOFA</p>
    </div>
    <div className={styles.navbarContainer}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
    </div>
    </div>
    </header>
)
}
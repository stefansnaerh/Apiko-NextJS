import Image from "next/image"
import styles from "./header.module.css"
import Link from 'next/link'

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
            <Link href='/' passHref>
    <a><Logo className={styles.logo}/></a>
    </Link>
    <div className={styles.apikoContainer}>
        <Link href='/' passHref>
            <a><p className={styles.apiko}>APIKO</p>
    <p className={styles.apikoSub}>TANNLÆKNASTOFA</p></a>
    </Link>
    </div>
    
    <div onClick={openNav} className={styles.navbarContainer}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
    </div>
    </div>
    </header>
)
}
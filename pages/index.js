import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import localImage from '../public/images/mainphoto.jpg'

export default function Home() {

  const MainPhoto = () => (
    <Image
    className='mainPhoto'
    src={localImage}
    alt="main photo"
    layout="responsive"

    />
  )
  return (
    <div className="main-container">
      <Head>
        <title>Apiko Dental Office</title>
        <meta name="description" content="Dentistry page" />
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
      </Head>
      <main>
        <Header/>
        <div className='mainphoto-wrapper'>
        <MainPhoto/>
        </div>
        <div className='button-container'>
          <button className='moreButton' type='button'>Nánar um Apiko</button>
          <button className='bookButton' type='button'>Bóka tíma</button>
        </div>
        <h1>Um Apiko</h1>
        <div className='about-container'>
        <div className='yellowLine'></div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
        <button className='readMore-button'>Lesa Nánar</button>
        <h1></h1>
        </div>
      </main>
    </div>
  )
}

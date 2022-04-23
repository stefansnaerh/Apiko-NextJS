import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import mainImage from '../public/images/mainphoto.jpg'
import aboutImage from '../public/images/about.jpg'
import specialistsImage from '../public/images/specialists.jpg'

export default function Home() {

  const MainPhoto = () => (
    <Image
    className='mainPhoto'
    src={mainImage}
    alt="main photo"
    layout="responsive"

    />
  )
  const AboutPhoto = () => (
    <Image
    className='aboutPhoto'
    src={aboutImage}
    alt='about image'
    layout='responsive'
    />
  )
  const SpecialistsPhoto = () => (
    <Image
    className='aboutPhoto'
    src={specialistsImage}
    alt='our specialists image'
    layout='responsive'
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
        <div className='card-container'>
        <h1>Um Apiko</h1>
        <div className='yellowLine'></div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
        <button className='readMore-button'>Lesa Nánar</button>
        <AboutPhoto/>
        </div>
        <div className='specialist-container'>
        <h1>Sérfræðingarnir okkar</h1>
        <div className='yellowLine'></div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
        <button className='readMore-button'>Lesa Nánar</button>
        <SpecialistsPhoto/>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

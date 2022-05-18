import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import mainImage from '../public/images/toothbrushPhone.jpg'
import aboutImage from '../public/images/about.jpg'
import specialistsImage from '../public/images/specialists.jpg'
import mainImageIpad from '../public/images/mainphoto-ipad.jpg'
import mainImageDesktop from '../public/images/mainphotodesktop.jpg'
import mainImageIpadBigger from '../public/images/ipadbigger.png'


export default function Home() {

  

  const MainPhoto = () => (
    <Image
    className='mainPhoto'
    src={mainImage}
    alt="main photo"
    layout="responsive"
    quality={100}

    />
  )
  const MainPhoto2 = () => (
    <Image
    className='mainPhoto2'
    src={mainImageIpad}
    alt="main photo"
    layout="responsive"
    quality={100}

    />
  )
  const MainPhoto3 = () => (
    <Image
    className='mainPhotoIpadBigger'
    src={mainImageIpadBigger}
    alt="main photo"
    layout="responsive"
    quality={100}

    />
  )

  const MainPhotoDesktop = () => (
    <Image
    className='mainPhotoDesktop'
    src={mainImageDesktop}
    alt="main photo"
    layout="responsive"
    quality={100}

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
          <div className='mainphoto-mobile'>
              <MainPhoto/>
          </div>
          <div className='mainphotoIpad'>
              <MainPhoto2/>
          </div>
          <div className='mainphotoIpadBigger'>
              <MainPhoto3/>
          </div>
          <div className='mainphotoDesktop'>
              <MainPhotoDesktop/>
          </div>
        <h1 className='headline'>Við erum teymi sérfræðinga
sem vinnum saman að þinni 
tannheilsu</h1>
        <div className='button-container'>
          <Link href='/about/about' passHref>
          <button className='moreButton' type='button'>Nánar um Apiko</button>
          </Link>
          <Link href='/appointment/appointment' passHref>
          <button className='bookButton' type='button'>Bóka tíma</button>
          </Link>
          </div>
        </div>
        <div className='card-container'>
        <h1>Um Apiko</h1>
        <div className='yellowLine'></div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
        <Link href='/about/about' passHref>
        <button className='readMore-button'>Lesa Nánar</button>
        </Link>
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

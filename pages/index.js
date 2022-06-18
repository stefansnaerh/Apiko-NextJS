import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import mainImage from '../public/images/toothbrushPhone.jpg'
import aboutImage from '../public/images/about.jpg'
import specialistsImage from '../public/images/specialists.jpg'
import specialists850px from '../public/images/specialists850px.png'
import specialists1250px from '../public/images/specialists1250px.png'
import mainImageIpad from '../public/images/mainphoto-ipad.jpg'
import mainImageDesktop from '../public/images/mainphotodesktop.jpg'
import mainImageIpadBigger from '../public/images/mainPhoto870px.png'
import AboutPhotoBigger from '../public/images/aboutPhoto850px.png'
import aboutPhoto1250px from '../public/images/aboutPhoto1250px.png'


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
  const AboutPhoto850px = () => (
    <Image
    className='aboutPhotoBigger'
    src={AboutPhotoBigger}
    alt='about image'
    width={480}
    height={480}
    />
  )
  const AboutPhoto1250px = () => (
    <Image
    className='aboutPhoto1250px'
    src={aboutPhoto1250px}
    alt='about image'
    width={750}
    height={460}
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
  const SpecialistsPhoto850px = () => (
    <Image
    className='specialistPhotoBigger'
    src={specialists850px}
    alt='about image'
    width={480}
    height={480}
    />
  )
  const SpecialistsPhoto1250px = () => (
    <Image
    className='specialistPhotoBigger'
    src={specialists1250px}
    alt='specialists image'
    width={750}
    height={460}
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
          <div className='headlineAndButtons'>
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
          <div className='textLine-container'>
        <h1>Um Apiko</h1>
        <div className='yellowLine'></div>
        </div>
        <div className='textButtonPhoto'>
        <div className='textAndButton'>
        <div className='textLine-containerDesktop'>
        <h1>Um Apiko</h1>
        <div className='yellowLine'></div>
        </div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
        <Link href='/about/about' passHref>
        <button className='readMore-button'>Lesa Nánar</button>
        </Link>
        </div>
        <div className='aboutPhotoMobile'>
        <AboutPhoto/>
        </div>
        <div className='aboutPhoto850px'>
        <AboutPhoto850px/>
        </div>
        <div className='aboutPhoto1250px'>
        <AboutPhoto1250px/>
        </div>
        </div>
        </div>
        <div className='specialist-container'>
        <div className='textLine-container'>
        <h1>Sérfræðingarnir okkar</h1>
        <div className='yellowLine2'></div>
        </div>
        <div className='textButtonPhoto'>
        <div className='specialistsPhoto850px'>
        <SpecialistsPhoto850px/>
        </div>
        <div className='specialistsPhoto1250px'>
        <SpecialistsPhoto1250px/>
        </div>
        <div className='textAndButton'>
        <div className='textLine-containerDesktop'>
        <h1>Sérfræðingarnir okkar</h1>
        <div className='yellowLine2'></div>
        </div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h2>
        <button className='readMore-button'>Lesa Nánar</button>
        </div>
        <div className='specialistsPhotoMobile'>
        <SpecialistsPhoto/>
        </div>
        </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

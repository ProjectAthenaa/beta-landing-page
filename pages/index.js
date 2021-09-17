import Head from 'next/head'
import Image from 'next/image'
import LogoImage from '../assets/images/logo.svg';
import DesktopAppImage from '../public/desktop-bot.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Athena AIO</title>
        <meta name="description" content="E-Commerce Automation -- The way it should have been" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="landing">
        <nav>
          <Image src={LogoImage} className={'logo'} />
          <div className="btn">Coming Soon</div>
        </nav>
        <h1>
          E-Commerce Automation
          <span>The way it should have been.</span>
        </h1>
        <img src={'/desktop-bot.png'} className={'desktop-image'}  />
      </div>
    </div>
  )
}

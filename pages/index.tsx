import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head'
import BestSeller from '../src/components/BestSeller'
import NavBare from '../src/components/NavBare'
import OfferBanner from '../src/components/OfferBanner'
import Footer from '../src/components/Footer'
import OthersSection from '../src/components/OthersSection'
const HomePage: NextPage = () => {
  return (
    <div className='  overflow-x-clip'>
      <Head>
        <title>eStore</title>
        <meta
          name='description'
          content='Order now direct from eStore. Prices and availability in real-time, fast shipping.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBare />
      <OfferBanner />
      <BestSeller/>
      <OthersSection/>
      <Footer/>
 
      {/* <main>
        <h1 className='text-6xl text-primary '>e store next app</h1>
      </main>

      <footer>
        footer
      </footer> */}
    </div>
  );
}

export default HomePage;

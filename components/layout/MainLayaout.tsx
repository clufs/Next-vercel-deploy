import Head from 'next/head'
import styles from './MainLayaout.module.css'
import { Navbar } from '../Navbar';

interface props {
  children: JSX.Element | JSX.Element[] 
}  

export const MainLayaout = ({children}:props) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home - Nahuel</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}





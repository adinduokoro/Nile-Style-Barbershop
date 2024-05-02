import React from 'react'
import styles from "./Home.module.css"
import { Hero, About , Services , Pricing , Gallery , Contact } from '../../components'


const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <Services />
      {/* <Pricing />
      <Gallery />
      <Contact /> */}
    </div>
  )
}

export default Home
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zach Perkins' Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <h2>Welcome to my portfolio website! I'm glad you came!</h2>
         <motion.div initial="hidden" animate="visible" variants={{
           hidden: {
             scale: .8,
             opacity: 0
           },
           visible: {
             scale: 1,
             opacity: 1,
             transition: {
               delay: .5
             }
           },
         }}>
          <h2>
            Learn more about who I am <a href="/posts/portfolio">inside</a>!
        </h2>
        </motion.div>
      </section>
      </Layout>
  )
}

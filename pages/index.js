import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Call Your Shots 2022</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <h2>Welcome to the 2022 Call Your Shots Challenge! See your goals and update them!</h2>
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
            Find your goals <a href="/posts/cys">inside</a>!
        </h2>
        </motion.div>
      </section>
      </Layout>
  )
}

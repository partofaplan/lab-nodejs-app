import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { motion } from 'framer-motion'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>Resume</h1>
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
      <h2>Cloud & DevOps Engineer</h2>
      </motion.div>
      <br />
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .8
            }
         },
       }}>
      function textBlock() {
        return <embed src="/text-block-1.txt" />
        return <embed src="/text-block-2.txt" />
      }
      export default textBlock        
      <br />
      </motion.div>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}           

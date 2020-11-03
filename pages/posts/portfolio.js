import * as React from "react"
import { motion } from "framer-motion"
import Head from "next/head"
import Layout from "../../components/layout"
import Experience from "../../components/experience"
import Education from "../../components/education"
import Certifications from "../../components/certifications"

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
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
      </motion.div>
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
        <Experience />
        <br />
        <Education />
        <br />
        <Certifications />
        <br />
        </motion.div>
    </Layout>
  )
};

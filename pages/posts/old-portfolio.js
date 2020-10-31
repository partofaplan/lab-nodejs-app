import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'
//Test area for styling


export default function Portfolio () {
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
       <h2>Cloud & DevOps Engineer</h2>
       </motion.div>
         <h3>Experience</h3>
         <h4>Infrastructure Automation Engineer at Boys Town</h4>
             <p><ul><li>Created reliable automated workflows for service delivery of VMs and applications using vRealize Automation, Rundeck, and Powershell.</li>
             <li>Helped develop Azure cloud app deployment pipeline for integration with the CI/CD pipeline web applications.</li>
             <li>Improved Splunk infrastructure.</li>
             <li>Improved VMware automated infrastructure.</li>
             <li>Spearheaded integration of vRealize into ServiceNow.</li>
             <li>Improved containerization infrastructure, formerly under OpenShift and shifting to PKS.</li>
             <li>Created automation scripts in Javascript, Python, Bash and Powershell.</li>
             <li>Lead an architecture guild made up of stakeholders, developers, security and operations to create a path for cohesive IT solutions which impact the business.</li>
             </ul></p>
         <h2>
           <Link href="/">
           <a>Back to home</a>
           </Link>
         </h2>
    </Layout>
  )         
}
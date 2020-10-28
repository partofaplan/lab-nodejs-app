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
         <h3>Profile</h3>
         <p>Experienced and reliable IT professional with over six years of experience working in a wide-range of enterprises to ensure the optimal performance of their application systems using automation and cloud technologies. Adept in providing solutions to improve and enhance services within a devops framework. Bringing forth a growth mindset and seeking to find the best path forward for the users.</p>
         <br />
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
          
       </motion.div>
       <h2>
         <Link href="/">
         <a>Back to home</a>
         </Link>
       </h2>
    </Layout>
  )
}           

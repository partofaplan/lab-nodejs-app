import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@material-ui/core"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function test() {
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
      <Experience>
        <CollapseExp />
      </Experience>
      <Education>
        <CollapseEd />
      </Education>
    </Layout>
  )
};

const CollapseExp = ({ isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="content"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: { height: "auto" },
            closed: { height: 0 }
          }}
          transition={{ duration: 0.25, clamp: true }}
        >
          <ContentsExp />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

const CollapseEd = ({ isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="content"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: { height: "auto" },
            closed: { height: 0 }
          }}
          transition={{ duration: 0.25, clamp: true }}
        >
          <ContentsEd />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

const ContentsExp = () => {
  return (
    <>
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
    </>
  );
};

const ContentsEd = () => {
  return (
    <>
      <h4>Metropolitan Community College</h4>

    </>
  );
};

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <Button variant="outlined" color="default" onClick={handleClick}><h3>Experience</h3></Button>
      <CollapseExp isOpen={isOpen} />
    </>
  );
};

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <Button variant="outlined" color="default" onClick={handleClick}><h3>Education</h3></Button>
      <CollapseEd isOpen={isOpen} />
    </>
  );
};

const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <Button variant="outlined" color="default" onClick={handleClick}><h3>Certifications</h3></Button>
      <Collapse isOpen={isOpen} />
    </>
  );
};
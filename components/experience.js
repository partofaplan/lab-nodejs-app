import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Experience() {
  return (
    <ClickExperience />
  )
}

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

const ClickExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive blue fluid button" onClick={handleClick}>Experience</button>
      <CollapseExp isOpen={isOpen} />
    </>
  );
};

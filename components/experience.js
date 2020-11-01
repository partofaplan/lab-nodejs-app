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
          <br />
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
          <h4>Devops Engineer at Proxibid</h4>
          <p><ul><li>Designed and improved a CI/CD pipeline for web applications using a suite of tools that includes Jenkins, Nexus, Docker, Rancher, Ansible, VMware and AWS.</li>
            <li>Managed and improved existing high-availability, scalable architecture in AWS.</li>
            <li>Managed network security of web applications through Palo Alto and certificate management.</li>
            <li>Developed and improved unified monitoring dashboards and metrics scripts which channeled into Datadog and Nagios. Automated deployment and configuration of agents.</li>
            <li>Developed and managed websites on Wordpress platform for hundreds of customers.</li>
            <li>Managed VMware resources and ESXi host.</li>
            <li>Managed and improved Atlassian infrastructure. Improved underlying security.</li>
          </ul></p>
          <h4>Systems Engineer at Northrop Grumman</h4>
          <p><ul><li>Created automated deployment of application servers using Ansible.</li>
            <li>Developed and improved scripts for configuring and patching middleware, Glassfish, WebLogic and Apache web servers using Perl and Bash.</li>
            <li>Troubleshot runtime issues with Java applications running on the web application servers. Improved application platform performance and security.</li>
            <li>Managed and improved Splunk infrastructure.</li>
            <li>Managed and improved Atlassian Infrastructure.</li>
            <li>Developed new monitors for capturing key performance metrics in Nagios.</li>
            <li>Participated in security audits of core applications and provided DoD with comprehensive documentation on application platform security.</li>
            <li>Performed load testing for applications using JVM and jMeter tools.</li>
            <li>Migrated strategic platform software to AWS cloud and improved platform performance.</li>
          </ul></p>
          <br />
        </>
      );
};

const ClickExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive blue fluid labeled icon button" onClick={handleClick}><i class="caret down icon"></i>Experience</button>
      <CollapseExp isOpen={isOpen} />
    </>
  );
};

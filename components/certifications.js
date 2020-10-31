import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "semantic-ui-react"

export default function Certifications() {
  return (
    <ClickCertifications />
  )
}

const CollapseCert = ({ isOpen }) => {
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
          <ContentsCert />
        </motion.section>
      )}
    </AnimatePresence>
  );
};


const ContentsCert = () => {
  return (
    <>
      <h4>CompTIA A+, Sec+, Project+, Cloud Essentials, Network+</h4>

    </>
  );
};


const ClickCertifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive blue fluid button" onClick={handleClick}>Certifications</button>
      <CollapseCert isOpen={isOpen} />
    </>
  );
};

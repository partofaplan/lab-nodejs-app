import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
      <br />
      <h4>CompTIA</h4>
        <p>A+, Sec+, Project+, Cloud Essentials, Network+</p>
      <br />
    </>
  );
};


const ClickCertifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive purple fluid labeled icon button" style={{ textAlign: "left" }} onClick={handleClick}><i class="caret down icon"></i>Certifications</button>
      <CollapseCert isOpen={isOpen} />
    </>
  );
};

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "semantic-ui-react"

export default function Education() {
  return (
    <ClickEducation />
  )
}

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


const ContentsEd = () => {
  return (
    <>
      <h4>Metropolitan Community College</h4>

    </>
  );
};


const ClickEducation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui button" onClick={handleClick}><h3>Education</h3></button>
      <CollapseEd isOpen={isOpen} />
    </>
  );
};

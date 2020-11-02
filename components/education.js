import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
      <br />
      <h4>Metropolitan Community College</h4>
      <p><i>AA - General Studies - Psychology</i><br />
        <b>Graduation:</b> 2015</p>
      <h4>Western Governors University</h4>
      <p><i>BS - Cloud Computing</i><br />
        <b>Graduation:</b> 2021</p>
      <br />
    </>
  );
};


const ClickEducation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive violet fluid labeled icon button" style={{ textAlign: "left" }} onClick={handleClick}><i class="caret down icon"></i>Education</button>
      <CollapseEd isOpen={isOpen} />
    </>
  );
};

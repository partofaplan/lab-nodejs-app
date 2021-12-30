import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Goals() {
  return (
    <ClickGoals />
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
          
          <br />
        </>
      );
};

const ClickGoals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive orange fluid labeled icon button" style={{ textAlign: "left" }} onClick={handleClick} > <i class="caret down icon"></i>Goals</button>
      <CollapseExp isOpen={isOpen} />
    </>
  );
};

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {pdfjs, Document, Page} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

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
      <Document file="/public/documents/resume.pdf">
          <Page pageIndex={0}/>
      </Document>
      );
};

const ClickExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button class="ui massive orange fluid labeled icon button" style={{ textAlign: "left" }} onClick={handleClick} > <i class="caret down icon"></i>Experience</button>
      <CollapseExp isOpen={isOpen} />
    </>
  );
};

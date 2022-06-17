import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import './all-pages.css';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
 
  return (
    <div className="container">
      <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={2.0} />
      ))}
    </Document>
    </div>
    
  );
}

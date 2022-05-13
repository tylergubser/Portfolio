import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../images/resume.pdf"

function Resume() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return(
        <div>
            <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Resume</h1>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
            </Document>
            <p>
            Page {pageNumber} of {numPages}
            </p>
            
        </div>
    )

}

export default Resume;
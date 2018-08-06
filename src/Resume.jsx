import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resume from './img/Resume.pdf'


export const Resume = props => {
  let pageNumber = 1
  return (
    <div>
      <Document file={resume} onLoadSuccess={this.onDocumentLoad} >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  )
}
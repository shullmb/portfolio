import React from 'react';
import { Document as PDF } from 'react-pdf';


export const Resume = props => {
  return (
    <div>
      <PDF file="./img/mbs_resume_0718.pdf" />
    </div>
  )
}
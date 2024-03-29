import React from "react";
import { programData1 } from "../data/programData1";
import { programData2 } from "../data/programData2";
import ProgramDetails from "../components/programDetails";

const Program = () => {
  return(
    <main>
      <h2>Conference Program</h2>
      <p>Each talk will be 30 minutes long followed by 10 minutes of Q&A.</p>
      <div className='programDate'>
        <h3>August 23, 2023</h3>
        <div className="date1"></div>
      </div>
      <ProgramDetails programData={programData1} />
      <div className='programDate'>
        <h3>August 24, 2023</h3>
        <div className="date1"></div>
      </div>
      <ProgramDetails programData={programData2} />
    </main>
  )
}
export default Program;
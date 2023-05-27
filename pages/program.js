import React from "react";
import { programData1 } from "../data/programData1";
import { programData2 } from "../data/programData2";
import ProgramDetails from "../components/programDetails";

const Program = () => {
  return(
    <main>
      <h2>Conference Program</h2>
      <p style={{textAlign: 'center'}}>Each talk will be 30 minutes long followed by 10 minutes of Q&A.</p>
      <h3>August 23, 2023</h3>
      <ProgramDetails programData={programData1} />
      <h3>August 24, 2023</h3>
      <ProgramDetails programData={programData2} />
    </main>
  )
}
export default Program;
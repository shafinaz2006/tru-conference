import Image from "next/image";
import pims from '../public/PIMS.png';
import logo from '../public/TRU_science.png';
import canc from '../public/CANSSI_Logo.jpg';

export default function Home() {
  return (
    <main>
      <p>
        This conference aims to share the most recent developments in statistics and data
        science with applications in biology, genetics, public health, and finance. Invited
        speakers consist of highly established, mid-range and early-career researchers
        from academia in Canada.
      </p>
      <p>
        Students are encouraged to attend the talks by the invited speakers and participate in the poster session from 5:15 pm
        - 8:15 pm on August 23, 2023.
      </p>
      <h2>Organizers and Sponsors</h2>
      <p>
        This conference is being organized by <a href='https://faculty.tru.ca/jtomal/' target='_blank'>Dr. Jabed Tomal </a> 
        <a href='https://www.tru.ca/' target='_blank'>(Thompson Rivers University) </a> and Dr. Erfanul Hoque 
        <a href='https://www.tru.ca/' target='_blank'> (Thompson Rivers University)</a>. The organizers are
        grateful for support from the Faculty of Science, Thompson Rivers University, the Pacific Institute of
        Mathematical Sciences (PIMS), and The Canadian Statistical Sciences Institute (CANSSI).
      </p>
      <div className="sponsorLogo">
        <Image
          src={logo} alt='kamloops'
          width={350} height={350} priority
          style={{objectFit:"contain"}}
        />
        <Image
          src={pims} alt='kamloops'
          width={350} height={350} priority
          style={{objectFit:"contain"}}
        />
        <Image
          src={canc} alt='kamloops'
          width={200} height={200} priority
          style={{objectFit:"contain"}}
        />
        
      </div>
    </main>
  )
}

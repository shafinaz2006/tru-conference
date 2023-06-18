import Image from "next/image";
import pims from '../public/PIMS.png';
import logo from '../public/TRUlogo.png';

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
        Students are encouraged to attend the talks by the invited speakers and participate in the poster session during 5:15 pm
        - 8:15 pm on August 23, 2023.
      </p>
      <h2>Organizers and Sponsors</h2>
      <p>
        This conference is being organized by <a href='https://faculty.tru.ca/jtomal/' target='_blank'>Dr. Jabed Tomal </a> 
        <a href='https://www.tru.ca/' target='_blank'>(Thompson Rivers University) </a> and Dr. Erfanul Hoque 
        <a href='https://www.tru.ca/' target='_blank'> (Thompson Rivers University)</a>. The organizers are
        grateful for support from Thompson Rivers University and the Pacific Institute of
        Mathematical Sciences.
      </p>
      <div className="sponsorLogo">
        <Image
          src={logo} alt='kamloops'
          width={200} height={200} priority
          style={{objectFit:"contain"}}
        />
        <Image
          src={pims} alt='kamloops'
          width={200} height={200} priority
          style={{objectFit:"contain"}}
        />
        
      </div>
    </main>
  )
}

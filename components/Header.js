import Link from 'next/link';
import Image from "next/image";
import bgImg from '../public/myImage2.jpg';

const Header = () => {
  return (
    <header>
      <h1>Conference in Statistics and Data Science with Applications in Biology, Genetics, Public Health, and Finance</h1>
      <div className="headerImg">
        <Image
            src={bgImg} alt='kamloops'
            fill sizes='100vw' priority
            style={{objectFit:"cover"}}
        />
        <div className='headerText'>
          <p>August 23 - 24, 2023</p>
          <p>Thomson Rivers University, Kamloops, BC</p>
        </div>
      </div>
      <nav>
        <Link href='/' className='navLink'>Home</Link>
        <Link href='registration' className='navLink'>Registration</Link>
        <Link href='program' className='navLink'>Program</Link>
        <Link href='directions' className='navLink'>Directions</Link>
        <Link href='contact' className='navLink'>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
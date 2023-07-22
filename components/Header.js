import Link from 'next/link';
import Image from "next/image";
import bgImg from '../public/myImage2.jpg';
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  const isHome = !pathname.split('/')[1];
  
  return (
    <header>
      <h1 className='pageHeading'>Conference in Statistics and Data Science with Applications in Biology, Genetics, Public Health, and Finance</h1>
      <div className="headerImg">
        <Image
            src={bgImg} alt='kamloops'
            fill sizes='100vw' priority
            style={{objectFit:"cover"}}
        />
        <div className='headerText'>
          <p>August 23 - 24, 2023</p>
          <p>Thompson Rivers University, Kamloops, BC</p>
        </div>
      </div>
      <nav>
        <Link href='/' className={isHome? 'navLinkSelected navLink': 'navLink'}>Home</Link>
        <Link href='registration' className={pathname.includes('registration')? 'navLinkSelected navLink': 'navLink'}>Registration</Link>
        <Link href='program' className={pathname.includes('program')? 'navLinkSelected navLink': 'navLink'}>Program</Link>
        <Link href='directions' className={pathname.includes('directions')? 'navLinkSelected navLink': 'navLink'}>Directions</Link>
        <Link href='contact' className={pathname.includes('contact')? 'navLinkSelected navLink': 'navLink'}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
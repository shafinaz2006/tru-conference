import Link from 'next/link';
import Image from "next/image";
import {bgImg} from '../public/CFJC-Kamloops-spring2.jpg';

const Header = () => {
  return (
    <header>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h1>
      <div className="headerImg">
        <Image
            src={bgImg} alt='kamloops'
            fill sizes='100vw'
            style={{objectFit:"cover"}}
        />
        <div className='headerText'>
          <p>July 20 - 23, 2023</p>
          <p>Thomson Rivers University, Kamloops, BC</p>
        </div>
      </div>
      <nav>
        <Link href='/' className='navLink'>Home</Link>
        <Link href='registration' className='navLink'>Registration</Link>
        <Link href='program' className='navLink'>Program</Link>
        <Link href='directions' className='navLink'>Directions</Link>
      </nav>
    </header>
  )
}

export default Header;
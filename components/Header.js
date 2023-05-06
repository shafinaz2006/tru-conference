import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h1>
      <div className="headerImg">
        <div className='headerText'>
          <p>July 20 - 23, 2023</p>
          <p>Thomson Rivers University, Kamloops, BC</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link href='/' className='navLink'>Home</Link></li>
          <li><Link href='registration' className='navLink'>Registration</Link></li>
          <li><Link href='program' className='navLink'>Program</Link></li>
          <li><Link href='directions' className='navLink'>Directions</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
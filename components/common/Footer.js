import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='GenSoft' className='logobg' />
              <br />
              <span>
                Questions? Reach us
              </span>
              <br />
              <br />
              {/* <h3>+1 001 234 5678</h3> */}
              <br />
              <a className="button-primary" href="mailto:care@gen-soft.dev">
                Request for quote
              </a>
            </div>
            <ul>
              <h3>COMPANY</h3>
              {/* <li>
                <Link href='//agency'>About agency</Link>
              </li> */}
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/services'>Our services</Link>
              </li>
              {/* <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/about'>About us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact us</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Mobile App Design & Development</Link>
              </li>
              <li>
                <Link href='/services'>Web App Design & Development</Link>
              </li>
              {/* <li>
                <Link href='/services'>Branding & Creative Services</Link>
              </li> */}

              <li>
                {/* <Link href='/services'>E-Commerce</Link> */}
              </li>
              <li>
                <Link href='/services'>Automation</Link>
              </li>
              <li>
                <Link href='/services'>Robotics</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <a href="http://facebook.com/mygensoft" target="_blank" rel="noopener noreferrer">
                    <BsFacebook size={25} />
                  </a>
                </li>
                {/* <li>
                <a href="http://facebook.com/mygensoft" target="_blank" rel="noopener noreferrer">
                    <AiFillBehanceCircle size={25} />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/mygensoft/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={25} />
                  </a>
                </li>

              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 GENSOFT ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              {/* <span>GORKCODER COMPANY</span> */}
              {/* <span> &nbsp; | &nbsp; </span> */}
              {/* <span>TERMS & CONDITIONS</span> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

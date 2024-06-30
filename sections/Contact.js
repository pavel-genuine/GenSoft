import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex'>
            <div className='left w-30'>
              <div className='contact-deatils'>

                <div className='box'>

                  <h3>
                    Dhaka (remotely) : <br />
                    House-06, Road-32/A, Sector-07,
                    <br />
                    Uttara, Dhaka-1230,
                    Bangladesh.
                    <br />
                    +8801876419641 (BD)
                    <br />
                    <a style={{ textTransform: 'lowercase' }} href="mailto:care@gen-soft.dev"> care@gen-soft.dev </a>

                  </h3>

                  <h3>
                    New York: <br />
                    4400 Vestal Parkway East
                    Binghamton, NY 13902.

                    <br />
                    +1 (607) 313-9245 (USA)

                    <br />
                    <a style={{ textTransform: 'lowercase' }} href="mailto:service@gen-soft.dev"> service@gen-soft.dev </a>

                  </h3>

                </div>

                {/* <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>New York</h3>
                  <span>990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span>
                </div> */}
                <div className='box'>

                  <span>Drop us a line anytime!</span>
                </div>


              </div>
              {/* <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul> */}
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <a className="button-primary" href="mailto:care@gen-soft.dev">
                  Submit
                </a>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

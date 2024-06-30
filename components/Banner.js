import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div style={{ marginTop: '40px' }}>
            <a className="button-primary" href="mailto:care@gen-soft.dev">
              Request a call-back
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

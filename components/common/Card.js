import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className='card '>
        <div className='card-img flex justify-center items-center'>
          <img className="" src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          {/* <Link href={`${path}/${data.id}`} className='title-link'> */}
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <TitleSm title={data.title} />
            
          
          </a>
          <p>
              {data?.post}</p>
          {/* </Link> */}
          {/* {caption && (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )} */}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
    </>
  )
}

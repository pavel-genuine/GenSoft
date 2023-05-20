import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>GenSoft</title>
        <meta property="og:title" content="GenSoft" />
        <meta
          name="og:description"
          content="You Ultimate Digital Partner"
        />
        {/* <meta property="og:type" content="video.movie" /> */}
        {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
        {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}

      </Head>
      <Hero />
    </>
  )
}

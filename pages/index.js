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
          content="Your Ultimate Tech Partner"
        />
        {/* <meta property="og:type" content="video.movie" /> */}
        <meta property="og:url" content="https://gensoft.vercel.app/" />
        <meta property="og:image" content="https://i.ibb.co/160XWZq/Screenshot-2023-05-20-141004.png" />

      </Head>
      <Hero />
    </>
  )
}

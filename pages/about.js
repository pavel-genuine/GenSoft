import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
    const router = useRouter()
    const { id } = router.query
    const post = blogdata.find((post) => post.id === parseInt(id))


    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <section className='post-details bg-top'>
                <div className='container'>
                    <div className='heading-title'>
                        <br />
                        <Title title={'About Us'} className='title-bg' />
                        <div className='img py'>
                            <img src={post?.cover} alt={post?.title} width='100%' height='100%' className='round' />
                        </div>
                        <div className='desc'>
                            <TitleSm title='Intro' />
                            <p>
                                GenSoft, a pioneering software firm dedicated to delivering innovative technology solutions that drive success and transform industries. Founded in [Year], we have grown into a trusted partner for businesses of all sizes, offering a diverse portfolio of products and services designed to meet the unique challenges of the modern digital landscape.

                                At [Company Name], our team of skilled professionals combines expertise in software development, user experience design, and cutting-edge technologies to create solutions that are not only powerful but also user-friendly. Our commitment to quality, reliability, and customer satisfaction sets us apart in the competitive software industry.
                            </p></div>
                    </div>

                    <Banner />

                    <div className='heading-title'>
                        <div className='desc'>
                            <TitleSm title='Our Mission' />

                            <p> Our mission is to empower businesses and individuals through innovative and reliable software solutions. We strive to create cutting-edge technology that enhances productivity, fosters growth, and transforms industries. Our commitment to excellence, customer satisfaction, and continuous improvement drives us to deliver high-quality, user-friendly products and services that meet the evolving needs of our clients.</p>
                        </div>
                        <div className='desc'>
                            <TitleSm title='Our Vision' />
                            <p>
                                Innovation: We are committed to pushing the boundaries of technology to develop innovative solutions that solve real-world problems.
                                <br />
                                <br />
                                Integrity: We conduct our business with honesty, transparency, and respect, building lasting relationships based on trust.
                                <br />
                                <br />
                                Excellence: We strive for excellence in everything we do, from the quality of our products to the services we provide.
                                <br />
                                <br />
                                Customer Focus: Our clients are at the heart of our business. We listen to their needs and work tirelessly to exceed their expectations.
                                <br />
                                <br />
                                Collaboration: We believe in the power of teamwork and foster a collaborative environment where ideas can flourish.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SinglePost



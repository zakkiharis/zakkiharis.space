import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../hoc/Layout'
import CardBlog from '../../components/Card/CardBlog'
import CardProject from '../../components/Card/CardProject'

export default function HomePage({ data }) {
    return (
        <Layout>
            <div className="relative h-full bg-blackGray20 text-white pt-16">
                <div className="flex lg:flex-row sm:min-h-screen flex-col">
                    <div className="flex-1 md:m-auto mb-5">
                        <div className="lg:text-texttron md:text-lgtexttron sm:text-mdtexttron text-smtexttron lg:pl-32 pl-16 md:pb-5 pr-12 font-rubik lg:border-b-2 mt-5 mb-3">
                            <div>I'm Zakki, a <span className="text-greenLantern">web developer</span>.</div>
                            <div>I enjoy creating user-centric, delightful, and human experiences. </div>
                        </div>
                    </div>
                    <div className="flex-1 mb-6 item md:my-auto">
                        <div className="mx-16 md:mx-36 lg:m-36">
                            <Image
                                height={400}
                                width={400}
                                className="mx-auto shadow-photo rounded-xl"
                                layout="responsive"
                                src="/images/profile.png"
                                alt="profile" />
                        </div>
                    </div>
                </div>
                <section id="about" />
                <div className="container mx-auto flex flex-col font-rubik">
                    <div className="mx-auto mt-20 py-5 text-4xl">
                        Abuot me
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 px-8 py-4 border-b-2 md:border-b-0  md:border-r-2 border-greenLantern">
                            I started real coding in October 2021, and I am a self-taught developer. I have a passion for modern looking websites with a few animations. I love what I am doing, and I am highly motivated to collaborate with someone. If you are up into some projects, just let me know!
                        </div>
                        <div className="flex-1 px-8 py-4">
                            <div className="mb-4">Technologies that I use:</div>
                            <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4">
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                                <div className="flex">
                                    <Image alt="React" src="/images/technologies/react.svg" width="24" height="24" />
                                    <div className="pl-2">React Js</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="projects" />
                <div className="container mx-auto flex flex-col font-rubik">
                    <div className="mt-20 mx-auto text-center">
                        <div className="text-4xl border-b-2 border-greenLantern pb-2 mb-2">
                            My Projects
                        </div>
                        <div>Check out my portfolio!</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mx-4">
                        <CardProject />
                    </div>
                </div>
                <section id="blog" />
                <div className="container px-8 sm:mx-auto flex flex-col font-rubik">
                    <div className="mt-20">
                        <div className="text-4xl border-b-2 border-greenLantern pb-2 mb-2">
                            Blog
                        </div>
                        <div>Check out my blog!</div>
                    </div>
                    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {data.map((d, index) => (
                            <CardBlog key={index} data={d} />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link href="/blog">
                            <button className="py-2 px-3 rounded-md mt-7 mb-5 border items-center border-greenOld text-greenLantern hover:bg-greenOld hover:text-white">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
                <Link href="/" scroll={true}>
                    <div className="absolute right-10 -bottom-6 p-4 justify-items-center bg-blackGray40 hover:bg-white rounded-full cursor-pointer shadow-lg">
                        <Image height={14} width={23} src="/images/arrow.png" alt="arrow" />
                    </div>
                </Link>
            </div>
        </Layout>
    )
}






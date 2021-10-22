import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../hoc/Layout'
import CardBlog from '../../components/Card/CardBlog'
import CardProject from '../../components/Card/CardProject'

export default function HomePage({ data }) {
    return (
        <Layout>
            <div className="relative text-white pt-16">
                <div className="flex px-8 sm:px-4 md:px-0 sm:flex-row flex-col-reverse">
                    <div className="flex-auto">
                        <div className="pr-12 font-ibmsans">
                            <div className="font-black text-5xl">Zakki Haris.</div>
                            <div className="font-semibold text-greenLantern mb-2">Fullstack Developer</div>
                            <div>I enjoy creating user-centric, delightful, and human experiences. </div>
                        </div>
                    </div>
                    <div className="flex-auto mb-4">
                        <Image
                            height={150}
                            width={150}
                            className="rounded-full"
                            src="/images/profile.jpg"
                            alt="profile" />
                    </div>
                </div>
                <section id="about" />
                <div className=" mx-auto flex flex-col font-ibmsans">
                    <div className="mx-auto mt-20 py-5 text-4xl">
                        Abuot me
                    </div>
                    <div className="flex flex-col">
                        <div className="flex-1 px-8 sm:px-4 md:px-0 py-4">
                            I started real coding in October 2021, and I am a self-taught developer. I have a passion for modern looking websites with a few animations. I love what I am doing, and I am highly motivated to collaborate with someone. If you are up into some projects, just let me know!
                        </div>
                        <div className="flex-1 px-8 sm:px-4 md:px-0 py-4">
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
                <div className=" mx-auto flex flex-col font-ibmsans">
                    <div className="mt-20 mx-auto text-center">
                        <div className="text-4xl border-b-2 border-greenLantern pb-2 mb-2">
                            My Projects
                        </div>
                        <div>Check out my portfolio!</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mx-14 sm:mx-4">
                        <CardProject />
                        <CardProject />
                    </div>
                </div>
                <section id="blog" />
                <div className="flex flex-col font-ibmsans">
                    <div className="mt-20 mx-7 md:mx-0">
                        <div className="text-4xl border-b-2 border-greenLantern pb-2 mb-2">
                            Blog
                        </div>
                        <div>Check out my blog!</div>
                    </div>
                    <div className="mt-7 mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-3">
                        {data.map((d, index) => (
                            <CardBlog key={index} data={d} />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link href="/blog">
                            <button className="py-2 px-3 rounded-md mt-8 mb-5 border items-center border-greenOld text-greenLantern hover:bg-greenOld hover:text-white">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
                <Link href="/" scroll={true}>
                    <div className="absolute right-10 md:right-0 -bottom-6 p-3 justify-items-center border border-greenLantern hover:bg-blackGray20 rounded-full cursor-pointer shadow-lg">
                        <Image height={14} width={23} src="/images/arrow.png" alt="arrow" />
                    </div>
                </Link>
            </div>
        </Layout>
    )
}






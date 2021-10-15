import Link from 'next/link'
import Container from '../ContainerBox'
import Image from 'next/image'
import Layout from '../../hoc/Layout'

export default function HomePage() {
    return (

        <Layout>
            <div className="relative h-full pt-8">
                <div className="flex lg:flex-row text-white sm:min-h-screen flex-col">
                    <div className="flex-1 md:m-auto mb-5">
                        <div className="lg:text-texttron md:text-lgtexttron sm:text-mdtexttron text-smtexttron lg:pl-32 pl-16 md:pb-5 pr-12 font-rubik lg:border-b-2 mt-5 mb-3">
                            <div>I'm Zakki, a <span className="text-greenLantern">web developer</span>.</div>
                            <div>I enjoy creating user-centric, delightful, and human experiences. </div>
                        </div>
                    </div>
                    <div className="flex-1 mb-6 md:my-auto">
                        <div>
                            <img className="mx-auto shadow-photo rounded-xl" src="/images/profile.png" alt="profile" />
                        </div>
                    </div>
                </div>
                <section id="about" />
                <div className="container text-white flex flex-col font-rubik">
                    <div className="mx-auto mt-20 py-5 text-4xl">
                        Abuot me
                    </div>
                    <div className="flex">
                        <div className=" flex-1 px-8 py-4 border-r border-greenLantern">
                            I started real coding in October 2021, and I am a self-taught developer. I have a passion for modern looking websites with a few animations. I love what I am doing, and I am highly motivated to collaborate with someone. If you are up into some projects, just let me know!
                        </div>
                        <div className="flex-1 px-8 py-4">
                            <div className="mb-4">Technologies that I use:</div>
                            <div className="grid grid-rows-2 grid-flow-col gap-4">
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
                <div className="text-white h-jumbotron bg-red">
                    <div>
                        <div>
                            My Projects
                        </div>
                    </div>
                </div>
                <Link href="/" scroll={true}>
                    <div className="absolute right-10 -bottom-6 p-4 justify-items-center bg-blackGray40 hover:bg-white rounded-full cursor-pointer shadow-lg">
                        <img src="/images/arrow.png" alt="arrow" />
                    </div>
                </Link>
            </div>
        </Layout>
    )
}
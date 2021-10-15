import Link from 'next/link'
import Logo from '../Logo'
import Head from 'next/head'
import Container from '../../container/ContainerBox'

export default function Header() {
    return (
        <header className="bg-blackGray30 z-50 p-2 shadow-medium">
            <Head>
                <title>Jack Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>
                <div className="tracking-header font-rubik h-16 flex items-center">
                    <div className="flex-grow-0">
                        <Logo />
                    </div>
                    <div className="flex-grow flex items-center justify-end">
                        <Link href="#about" scroll={true}>
                            <a className="text-white hover:text-greenLantern mx-5">About</a>
                        </Link>
                        <Link href="#projects">
                            <a className="text-white hover:text-greenLantern mx-5">Projects</a>
                        </Link>
                        <Link href="/blog" scroll={true}>
                            <a className="text-white hover:text-greenLanternmx-5">Blog</a>
                        </Link>
                        <Link href="/resume" passHref>
                            <div className="hidden sm:block p-2 rounded-md border border-greenLantern text-greenLantern hover:text-white hover:bg-greenLantern ml-5 cursor-pointer">
                                <a>Resume</a>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="hidden flex-grow-0 md:grid pr-5 justify-items-end cursor-pointer tooltip">
                    <Image width="22" height="22" src="/images/sun.svg" alt="Switch" />
                    <span className="tooltiptext">Coming soon</span>
                    </div> */}
                </div>
            </Container>
        </header>
    )
}
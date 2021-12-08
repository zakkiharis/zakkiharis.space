import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'


const Navbar = ({ href, text }) => (
    <div className="group mr-10">
        <div className="p-2  group-hover:bg-blackGray20 rounded-lg cursor-pointer">
            <Link href={href}>
                <a className="dark:text-white group-hover:text-greenLantern ">{text}</a>
            </Link>
        </div>
    </div>
)

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #111111;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 576px) {
        width: 100%;
    }

    a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #EFFFFA;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
    }

    &:hover {
        color: #343078;
    }
    }
`

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <Navbar href="/" text="Home" />
            <Navbar href="/#about" text="About" />
            <Navbar href="/blog" text="Blog" />
            <Navbar href="/kopisusu" text="KopiSusu" />
        </StyledMenu>
    )
}

const StyledBurger = styled.button`
    position: absolute;
    top: 25px;
    left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.4rem;
    height: 1.4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
    outline: none;
    }

    div {
    width: 1.4rem;
    height: 0.20rem;
    background: ${({ open }) => open ? '#EFFFFA' : '#08ff04'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }
`

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default function Header() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    const [open, setOpen] = useState(false)
    const node = useRef()

    return (
        <header className="pt-5">
            <Head>
                <title>Zakki Haris</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="tracking-header font-ibmsans flex items-center">
                <div className="sm:hidden flex-grow max-h-14 z-10" ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <div className="hidden sm:flex sm:flex-grow items-center justify-start select-none">
                    <Navbar href="/" text="Home" />
                    <Navbar href="/#about" text="About" />
                    <Navbar href="/blog" text="Blog" />
                    <Navbar href="/kopisusu" text="KopiSusu" />
                    {/* <Link href="/resume" passHref>
                        <div className="hidden sm:block p-2 rounded-md border border-greenOld text-greenLantern hover:text-white hover:bg-greenOld ml-5 cursor-pointer">
                            <a>Resume</a>
                        </div>
                    </Link> */}
                </div>
                <div className="dark:bg-blackGray40 bg-greenLantern rounded-md mr-4 sm:mr-0 py-2 select-none">
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-11 w-11 select-none"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {mounted && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800 dark:text-gray-200"
                            >
                                {theme === 'dark' ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clipRule="evenodd"
                                    />
                                ) : (
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                )}
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}
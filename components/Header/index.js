import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

const Navbar = ({ href, text }) => (
    <div className="group mr-10">
        <div className="p-2  group-hover:bg-blackGray20 rounded-lg cursor-pointer">
            <Link href={href}>
                <a className="text-white group-hover:text-greenLantern ">{text}</a>
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
            <Navbar href="/about" text="About" />
            <Navbar href="/blog" text="Blog" />
        </StyledMenu>
    )
}

const StyledBurger = styled.button`
    position: absolute;
    top: 1.1%;
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
                <div className="invisible sm:visible flex flex-grow  items-center justify-start">
                    <Navbar href="/" text="Home" />
                    <Navbar href="/#about" text="About" />
                    <Navbar href="/blog" text="Blog" />
                    {/* <Link href="/resume" passHref>
                        <div className="hidden sm:block p-2 rounded-md border border-greenOld text-greenLantern hover:text-white hover:bg-greenOld ml-5 cursor-pointer">
                            <a>Resume</a>
                        </div>
                    </Link> */}
                </div>
                <div className="mr-4 justify-items-end cursor-pointer p-1">
                    <Image width="22" height="22" src="/images/sun.svg" alt="Switch" />
                </div>
            </div>
        </header>
    )
}
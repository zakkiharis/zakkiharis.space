import Image from 'next/image'
export default function Footer() {
    return (
        <footer className='w-full text-center py-10 font-ibmsans tracking-header'>
            <div className="text-greenLantern font-bold">
                Lets Connect
            </div>
            <div className="text-white text-sm sm:text-base">
                Feel free to reach out for collaborations or just a friendly
            </div>
            <div className="flex pt-3 justify-between w-60 m-auto">
                <a target="_blank" href="https://web.facebook.com/zacky.haris.1" rel="noopener noreferrer">
                    <Image width="30" height="30" src="/images/logo/facebook.svg" alt="Switch" />
                </a>
                <a target="_blank" href="https://www.instagram.com/zakki_haris/" rel="noopener noreferrer">
                    <Image width="30" height="30" src="/images/logo/instagram.svg" alt="Switch" />
                </a>
                <a target="_blank" href="https://github.com/zakkiharis" rel="noopener noreferrer">
                    <Image width="30" height="30" src="/images/logo/github.svg" alt="Switch" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/zakki-abdurrahman-haris-785983118/" rel="noopener noreferrer">
                    <Image width="30" height="30" src="/images/logo/linkedin.svg" alt="Switch" />
                </a>
            </div>
        </footer>

    )
}
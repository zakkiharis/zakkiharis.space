import Image from 'next/image'
import Link from 'next/link'
export default function CardProject() {
    return (
        <div className="mx-14 my-7 bg-blackGray40 rounded-md">
            <Image className="object-cover rounded-md" height="200" width="350" src="/images/posts/img1.jpg" />
            <div className=" flex flex-row justify-between items-center mx-3 my-2 text-greenLantern">
                <p>zakkiharis.space</p>
                <div className="fill-current cursor-pointer flex flex-row">
                    <Link href="/">
                        <Image height="20" width="35" src="/images/logo/github-white.svg" />
                    </Link>
                    <Link href="/">
                        <Image height="20" width="30" src="/images/logo/external-link.svg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
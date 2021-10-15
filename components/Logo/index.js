import Link from 'next/link'

export default function Logo() {
    return (
        <div className="flex flex-row m-2 group">
            <div className="p-0.5 m-0.5 group-hover:bg-greenLantern rounded-md">
                <Link href="/">
                    <a className="font-bold text-greenLantern group-hover:text-blackGray30 group-hover:bg-greenLantern">ZAKKI</a>
                </Link>
            </div>
            <div className="p-0.5 m-0.5 bg-greenLantern rounded-md group-hover:bg-blackGray30">
                <Link href="/">
                    <a className="font-bold text-blackGray30 group-hover:text-greenLantern">HARIS</a>
                </Link>
            </div>
        </div>
    )
}
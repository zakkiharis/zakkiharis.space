import Image from 'next/image'
import Link from 'next/link'
export default function CardHome({ data }) {
    return (
        <div className="mx-3 font-ibmsans flex-1 border border-color bg-backgroundBlack mb-10 lg:mb-0 rounded-md">
            <Link href={`/blog/${data.slug}`} passHref>
                <div className="px-4 py-2 cursor-pointer group text-white text-sm">
                    <p className="font-bold mb-2 hover:text-greenLantern">{data.frontmatter.title}</p>
                    <p>{data.frontmatter.date}</p>
                </div>
            </Link>
        </div>
    )

}
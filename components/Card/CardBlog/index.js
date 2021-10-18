import Image from 'next/image'
import Link from 'next/link'
export default function CardHome({ data }) {
    return (
        <div className="mx-20 sm:mx-5 font-poppins flex-1 bg-blackGray40 mb-6 sm:mb-0 rounded-md">
            <Image className="object-cover rounded-t-md" height="150" width="280" src={data.frontmatter.cover_image} alt="Image article" />
            <Link href={`/blog/${data.slug}`} passHref>
                <div className="px-4 py-2 cursor-pointer group text-white text-sm">
                    <p className="font-bold mb-2 hover:text-greenLantern">{data.frontmatter.title}</p>
                    <p>{data.frontmatter.date}</p>
                </div>
            </Link>
        </div>
    )

}
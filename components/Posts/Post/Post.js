import Link from 'next/link'
import Image from 'next/image'

export default function Post({ data }) {
    return (
        <div className="p-10">
            <div className="cardpost  bg-blackGray40 hover:shadow-lg hover:border-transparent max-w-sm rounded">
                <Image className="object-cover" height="h-auto" width="w-full" src={data.frontmatter.cover_image} alt="Image article" />
                <Link href={`/blog/${data.slug}`} passHref>
                    <div className="px-6 py-4 cursor-pointer group">
                        <p className="font-bold text-white text-xl mb-2 group-hover:text-greenLantern">{data.frontmatter.title}</p>
                        <p className="text-white text-base group-hover:text-greenLantern">
                            {data.frontmatter.excerpt}
                        </p>
                    </div>
                </Link>
                <div className="px-6 pt-4 pb-2 cursor-pointer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:text-greenLantern hover:bg-blackGray20">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:text-greenLantern hover:bg-blackGray20">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:text-greenLantern hover:bg-blackGray20">#winter</span>
                </div>
            </div>
        </div>
    )
}
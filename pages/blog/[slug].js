import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import Layout from '../../hoc/Layout'
import Markdown from '../../components/Markdown'
import Toc from '../../components/Toc'
import Image from 'next/image'

export default function postBlog({
    frontmatter: { title, date, cover_image, tags },
    content
}) {
    let tag = tags ? tags.toString() : null
    let tagPost = tag ? <div className="sm:text-left sm:pr-3"><span className="bg-black bg-opacity-75 rounded-md p-2"> Tags : {tag}</span> </div> : <div></div>
    return (
        <div className="mt-16">
            <Layout>
                <div className="relative text-white sm:text-left">
                    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                        <div className="font-bold text-center text-4xl mb-4 pb-2 bg-black bg-opacity-75 rounded-md">
                            <span className="leading-normal px-4">{title}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 ">
                            <div className="sm:text-right sm:pr-3 mb-5">
                                <span className="bg-black bg-opacity-75 rounded-md p-2">Post on {date}</span>
                            </div>
                            {tagPost}
                        </div>
                    </div>
                    <div className="filter brightness-75">
                        <Image height="h-imgBlog" width="w-full" className="object-cover" src={cover_image} alt="" />
                    </div>
                </div>
                <div className="flex flex-row w-full mx-auto mt-10">
                    <div className="w-8/12 flex justify-end">
                        <article className="article prose prose-lg">
                            <Markdown content={content} />
                        </article>
                    </div>
                    <div className="flex justify-end text-left mr-5 w-4/12 h-4/5">
                        <Toc />
                    </div>
                </div>
            </Layout>
        </div>
    )

}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
        slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}
import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import Layout from '@hoc/Layout'
import Markdown from '@components/Markdown'
import ViewCounter from "@components/ViewCounter"
// import Toc from '../../components/Toc'
import Image from 'next/image'

export default function postBlog({
    frontmatter: { title, date, cover_image, tags },
    slug,
    content
}) {
    let tag = tags ? tags.toString() : null
    let tagPost = tag ? <div className="sm:text-left sm:pr-3"><span className="p-2"> Tags : {tag}</span> </div> : <div></div>
    return (
        <Layout>
            <div className="m-4 sm:m-0 sm:pt-6">
                <div className="dark:text-white select-none sm:text-left">
                    <div className="font-bold text-center text-4xl mb-4 pb-2 rounded-md">
                        <span className="leading-normal px-4">{title}</span>
                    </div>
                    <div className="grid justify-items-center grid-rows-1 sm:grid-cols-3 mb-4">
                        <div className="sm:text-right sm:pr-3 mb-5">
                            <span className="p-2">Post on {date}</span>
                        </div>
                        {tagPost}
                        <ViewCounter slug={slug} />
                    </div>
                    <div className="filter brightness-75">
                        <Image height="800" width="1350" className="object-cover" src={cover_image} alt="" />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="w-full flex justify-center">
                        {/* <article className="prose prose-indigo prose-sm sm:prose lg:prose-lg xl:prose-xl">
                            <Markdown content={content} />
                        </article> */}
                        <article className="w-full mt-4 prose dark:prose-dark max-w-none">
                            <Markdown content={content} />
                        </article>
                    </div>
                    {/* <div className="lg:flex hidden text-left lg:w-4/12 xl:mr-5 h-4/5">
                    <Toc />
                </div> */}
                </div>
            </div>
        </Layout>
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
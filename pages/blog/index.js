import Layout from '@hoc/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from "@components/Posts"
import { sortByDate } from '@lib/utils'

export default function Blog({ posts }) {


    return (
        <>
            <Layout>
                <Posts posts={posts} />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'))


    const posts = files.map(filename => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}
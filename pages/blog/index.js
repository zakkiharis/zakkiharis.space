import Layout from '../../hoc/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from "../../components/Posts"

export default function Blog({ posts }) {
    return (
        <div>
            <Layout>
                <div className="pt-16">
                    <Posts posts={posts} />
                </div>
            </Layout>
        </div>
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
            posts: posts
        }
    }
}
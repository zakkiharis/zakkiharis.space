import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'

import HomePage from '@container/Home'

export default function Home({ posts }) {
  const limitPost = posts.slice(0, 3)
  return (
    <>
      <div>
        <HomePage data={limitPost} />
      </div>
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
      posts: posts
    }
  }
}
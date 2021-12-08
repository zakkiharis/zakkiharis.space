import Markdown from '@components/Markdown'
import Layout from '@hoc/Layout'

export default function Kopisusu({ data }) {
    return (
        <>
            <Layout>
                <div className="px-4 md:px-0 mt-10">
                    <article className="article w-full mt-4 prose dark:prose-dark max-w-none">
                        <Markdown content={data.content} />
                    </article>
                </div>
            </Layout>
        </>
    )
}


async function fetchAPI(slug) {

    const res = await fetch(process.env.BLOGGER_API_URL + "/" + slug + "?key=" + process.env.BLOGGER_KEY)
    const json = await res.json()


    if (json.errors) {
        // console.log(json.errors)
        throw new Error('Faild to fetch API')
    }
    return json
}

export async function getStaticPaths() {
    const res = await fetch(process.env.BLOGGER_API_URL + "?key=" + process.env.BLOGGER_KEY)
    const json = await res.json()

    const paths = json.items.map((p) => ({
        params: {
            slug: p.id
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const data = await fetchAPI(slug)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }
}
import Markdown from '@components/Markdown'
import Layout from '@hoc/Layout'
import CardAlert from '@components/Card/CardAlert'


export default function Kopisusu({ data }) {

    let markdown;

    console.log(data.error);

    if (data.error) {
        markdown = (
            <CardAlert error={data.error.code} />
        )
    } else {
        markdown = (
            <div className="px-4 md:px-0 mt-10">
                <article className="article w-full mt-4 prose dark:prose-dark max-w-none">
                    <Markdown content={data.content} />
                </article>
            </div>
        )
    }

    return (
        <>
            <Layout>
                {markdown}
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

export async function getServerSideProps(context) {

    const { slug } = context.query;

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
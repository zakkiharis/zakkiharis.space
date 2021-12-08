import Layout from "@hoc/Layout";
import { useEffect, useState } from "react";
import Post from "./post";
import classes from "./Kopisusu.module.css";
import { quotes } from "quotes";

export default function PostBlogger({ data }) {

    const [quoteData] = useState(quotes);
    const [current, setCurent] = useState(0);
    const [quote, getQuote] = useState(quoteData[current]);

    useEffect(
        () => getQuote(quoteData[current]),
        [current, quote]
    );

    const nextQuote = () => {
        current === quoteData.length - 1 ? setCurent(0) : setCurent(current + 1)
    }
    const prevQuote = () => {
        current === 0 ? setCurent(quoteData.length - 1) : setCurent(current - 1)
    }

    const dotPicksQuote = (e) => setCurent(Number(e.target.id));

    return (
        <>
            <Layout>
                <div className="px-4 md:px-0">
                    <div className="border-color my-6">
                        <section>
                            <div className={classes.slideshow}>
                                <Slide quote={quote} />
                            </div>
                            <Arrow nextQuote={nextQuote} prevQuote={prevQuote} />
                            <Dots dotQty={quoteData} current={current} dotPicksQuote={dotPicksQuote} />
                        </section>
                    </div>
                    <div className="border-b-2 dark:border-greenLantern pb-2 text-center">
                        <h1 className="text-lg font-bold text-greenLantern">ALL POSTS</h1>
                    </div>
                    <div>
                        {data.map((d, index) => (
                            <Post key={index} data={d} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

// QUOTES FUNCTION

function Slide({ quote }) {
    return (
        <div className={classes.mySlides}>
            <q className={classes.quotes}>{quote.quote}</q>
            <p className={classes.author}>&mdash;{quote.author}</p>
        </div>
    )
}

function Arrow({ nextQuote, prevQuote }) {
    return (
        <>
            <a onClick={prevQuote} className={classes.prev} >&#10094;</a>
            <a onClick={nextQuote} className={classes.next} >&#10095;</a>
        </>
    )
}

function Dots({ dotQty, current, dotPicksQuote }) {
    return (
        <div className={classes.dotContainer}>
            {
                dotQty.map((dot, i) => {
                    return <span key={i} id={i} className={current === i ? classes.active : classes.dot}
                        onClick={dotPicksQuote}></span>
                })
            }
        </div>
    )
}


// BLOGGER DATA

async function fetchAPI() {
    const res = await fetch(process.env.BLOGGER_API_URL + "?key=" + process.env.BLOGGER_KEY)
    const json = await res.json()

    if (json.errors) {
        console.log(json.errors)
        throw new Error('Faild to fetch API')
    }
    return json
}

export async function getServerSideProps() {
    const data = await fetchAPI()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data.items
        }
    }
}

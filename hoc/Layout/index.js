import Header from '@components/Header'
import Footer from '@components/Footer'
import Container from '@container/ContainerBox'
import Spinner from '@components/UI/Spinner';

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Layout({ children, ...data }) {
    const meta = {
        title: 'Developer',
        description: 'Front-end Developer - React JS or Flutter',
        type: 'website',
        ...data
    }

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // components did update use hook
    useEffect(() => {
        const handleStart = (url) => {
            url !== router.pathname ? setLoading(true) : setLoading(false);
        }

        const handleComplete = (url) => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router])

    return (
        <div className="dark:bg-backgroundBlack">
            <Head>
                <title>{`${meta.title} - Zakki Haris`}</title>
                <meta name="robots" content="follow, index" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={meta.description} />
                <meta property="og:url" content={`http://zakkiharis.space${router.asPath}`} />
                <link rel="canonical" href={`http://zakkiharis.space${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Zakki Haris" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <Container>
                <div className="smooth">
                    <main className="relative">
                        <div className="w-full">
                            <Header />
                        </div>
                        <div className="dark:text-white min-h-screen">
                            <div>
                                {loading ? <Spinner loading={loading} /> : children}
                            </div>
                        </div>
                        <div className="w-full bottom-0">
                            <Footer />
                        </div>
                    </main>
                </div>
            </Container>
        </div>
    )
}
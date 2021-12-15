import Header from '@components/Header'
import Footer from '@components/Footer'
import Container from '@container/ContainerBox'
import Spinner from '@components/UI/Spinner';

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Layout({ children }) {

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
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="smooth">
                <main className="relative">
                    <div className="fixed w-full top-0 z-30">
                        <Header />
                    </div>
                    <div className="bg-blackGray20">
                        {children}
                    </div>
                    <div className="w-full bottom-0 z-30 ">
                        <Footer />
                    </div>
                </main>
            </div>
        </>
    )
}
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../container/ContainerBox'

export default function Layout({ children }) {
    return (
        <div className="bg-backgroundBlack">
            <Container>
                <div className="smooth">
                    <main className="relative">
                        <div className="w-full">
                            <Header />
                        </div>
                        <div>
                            {children}
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
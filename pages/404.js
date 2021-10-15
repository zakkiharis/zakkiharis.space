import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="bg-blackGray20 py-8">
            <div className="font-rubik bg-blackGray40 my-16 mx-36 text-center tracking-widest border border-greenLantern shadow-medium rounded-3xl">
                <div className="text-404 font-bold text-greenLantern">404</div>
                <div className="text-3xl font-bold text-greenLantern">OPPS<span className="text-white">!</span> PAGES NOT FOUND</div>
                <div className="text-lg my-5 text-white">
                    <div>Sorry, the page you're looking for doesn't exist.</div>
                    <div>If you think something is broken, report a problem.</div>
                </div>

                <div>
                    <Link href="/">
                        <button className="bg-blackGray30 hover:bg-greenLantern text-greenLantern hover:text-blackGray30 p-3 m-7 rounded-full">RETURN HOME</button>
                    </Link>
                    <Link href="/">
                        <button className="bg-greenLantern hover:bg-blackGray30 text-blackGray30 hover:text-greenLantern p-3 m-7 rounded-full">REPORT PROBLEM</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
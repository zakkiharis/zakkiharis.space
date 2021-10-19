import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="min-h-screen bg-blackGray20 py-8">
            <div className="font-rubik bg-blackGray40 my-4 sm:my-16 mx-16 sm:mx-32 md:mx-36 p-1 text-center tracking-widest border border-greenLantern shadow-medium rounded-3xl">
                <div className="text-404 sm:text-sm404 md:text-lg404 font-bold text-greenLantern">404</div>
                <div className=" text-xl md:text-3xl font-bold text-greenLantern">OPPS<span className="text-white">!</span> PAGES NOT FOUND</div>
                <div className=" text-md md:text-lg my-5 text-white">
                    <div>Sorry, the page you&#39;re looking for doesn&#39;t exist.</div>
                    <div>If you think something is broken, report a problem.</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center ">
                    <Link href="/" passHref>
                        <button className="bg-blackGray30 mx-auto hover:bg-greenLantern text-greenLantern hover:text-blackGray30 p-3 mb-7 rounded-full">RETURN HOME</button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="bg-greenLantern mx-auto hover:bg-blackGray30 text-blackGray30 hover:text-greenLantern p-3 mb-7 rounded-full">REPORT PROBLEM</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
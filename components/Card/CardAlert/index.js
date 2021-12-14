import Link from 'next/link'

const cardAlert = ({ error }) => (
    <div className="bg-blackGray40 text-greenLantern text-center p-10 mt-10 mx-10">
        <div className="text-404 sm:text-sm404 font-bold text-greenLantern">{error}</div>
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
)

export default cardAlert;
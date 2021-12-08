import Link from 'next/link'

export default function Post({ data }) {

    if (!data) {
        data = ""
    } else {
        data = data;
    }

    return (
        <div className="group">
            <div className="font-ibmsans max-w-full mx-auto mt-4">
                <Link href={`/kopisusu/${data.id}`} passHref>
                    <div className="my-4 cursor-pointer">
                        <p className=" dark:text-white text-lg mb-2 group-hover:text-greenLantern">{data.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
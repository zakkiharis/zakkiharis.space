import { useState } from "react"
import Post from "../Post/Post"
import { sortByDate } from '@lib/utils'

export default function Pagination({ data, dataLimit }) {

    const [search, setSearch] = useState('')
    const filterData = data
        .sort(sortByDate)
        .filter((datas) =>
            datas.frontmatter.title.toLowerCase().includes(search.toLowerCase())
        );

    let mathRound = Math.round(filterData.length / dataLimit)

    if (filterData.length > 6 && filterData.length % 6 > 0) {
        mathRound = mathRound + 1
    } else if (filterData.length <= 6) {
        mathRound = mathRound
    } else {
        mathRound
    }

    let pageLimit

    if (filterData.length <= 6) {
        pageLimit = 1
    } else if (filterData.length % 6 === 0) {
        pageLimit = filterData.length / 6
        pageLimit = Math.floor(pageLimit)
    } else {
        pageLimit = filterData.length / 6
        pageLimit = Math.floor(pageLimit + 1)
    }

    const [currentPage, setCurrentPage] = useState(1)

    function goToNextPage() {
        setCurrentPage((page) => page + 1)
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1)
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber)
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit

        return filterData.slice(startIndex, endIndex)
    }
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    const found = filterData.length > 0;

    return (
        <div>
            <div className="relative w-full mb-4 px-4 md:px-0 dark:text-greenLantern">
                <input
                    aria-label="Search articles"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search articles"
                    className="block w-full px-4 py-2 text-gray-900 rounded-md dark:bg-blackGray20 border-2 border-greenLantern"
                />
            </div>
            <div className="flex justify-center">
                {found ? <div></div> : <div className="text-greenLantern justify-center text-lg">No posts found.</div>}
            </div>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">

                {
                    getPaginatedData().map((d, index) => (
                        <Post key={index} data={d} />
                    ))
                }
            </div>
            <div className="flex flex-row justify-center mt-4 p-4">
                <div className="m-4 bg-greenLantern rounded-l-md">
                    <button
                        onClick={goToPreviousPage}
                        className={`text-blackGray20 font-bold p-2 ${currentPage === 1 ? 'disabled pointer-events-none' : ''}`}
                    >Prev</button>
                </div>
                <div className="m-4 bg-blackGray30">
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`px-6 sm:px-8 py-2 ${currentPage === item ? 'active:bg-kuning' : null}`}
                        >
                            <span className="dark:text-greenLantern text-white font-bold">{item}</span>
                        </button>
                    ))}
                </div>
                <div className="m-4 bg-greenLantern p-2 rounded-r-md">
                    <button
                        onClick={goToNextPage}
                        className={`text-blackGray20 font-bold disabled:opacity-50 ${found ? '' : 'disabled pointer-events-none'} ${currentPage === mathRound ? 'disabled pointer-events-none' : ''}`}
                    >Next
                    </button>
                </div>
            </div>
        </div>
    );

}
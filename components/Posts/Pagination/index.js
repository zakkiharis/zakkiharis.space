import { useState } from "react"
import { addRound } from '../../../lib/utils'
import Post from "../Post/Post"

export default function Pagination({ data, pageLimit, dataLimit }) {
    let mathRound = Math.round(data.length / dataLimit)
    if (data.length > 6 && data.length % 6 > 0) {
        mathRound = addRound(mathRound)
    } else {
        mathRound
    }

    const [pages] = useState(mathRound)
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

        return data.slice(startIndex, endIndex)
    }
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <div>
            <div className="bg-backgroundBlack grid justify-items-center grid-cols-1 md:grid-cols-2 gap-10">
                {getPaginatedData().map((d, index) => (
                    <Post key={index} data={d} />
                ))}
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
                            className={`px-8 py-2 ${currentPage === item ? 'active:bg-kuning' : null}`}
                        >
                            <span className="text-greenLantern font-bold">{item}</span>
                        </button>
                    ))}
                </div>

                <div className="m-4 bg-greenLantern p-2 rounded-r-md">
                    <button
                        onClick={goToNextPage}
                        className={`text-blackGray20 font-bold disabled:opacity-50 ${currentPage === pages ? 'disabled pointer-events-none' : ''}`}
                    >Next
                    </button>
                </div>
            </div>
        </div>
    );

}
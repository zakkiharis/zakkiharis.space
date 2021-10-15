import Pagination from "../pagination"

export default function Posts({ posts }) {

    // useEffect(() => {
    //     window.scrollTo({ behavior: 'smooth', top: '0px' });
    // }, [currentPage]);

    return (
        <div>
            {posts ? (
                <>
                    <Pagination
                        data={posts}
                        pageLimit={2}
                        dataLimit={6}
                    />
                </>
            ) : (
                <h1>Empty</h1>
            )}
        </div>
    )
}

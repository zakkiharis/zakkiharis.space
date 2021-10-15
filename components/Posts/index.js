import Pagination from "./Pagination"

export default function Posts({ posts }) {

    // useEffect(() => {
    //     window.scrollTo({ behavior: 'smooth', top: '0px' });
    // }, [currentPage]);

    return (
        <div className="pt-16">
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

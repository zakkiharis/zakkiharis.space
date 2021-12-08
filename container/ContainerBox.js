export default function Container({ children }) {

    return (
        <div>
            <div className="container  mx-auto max-w-2xl">{children}</div>
        </div>
    )
}


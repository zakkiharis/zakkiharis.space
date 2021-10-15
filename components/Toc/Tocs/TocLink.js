export default function TocLink() {
    return (
        <a
            key={title}
            active={active === index}
            depth={depth - headings.minDepth}
            onClick={event => {
                event.preventDefault()
                // setOpen(false)
                headings.nodes[index].scrollIntoView({
                    behavior: `smooth`,
                    block: `center`
                })
            }}
        >
            {title}
        </a>
    )
}
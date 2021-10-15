import { throttle } from "lodash"
import { useState, useEffect } from "react"
// import { useOnClickOutside } from "../../hooks"

import classes from './Toc.module.css'

const accumulateOffsetTop = (el, totalOffset = 0) => {
    while (el) {
        totalOffset += el.offsetTop - el.scrollTop + el.clientTop
        el = el.offsetParent
    }
    return totalOffset
}


export default function Toc({ headingSelector, getTitle, getDepth, ...rest }) {
    const { throttleTime = 200, tocTitle = `Contens` } = rest

    const [headings, setHeadings] = useState({
        titles: [],
        nodes: [],
        minDepth: 0,
    })
    // const [open, setOpen] = useState(false)

    const [active, setActive] = useState()
    // const ref = useRef()
    // useOnClickOutside(ref, () => setOpen(false))

    useEffect(() => {
        const selector =
            headingSelector || Array.from({ length: 6 }, (_, i) => `main h` + (i + 1))
        const nodes = Array.from(document.querySelectorAll(selector))
        const titles = nodes.map(node => ({
            title: getTitle ? getTitle(node) : node.innerText,
            depth: getDepth ? getDepth(node) : Number(node.nodeName[1])
        }))

        const minDepth = Math.min(...titles.map(h => h.depth))
        setHeadings({ titles, nodes, minDepth })
    }, [headingSelector, getTitle, getDepth])

    useEffect(() => {
        const scrollHandler = throttle(() => {
            const { titles, nodes } = headings

            const offsets = nodes.map(el => accumulateOffsetTop(el))
            const activeIndex = offsets.findIndex(
                offset => offset > window.scrollY + 0.8 * window.innerHeight
            )
            setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
        }, throttleTime)

        window.addEventListener(`scroll`, scrollHandler)
        return () => window.removeEventListener(`scroll`, scrollHandler)
    }, [headings])
    return (
        <>
            <div className={classes.tocDiv}>
                <div className={classes.tocTitle}>
                    <div>Contents</div>
                </div>
                <nav>
                    {headings.titles.map(({ title, depth }, index) =>
                    (
                        <div className={classes.tocLink}>
                            <a
                                key={title}
                                active={active !== index}
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
                        </div>
                    ))}
                </nav>
            </div>
        </>
    )

}
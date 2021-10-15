import { useEffect } from "react";

export function useOnClickOutside({ ref, handler, events }) {
    if (!events) events = [`mousedown`, `touchstart`]

    useEffect(() => {
        const deleteClickOutside = event =>
            !ref.current.contains(event.target) && handler()
        for (const event of events) document.addEventListener(event, deleteClickOutside)
        return () => {
            for (const event of events)
                document.removeEventListener(event, deleteClickOutside)
        }
    }, [ref, handler, events])
}
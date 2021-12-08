import marked from 'marked'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import classes from './Markdown-style.module.css'

export default function Markdown({ content }) {


    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null
    } else {
        return <div className={theme === 'dark' ? classes.MarkdownDark : classes.Markdown} dangerouslySetInnerHTML={{ __html: marked(content) }} ></div>
    }


}
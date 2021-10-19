import marked from 'marked'
import classes from './Markdown-style.module.css'

export default function Markdown({ content }) {
    return <div className={classes.Markdown} dangerouslySetInnerHTML={{ __html: marked(content) }} ></div>
}
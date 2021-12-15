import classes from './Spinner.module.css'

export default function Spinner({ loading }) {
    return (
        <div className={loading ? '' : 'hidden'}>
            <div className={classes.LdsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

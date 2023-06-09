import s from './common.module.css'
const ErrorField = (props) => {
    return (
        <div>
            <p className={s.error}>{props.errorMessage}</p>
        </div>
    )
}
export { ErrorField }
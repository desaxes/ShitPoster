import s from './common.module.css'
const ErrorPage = (props) => {
    return (
        <div className={s.errorpage}>
            <div className='page-block'>
                <div className={s.errorpage_inner}>
                    <div>404 NOT FOUND</div>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage
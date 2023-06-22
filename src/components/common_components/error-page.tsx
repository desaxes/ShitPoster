import React from 'react'
import s from './common.module.css'
const ErrorPage = () => {
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
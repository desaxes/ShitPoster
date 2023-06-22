import React from 'react'
import s from './common.module.css'

const ErrorField = (props: { errorMessage: string }) => {
    return (
        <div>
            <p className={s.error}>{props.errorMessage}</p>
        </div>
    )
}
export { ErrorField }
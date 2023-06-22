import Spin from './../../img/Spin.svg'
import s from './common.module.css'
import React from 'react'
const Preloader = () => {
    return <img className={s.spin} src={Spin}></img>
}
export {Preloader}
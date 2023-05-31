import s from './subs.module.css'
import { Sub } from './sub'
import React from 'react'

import { Preloader } from '../common_components/preloader'
const SubsPresentation = (props) => {
    let subs = props.subs.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
        followed={p.followed} avatar={p.photos.small} onSub={props.onSub} />)
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    let pageNumbers = pages.map(p => <span onClick={(e) => { props.onPageChanged(p) }}
        className={`${props.pageNumber === p && s.selectedPage} ${s.pageNumber}`}>{p}</span>)
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    {props.isFetching ? <Preloader /> : null}
                    <div className={s.btn_box}></div>
                    <input className={s.search} type="text" placeholder='Search' />
                    <ul className={`${s.sub_list} ${props.isFetching && s.page_opacity}`}>
                        {subs}
                    </ul>
                    <div className={s.counter}>
                        {pageNumbers}
                    </div>
                </div>
            </div>
        </div>
    )
}
export { SubsPresentation }
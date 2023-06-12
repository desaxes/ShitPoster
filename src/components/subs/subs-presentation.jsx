import s from './subs.module.css'
import { Sub } from './sub'
import React from 'react'

import { Preloader } from '../common_components/preloader'
import { Flex, Pagination } from '@mantine/core'
const SubsPresentation = (props) => {
    let subs = props.users.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
        followed={p.followed} avatar={p.photos.small} subscribeProgress={props.subscribeProgress}
        following={props.following} />)
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    {props.isFetching ? <Preloader /> : null}
                    <div className={s.btn_box}></div>
                    <input className={s.search} type="text" placeholder='Search' />
                    <Flex gap={16} direction={'column'} className={`${s.sub_list} ${props.isFetching && s.page_opacity}`}>
                        {subs}
                    </Flex>
                    <Pagination color='indigo' value={props.pageNumber} onChange={(e) => { props.onPageChanged(e)}} 
                    total={pageCount} withEdges  siblings={3} className={s.counter} size="lg">
                    </Pagination>
                </div>
            </div>
        </div>
    )
}
export { SubsPresentation }
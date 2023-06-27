import s from './subs.module.css'
import { Sub } from './sub'
import React, { FC } from 'react'
import { Preloader } from '../common_components/preloader'
import { Flex, Pagination } from '@mantine/core'
import { Tabs } from '@mantine/core';
type propsType = {
    users: userItemType[],
    pageSize: number
    pageNumber: number
    totalCount: number
    isFetching: boolean
    subscribeProgress: number[]
    following: (followed: boolean, id: number) => void
    onPageChanged: (e: number) => void
}

const SubsPresentation: FC<propsType> = (props) => {
    let subs = props.users.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
        followed={p.followed} avatar={p.photos.small} subscribeProgress={props.subscribeProgress}
        following={props.following} />)
    let pageCount = Math.ceil(props.totalCount / props.pageSize);

    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <Tabs defaultValue='Users' >
                        <Tabs.List grow>
                            <Tabs.Tab value='Users'>Users</Tabs.Tab>
                            <Tabs.Tab value='Subs'>Subs</Tabs.Tab>
                        </Tabs.List>
                        {props.isFetching ? <Preloader /> : null}
                        <Tabs.Panel mt={0} pt={30} value='Users'>
                            <div className={s.panel}>
                                <div className={s.btn_box}></div>
                                <input className={s.search} type="text" placeholder='Search' />
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${props.isFetching && s.page_opacity}`}>
                                    {subs}
                                </Flex>
                                <Pagination color='red' value={props.pageNumber} onChange={(e) => { props.onPageChanged(e) }}
                                    total={pageCount} withEdges siblings={3} className={s.counter} size="lg">
                                </Pagination>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='Subs'>
                            <div className={s.panel}>
                                <div className={s.btn_box}></div>
                                <input className={s.search} type="text" placeholder='Search' />
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${props.isFetching && s.page_opacity}`}>
                                    {subs}
                                </Flex>
                                <Pagination color='red' value={props.pageNumber} onChange={(e) => { props.onPageChanged(e) }}
                                    total={pageCount} withEdges siblings={3} className={s.counter} size="lg">
                                </Pagination>
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export { SubsPresentation }
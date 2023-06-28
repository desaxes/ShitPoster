import s from './subs.module.css'
import { Sub } from './sub'
import React, { FC, useEffect, useState } from 'react'
import { Preloader } from '../common_components/preloader'
import { Flex, Pagination } from '@mantine/core'
import { Tabs, TextInput } from '@mantine/core';
import { useDebouncedState } from "@mantine/hooks";
import { useNavigate, useParams } from 'react-router-dom'

type propsType = {
    users: userItemType[]
    subUsers: userItemType[]
    pageSize: number
    pageNumber: number
    totalCount: number
    isFetching: boolean
    subscribeProgress: number[]
    following: (followed: boolean, id: number) => void
    getUsers: (pageSize: number, pageNumber: string | undefined, term: string) => void
}
const SubsPresentation: FC<propsType> = (props) => {
    const [searchValue, setSearchValue] = useDebouncedState('', 500)
    const params = useParams()
    useEffect(() => {
        props.getUsers(props.pageSize, params.page, searchValue)
        navigate('/subs/' + params.page + "/" + searchValue)
    }, [searchValue, params.page])
    const changePage = (e: number) => {
        navigate('/subs/' + e + "/" + searchValue)
    }
    const navigate = useNavigate()
    let subs = props.users.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
        followed={p.followed} avatar={p.photos.small} subscribeProgress={props.subscribeProgress}
        following={props.following} />)
    let subUsers = props.subUsers.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
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
                                <TextInput size='lg' defaultValue={searchValue} className={s.search} type="text"
                                    placeholder='Search' onChange={(e) => setSearchValue(e.currentTarget.value)} />
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${props.isFetching && s.page_opacity}`}>
                                    {subs}
                                </Flex>
                                {/* @ts-ignore */}
                                <Pagination color='red' value={parseInt(params.page)} onChange={(e) => { changePage(e) }}
                                    total={pageCount} withEdges siblings={3} className={s.counter} size="lg">
                                </Pagination>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='Subs'>
                            <div className={s.panel}>
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${props.isFetching && s.page_opacity}`}>
                                    {subUsers}
                                </Flex>
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export { SubsPresentation }
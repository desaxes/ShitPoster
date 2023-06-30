import s from './subs.module.css'
import { Sub } from './sub'
import React, { useEffect, useLayoutEffect } from 'react'
import { Preloader } from '../common_components/preloader'
import { Flex, Pagination } from '@mantine/core'
import { Tabs, TextInput } from '@mantine/core';
import { useDebouncedState } from "@mantine/hooks";
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as subSelectors from "../../redux/subs-selectors";
import * as authSelectors from "../../redux/auth-selectors";
import { getUsers } from '../../redux/subs-reducer'
import { AppDispatch } from '../../redux/redux-store'
import { AuthRedirect } from '../common_components/hoc-components'
import { compose } from 'redux'

const SubsPage: React.FC = React.memo(() => {
    const totalCount = useSelector(subSelectors.getTotalCount)
    const users = useSelector(subSelectors.getUsersArray)
    const pageSize = useSelector(subSelectors.getPageSize)
    const isFetching = useSelector(subSelectors.getIsFetching)
    const subscribeProgress = useSelector(subSelectors.getSubscribeProgress)
    const subUsersArray = useSelector(authSelectors.getSubUsers)
    const dispatch: AppDispatch = useDispatch()

    let [search, setSearch] = useSearchParams()
    const [searchValue, setSearchValue] = useDebouncedState(search.get('term'), 500)
    let page = search.get('page')
    const location = useLocation()

    useLayoutEffect(() => {
        if (searchValue === '') {
            setSearch({ page: '1' })
        }
        else {
            setSearch({ page: '1', term: searchValue as string })
        }
    }, [searchValue])
    useLayoutEffect(() => {
        if (searchValue === null) {
            setSearch({ page: page as string })
        }
        else {
            setSearch({ page: page as string, term: searchValue })
        }
    }, [])
    useEffect(() => {
        dispatch(getUsers(location.search + '&count=8'))
    }, [location.search])
    const changePage = (e: number) => {
        if (searchValue === null) {
            setSearch({ page: e.toString() })
        }
        else if (searchValue === '') {
            setSearch({ page: e.toString() })
        }
        else {
            setSearch({ page: e.toString(), term: searchValue })
        }
    }

    let subs = users.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
        followed={p.followed} avatar={p.photos.small} subscribeProgress={subscribeProgress}
    />)
    let subUsers = subUsersArray.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status}
        followed={p.followed} avatar={p.photos.small} subscribeProgress={subscribeProgress}
    />)

    let pageCount = Math.ceil(totalCount / pageSize);

    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <Tabs defaultValue='Users' >
                        <Tabs.List grow>
                            <Tabs.Tab value='Users'>Users</Tabs.Tab>
                            <Tabs.Tab value='Subs'>Subs</Tabs.Tab>
                        </Tabs.List>
                        {isFetching ? <Preloader /> : null}
                        <Tabs.Panel mt={0} pt={30} value='Users'>
                            <div className={s.panel}>
                                <div className={s.btn_box}></div>
                                <TextInput size='lg' defaultValue={searchValue as string} className={s.search} type="text"
                                    placeholder='Search' onChange={(e) => setSearchValue(e.currentTarget.value)} />
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${isFetching && s.page_opacity}`}>
                                    {subs}
                                </Flex>
                                {subs.length === 0 ? <p className={s.error_message}>'Incorrect Results'</p> : undefined}
                                <Pagination color='red' value={parseInt(search.get('page') as string)} onChange={(e) => { changePage(e) }}
                                    total={pageCount} withEdges siblings={3} className={s.counter} size="lg">
                                </Pagination>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='Subs'>
                            <div className={s.panel}>
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${isFetching && s.page_opacity}`}>
                                    {subUsers}
                                </Flex>
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
})
export default compose<React.FC>(
    AuthRedirect
)(SubsPage)
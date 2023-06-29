import s from './subs.module.css'
import { Sub } from './sub'
import React, { useEffect } from 'react'
import { Preloader } from '../common_components/preloader'
import { Flex, Pagination } from '@mantine/core'
import { Tabs, TextInput } from '@mantine/core';
import { useDebouncedState } from "@mantine/hooks";
import { useNavigate, useParams } from 'react-router-dom'
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

    let { page = '', term = '' } = useParams<{ page: string, term: string }>()
    const [searchValue, setSearchValue] = useDebouncedState(term, 500)

    useEffect(() => {
        if (searchValue === term) {
            dispatch(getUsers(pageSize, parseInt(page), term))
            navigate('/subs/' + page + "/" + term)
        }
        else {
            term = searchValue
            dispatch(getUsers(pageSize, 1, term))
            navigate('/subs/' + 1 + "/" + term)
        }
    }, [searchValue, page])

    const changePage = (e: number) => {
        navigate('/subs/' + e + "/" + term)
    }
    const navigate = useNavigate()

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
                                <TextInput size='lg' defaultValue={searchValue} className={s.search} type="text"
                                    placeholder='Search' onChange={(e) => setSearchValue(e.currentTarget.value)} />
                                <Flex gap={16} direction={'column'} className={`${s.sub_list} ${isFetching && s.page_opacity}`}>
                                    {subs}
                                </Flex>
                                <Pagination color='red' value={parseInt(page)} onChange={(e) => { changePage(e) }}
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
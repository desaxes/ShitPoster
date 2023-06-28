import { connect } from "react-redux"
import { following, getUsers } from "../../redux/subs-reducer"
import React from "react";
import { SubsPresentation } from "./subs-presentation";
import { AuthRedirect } from "../common_components/hoc-components";
import { compose } from "redux";
import * as subSelectors from "../../redux/subs-selectors";
import { appStateType } from "../../redux/redux-store";

type propsType = {
    users: userItemType[]
    pageSize: number
    pageNumber: number
    totalCount: number
    isFetching: boolean
    subscribeProgress: number[]
    subUsers: userItemType[]
    following: (followed: boolean, id: number) => void
    getUsers: (pageSize: number, pageNumber: string | undefined | number, term: string) => void
}

const Users: React.FC<propsType> = (props) => {
    return (<>
        <SubsPresentation users={props.users} subUsers={props.subUsers} pageSize={props.pageSize} pageNumber={props.pageNumber}
            totalCount={props.totalCount} isFetching={props.isFetching} subscribeProgress={props.subscribeProgress}
            following={props.following} getUsers={props.getUsers} />
    </>)
}
const mapStateToProps = (state: appStateType) => {
    return {
        users: subSelectors.getUsersArray(state),
        pageSize: subSelectors.getPageSize(state),
        pageNumber: subSelectors.getPageNumber(state),
        totalCount: subSelectors.getTotalCount(state),
        isFetching: subSelectors.getIsFetching(state),
        subscribeProgress: subSelectors.getSubscribeProgress(state),
        subUsers: state.auth.subUsers
    }
}
export default compose<React.FC>(
    connect(mapStateToProps, {
        getUsers,
        following
    }),
    AuthRedirect
)(Users)
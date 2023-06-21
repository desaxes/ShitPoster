import { connect } from "react-redux"
import { following, onPageChanged, getUsers } from "../../redux/subs-reducer"
import React, { useEffect } from "react";
import { SubsPresentation } from "./subs-presentation";
import { AuthRedirect } from "../common_components/hoc-components";
import { compose } from "redux";
import * as subSelectors from "../../redux/subs-selectors";
import { appStateType } from "../../redux/redux-store";

type propsType = {
    users: userItemType[],
    pageSize: number
    pageNumber: number
    totalCount: number
    isFetching: boolean
    subscribeProgress: number[]
    following: (followed: boolean, id: number) => void
    getUsers: (pageSize: number, pageNumber: number) => void
    onPageChanged: (pageSize: number, pageNumber: number) => void
}

const Users: React.FC<propsType> = (props) => {
    useEffect(() => {
        props.getUsers(props.pageSize, props.pageNumber)
    }, [props.pageNumber])
    const onPageChanged = (pageNumber: number) => {
        props.onPageChanged(props.pageSize, pageNumber)
    }
    return (<>
        <SubsPresentation users={props.users} pageSize={props.pageSize} pageNumber={props.pageNumber}
            totalCount={props.totalCount} isFetching={props.isFetching} subscribeProgress={props.subscribeProgress}
            following={props.following} onPageChanged={onPageChanged} />
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
    }
}
export default compose<React.Component<propsType>>(
    connect(mapStateToProps, {
        getUsers,
        onPageChanged,
        following
    }),
    AuthRedirect
)(Users)
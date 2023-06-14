import { connect } from "react-redux"
import { following, onPageChanged, getUsers } from "../../redux/subs-reducer"
import React, { useEffect } from "react";
import { SubsPresentation } from "./subs-presentation";
import { AuthRedirect } from "../common_components/hoc-components";
import { compose } from "redux";
import * as subSelectors from "../../redux/subs-selectors";

const Users = (props) => {
    useEffect(() => {
        props.getUsers(props.pageSize, props.pageNumber)
    }, [props.pageNumber])
    const onPageChanged = (pageNumber) => {
        props.onPageChanged(props.pageSize, pageNumber)
    }
    return (<>
        <SubsPresentation {...props} onPageChanged={onPageChanged} />
    </>)
}
const mapStateToProps = (state) => {
    return {
        users: subSelectors.getUsersArray(state),
        pageSize: subSelectors.getPageSize(state),
        pageNumber: subSelectors.getPageNumber(state),
        totalCount: subSelectors.getTotalCount(state),
        isFetching: subSelectors.getIsFetching(state),
        subscribeProgress: subSelectors.getSubscribeProgress(state),
    }
}
const SubsContainer = connect(mapStateToProps, {
    getUsers,
    onPageChanged,
    following
})(AuthRedirect(Users))

export default compose(
    connect(mapStateToProps, {
        getUsers,
        onPageChanged,
        following
    }),
    AuthRedirect
)(Users)
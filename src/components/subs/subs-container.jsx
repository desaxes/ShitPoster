import { connect } from "react-redux"
import { following, onPageChanged, getUsers } from "../../redux/subs-reducer"
import React from "react";
import { SubsPresentation } from "./subs-presentation";
import { AuthRedirect } from "../common_components/hoc-components";
import { compose } from "redux";
import * as subSelectors from "../../redux/subs-selectors";

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.pageNumber)
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(this.props.pageSize, pageNumber)
    }
    render() {
        return <>
            <SubsPresentation {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
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
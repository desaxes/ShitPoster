import { connect } from "react-redux"
import { following, onPageChanged, getUsers } from "../../redux/subs-reducer"
import React from "react";
import { SubsPresentation } from "./subs-presentation";
import { Navigate } from "react-router-dom";
import { AuthRedirect } from "../common_components/hoc-components";
import { compose } from "redux";

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
        subs: state.subsPage.subsData,
        pageSize: state.subsPage.pageSize,
        pageNumber: state.subsPage.pageNumber,
        totalCount: state.subsPage.totalCount,
        isFetching: state.subsPage.isFetching,
        subscribeProgress: state.subsPage.subscribeProgress,
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
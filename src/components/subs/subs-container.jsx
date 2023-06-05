import { connect } from "react-redux"
import { setLoader, setPageNumber, setUsersNumber, setsubs, subscribe } from "../../redux/subs-reducer"
import React from "react";
import { SubsPresentation } from "./subs-presentation";
import { userAPI } from "../../api/api";


class Users extends React.Component {
    componentDidMount() {
        this.props.setLoader(true)
        userAPI.getUsers(this.props.pageSize, this.props.pageNumber).then(data => {
            this.props.setLoader(false)
            this.props.setsubs(data.items)
            this.props.setUsersNumber(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setLoader(true)
        this.props.setPageNumber(pageNumber)
        userAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            this.props.setLoader(false)
            this.props.setsubs(data.items)
        })
        this.props.setLoader(true)
    }
    render() {
        return <>
            <SubsPresentation subs={this.props.subs} pageNumber={this.props.pageNumber}
                totalCount={this.props.totalCount} onPageChanged={this.onPageChanged}
                subscribe={this.props.subscribe} pageSize={this.props.pageSize} setLoader={this.props.setLoader}
                isFetching={this.props.isFetching} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        subs: state.subsPage.subsData,
        pageSize: state.subsPage.pageSize,
        pageNumber: state.subsPage.pageNumber,
        totalCount: state.subsPage.totalCount,
        isFetching: state.subsPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSub: (id) => { dispatch(subscribeAC(id)) },
//         setSubs: (subsData) => { dispatch(setsubsAC(subsData)) },
//         setUsersNumber: (count) => { dispatch(setUsersNumberAC(count)) },
//         setPageNumber: (page) => { dispatch(setPageNumberAC(page)) },
//         setLoader: (isFetching) => { dispatch(setLoaderAC(isFetching)) }
//     }
// }


const SubsContainer = connect(mapStateToProps, {
    subscribe,
    setsubs,
    setUsersNumber,
    setPageNumber,
    setLoader,
})(Users)

export { SubsContainer }
import { connect } from "react-redux"
import { setLoaderAC, setPageNumberAC, setUsersNumberAC, setsubsAC, subscribeAC } from "../../redux/subs-reducer"
import React from "react";
import axios from 'axios'
import { SubsPresentation } from "./subs-presentation";


class Users extends React.Component {
    componentDidMount() {
        this.props.setLoader(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" +
            this.props.pageSize + "&page=" + this.props.pageNumber).then(response => {
                this.props.setLoader(false)
                this.props.setSubs(response.data.items)
                this.props.setUsersNumber(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setLoader(true)
        this.props.setPageNumber(pageNumber)
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" +
            this.props.pageSize + "&page=" + pageNumber).then(response => {
                this.props.setLoader(false)
                this.props.setSubs(response.data.items)
            })
        this.props.setLoader(true)
    }
    render() {
        return <>
            <SubsPresentation subs={this.props.subs} pageNumber={this.props.pageNumber}
                totalCount={this.props.totalCount} onPageChanged={this.onPageChanged}
                onSub={this.props.onSub} pageSize={this.props.pageSize} setLoader={this.props.setLoader} 
                isFetching={this.props.isFetching}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        subs: state.subsPage.subsData,
        pageSize: state.subsPage.pageSize,
        pageNumber: state.subsPage.pageNumber,
        totalCount: state.subsPage.totalCount,
        isFetching:state.subsPage.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSub: (id) => { dispatch(subscribeAC(id)) },
        setSubs: (subsData) => { dispatch(setsubsAC(subsData)) },
        setUsersNumber: (count) => { dispatch(setUsersNumberAC(count)) },
        setPageNumber: (page) => { dispatch(setPageNumberAC(page)) },
        setLoader:(isFetching)=>{dispatch(setLoaderAC(isFetching))}
    }
}
const SubsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export { SubsContainer }
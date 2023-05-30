import { connect } from "react-redux"
import { Users } from "./subs"
import { setPageNumberAC, setUsersNumberAC, setsubsAC, subscribeAC } from "../../redux/subs-reducer"

const mapStateToProps = (state) => {
    return {
        subs: state.subsPage.subsData,
        pageSize:state.subsPage.pageSize,
        pageNumber:state.subsPage.pageNumber,
        totalCount:state.subsPage.totalCount
    }
}
const mapDispatchToProps = (dispatch) => {
return {
    onSub:(id)=>{dispatch(subscribeAC(id))},
    setSubs:(subsData)=>{dispatch(setsubsAC(subsData))},
    setUsersNumber:(count)=>{dispatch(setUsersNumberAC(count))},
    setPageNumber:(page)=>{dispatch(setPageNumberAC(page))}
}
}
const SubsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export { SubsContainer }
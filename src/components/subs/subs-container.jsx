import { connect } from "react-redux"
import { Subs } from "./subs"
import { setsubsAC, subscribeAC } from "../../redux/subs-reducer"

const mapStateToProps = (state) => {
    return {
        subs: state.subsPage.subsData
    }
}
const mapDispatchToProps = (dispatch) => {
return {
    onSub:(id)=>{dispatch(subscribeAC(id))},
    setSubs:(subsData)=>{dispatch(setsubsAC(subsData))}
}
}
const SubsContainer = connect(mapStateToProps, mapDispatchToProps)(Subs)

export { SubsContainer }
import { connect } from "react-redux";
import Content from "../content/content";
import NavContainer from "../nav/nav";
import s from './main.module.css'

const Main = (props) => {
    return (
        <main className={s.main}>
            <NavContainer />
            <Content />
            <div className={s.right_panel}></div>
        </main>)
}
const mapStateToProps = (state) => {
    return {
        load:state.app.isFetching
    }
}
const MainContainer = connect(mapStateToProps, {})(Main)
export default MainContainer;
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
export default Main;
import Content from "../content/content";
import NavContainer from "../nav/nav";
import s from './main.module.css'

const Main = (props) =>{
return(<main className={s.main}>
    <NavContainer />
    <Content/>
</main>)}
export default Main;
import Content from "../content/content";
import Nav from "../nav/nav";
import s from './main.module.css'

const Main = (props) =>{
return(<main className={s.main}>
    <Nav />
    <Content uD={props.uD}/>
</main>)}
export default Main;
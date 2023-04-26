import Content from "../content/content";
import Nav from "../nav/nav";
import s from './main.module.css'

const Main = () =>{
return(<main className={s.main}>
    <Nav />
    <Content />
</main>)}
export default Main;
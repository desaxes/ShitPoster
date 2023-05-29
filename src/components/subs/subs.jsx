import axios from 'axios'
import { Sub } from './sub'
import s from './subs.module.css'
const Subs = (props) => {
    let getUsers = ()=>{
        if (props.subs.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setSubs(response.data.items)
        })
    }}
    let subs = props.subs.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status} followed={p.followed} avatar={p.photos.small} onSub={props.onSub} />)
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <div className={s.btn_box}><button onClick={getUsers} className='quick-posting__btn'>Show Users</button></div>
                    <input className={s.search} type="text" placeholder='Search' />
                    <ul className={s.sub_list}>
                        {subs}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export { Subs }
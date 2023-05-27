import { Sub } from './sub'
import s from './subs.module.css'
const Subs = (props) => {
    if (props.subs.length === 0) {
        props.setSubs([
            {
                id: 1,
                name: 'John',
                desc: 'Beginner Shitposter',
                sub: false
            },
            {
                id: 2,
                name: 'James',
                desc: 'I love dogs. I can post dogs all day. Dogs Dogs DOGS!',
                sub: false
            },
            {
                id: 3,
                name: 'Jenny',
                desc: 'My name is Jenny.',
                sub: false
            },
            {
                id: 4,
                name: 'Jeff',
                desc: 'Crazy Guy',
                sub: false
            },
            {
                id: 5,
                name: 'Julie',
                desc: 'Give me money, plz. My cat is sick.',
                sub: false
            },
            {
                id: 6,
                name: 'Jessy',
                desc: 'Jessy!',
                sub: false
            }])
        }
        let subs = props.subs.map(p => <Sub key={p.id} id={p.id} name={p.name} desc={p.desc} sub={p.sub} onSub={props.onSub} />)
        return (
            <div className={s.subs}>
                <div className='page-block'>
                    <div className={s.page_inner}>
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
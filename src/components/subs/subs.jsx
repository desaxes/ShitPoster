import React from "react";
import { Sub } from './sub'
import s from './subs.module.css'
import axios from 'axios'
class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.pageSize + "&page=" + this.props.pageNumber).then(response => {
            this.props.setSubs(response.data.items)
            this.props.setUsersNumber(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setPageNumber(pageNumber)
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.pageSize + "&page=" + pageNumber).then(response => {
            this.props.setSubs(response.data.items)
        })
    }
    render() {
        let subs = this.props.subs.map(p => <Sub key={p.id} id={p.id} name={p.name} status={p.status} followed={p.followed} avatar={p.photos.small} onSub={this.props.onSub} />)
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= 20; i++) {
            pages.push(i)
        }
        let pageNumbers = pages.map(p => <span onClick={(e) => { this.onPageChanged(p) }} className={`${this.props.pageNumber === p && s.selectedPage} ${s.pageNumber}`}>{p}</span>)
        console.log(pageNumbers)
        return (
            <div className={s.subs}>
                <div className='page-block'>
                    <div className={s.page_inner}>
                        <div className={s.btn_box}></div>
                        <input className={s.search} type="text" placeholder='Search' />
                        <ul className={s.sub_list}>
                            {subs}
                        </ul>
                        <div className={s.counter}>
                            {pageNumbers}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Users };
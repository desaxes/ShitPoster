import React from 'react'
import pencil from './../../img/pencil.png'
import pencilColor from './../../img/pencil_color.png'
import s from './profile.module.css'
class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        pencilMode: false
    }
    changeImagePC = () => {
        this.setState({pencilMode:true})
    }
    changeImageP = () => {
        this.setState({pencilMode:false})
    }
    activateEditMode = ()=>{
        this.setState({editMode:true})
    }
    deactivateEditMode = ()=>{
        this.setState({editMode:false})
    }
    render() {
        return (
            <div className={s.status_field}>
                {!this.state.editMode ?
                    <div>
                        <q>{this.props.status}</q>
                    </div> :
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode} maxLength={25} className={s.status_input} placeholder={this.props.status}></input>
                    </div>
                }
                <div className={s.pencil_box}>
                    <img onClick={this.activateEditMode}
                    onMouseLeave={this.changeImageP} onMouseEnter={this.changeImagePC} 
                    src={this.state.pencilMode ? pencilColor : pencil} 
                    alt="" />
                </div>
            </div>
        )
    }
}

export default ProfileStatus;
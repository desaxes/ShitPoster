import React from 'react'
import pencil from './../../img/pencil.png'
import pencilColor from './../../img/pencil_color.png'
import s from './profile.module.css'
class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        pencilMode: false,
        newStatusText: ""
    }
    changeImagePC = () => {
        this.setState({ pencilMode: true })
    }
    changeImageP = () => {
        this.setState({ pencilMode: false })
    }
    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.setStatus(this.props.authId, this.state.newStatusText)
        this.resetStatusText()
    }
    updateStatusText = (e) => {
        this.setState({ newStatusText: e.target.value })
    }
    resetStatusText = (e) => {
        this.setState({ newStatusText: "" })
    }
    render() {
        return (
            <div className={s.status_field}>
                {!this.state.editMode ?
                    <div>
                        <q>{this.props.status}</q>
                    </div> :
                    <div>
                        <input onChange={this.updateStatusText} value={this.state.newStatusText} autoFocus onBlur={this.deactivateEditMode} maxLength={25} className={s.status_input} placeholder={this.props.status}></input>
                    </div>
                }
                {this.props.profileId === this.props.authId && <div className={s.pencil_box}>
                    <img onClick={this.activateEditMode}
                        onMouseLeave={this.changeImageP} onMouseEnter={this.changeImagePC}
                        src={this.state.pencilMode ? pencilColor : pencil}
                        alt="" />
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;
import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { logout } from "../../redux/auth-reducer.ts";
import { compose } from "redux";
import { appStateType } from "../../redux/redux-store.ts";
type props = {
    id: number
    isAuth: boolean
    logout: () => void
    login: string
    photo: string
}
const HeaderAPI: React.FC<props> = (props) => {
    return (
        <Header id={props.id} isAuth={props.isAuth} login={props.login} photo={props.photo} 
        logout={props.logout} />
    )
}

const mapStateToProps = (state: appStateType) => {
    return {
        id: state.auth.id,
        // profile: state.profilePage.profileInfo,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}
// const HeaderContainer = connect(mapStateToProps, { logout })(HeaderAPI)

export default compose<React.Component<props>>(
    connect(mapStateToProps, { logout })
)(HeaderAPI) 
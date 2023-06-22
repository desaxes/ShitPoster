import { connect } from "react-redux";
import React from 'react'
import { Login } from "./login";
import { authtorize, login } from "../../redux/auth-reducer";
import { appStateType } from "../../redux/redux-store";
import { compose } from "redux";

const LoginAPI: React.FC<loginProps> = (props) => {
    return <>
        <Login id={props.id} isAuth={props.isAuth} login={props.login} authtorize={props.authtorize} captchaUrl={props.captchaUrl}
            authError={props.authError} authId={props.authId} />
    </>
}

const mapStateToProps = (state: appStateType) => {
    return {
        authId: state.auth.id,
        authError: state.auth.authError,
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}
export default compose<React.Component<loginProps>>(
    connect(mapStateToProps, {
        authtorize,
        login
    })
)(LoginAPI) 
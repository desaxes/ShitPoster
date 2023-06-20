import { connect } from "react-redux";
import React from 'react'
import { Login } from "./login";
import { authtorize, login } from "../../redux/auth-reducer.ts";
const LoginAPI = (props) => {
    return <>
        <Login {...props} />
    </>
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const LoginConatainer = connect(mapStateToProps, {
    authtorize,
    login
})(LoginAPI)

export default LoginConatainer 
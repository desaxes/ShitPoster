import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { appStateType } from '../../redux/redux-store'

const mapStateToProps = (state: appStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
type props = {
    isAuth: boolean
}
const AuthRedirect = (Component: React.ComponentType<props>) => {
    return connect(mapStateToProps)(function (props: props) {
        if (props.isAuth === false) {
            return <Navigate to='/ShitPoster/login' />
        }
        else { return <Component {...props} /> }
    }
    )
}
export { AuthRedirect }
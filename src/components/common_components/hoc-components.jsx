import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const AuthRedirect = (Component) => {
    return connect(mapStateToProps)(class extends React.Component {
        render() {
            if (this.props.auth.isAuth === false) {
                return <Navigate to='/login' />
            }
            else { return <Component {...this.props} /> }
        }
    })
}
export { AuthRedirect }
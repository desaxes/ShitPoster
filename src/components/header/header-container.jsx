import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { logout } from "../../redux/auth-reducer.ts";
const HeaderAPI = (props) => {
    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profilePage.profileInfo,
    }
}
const HeaderContainer = connect(mapStateToProps, { logout })(HeaderAPI)

export { HeaderContainer }
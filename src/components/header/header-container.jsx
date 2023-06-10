import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { logout } from "../../redux/auth-reducer";
class HeaderAPI extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const HeaderContainer = connect(mapStateToProps, { logout })(HeaderAPI)

export { HeaderContainer }
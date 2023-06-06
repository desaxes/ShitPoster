import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { authtorize } from "../../redux/auth-reducer";

class HeaderAPI extends React.Component {
    authorize = () => {
        this.props.authtorize();
    }
    render() {
        return (
            <Header {...this.props} authorize={this.authorize} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }

}
const HeaderContainer = connect(mapStateToProps, { authtorize })(HeaderAPI)

export { HeaderContainer }
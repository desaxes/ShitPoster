import { connect } from "react-redux";
import React from "react";
import Header from "./header";

class HeaderAPI extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const HeaderContainer = connect(mapStateToProps, { })(HeaderAPI)

export { HeaderContainer }
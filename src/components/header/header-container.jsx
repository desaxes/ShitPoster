import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import axios from "axios";
import { setUserData,setAuthInfo } from "../../redux/auth-reducer";

class HeaderAPI extends React.Component {
    authorize = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
            { withCredentials: true }).then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data.id, response.data.data.login, response.data.data.email)
                    axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+response.data.data.id).then(
                        response=>{
                            this.props.setAuthInfo(response.data)
                        }
                    )
                }
            })
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
const HeaderContainer = connect(mapStateToProps, { setUserData,setAuthInfo })(HeaderAPI)

export { HeaderContainer }
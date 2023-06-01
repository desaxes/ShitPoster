import { connect } from 'react-redux';
import { addPost, updatePostText, setProfileInfo } from '../../redux/profile-reducer';
import Profile from './profile';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
class ProfilePage extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.id
        if (!userid){
            userid=2;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+userid).then(response => {
            this.props.setProfileInfo(response.data)
        })
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        profileInfo:state.profilePage.profileInfo,
        userId:state.profilePage.userId
    }
}
export function withRouter (Children){return(props)=>{const match = {params:useParams()}
return <Children {...props} match={match}/>}}

let urlContainerComponent = withRouter(ProfilePage);

const ProfileContainer = connect(mapStateToProps,
    {
        addPost,
        updatePostText,
        setProfileInfo
    })(urlContainerComponent)

export { ProfileContainer, ProfilePage, urlContainerComponent };
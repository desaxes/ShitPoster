import { connect } from 'react-redux';
import { addPost, updatePostText, getUserProfile, setFollowedInfo } from '../../redux/profile-reducer';
import { following } from "../../redux/subs-reducer"
import Profile from './profile';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
class ProfilePage extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.id
        if (!userid) {
            userid = 2;
        }
        this.props.getUserProfile(userid);
        axios.get("https://social-network.samuraijs.com/api/1.0/follow/" + userid, { withCredentials: true }).then(response => {
            this.props.setFollowedInfo(response.data)
        })

    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        profileInfo: state.profilePage.profileInfo,
        userId: state.profilePage.userId,
        subscribeProgress: state.subsPage.subscribeProgress
    }
}
export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() }
        return <Children {...props} match={match} />
    }
}

let urlContainerComponent = withRouter(ProfilePage);

const ProfileContainer = connect(mapStateToProps,
    {
        addPost,
        updatePostText,
        getUserProfile,
        setFollowedInfo,
        following
    })(urlContainerComponent)

export { ProfileContainer, ProfilePage, urlContainerComponent };
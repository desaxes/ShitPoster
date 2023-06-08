import { connect } from 'react-redux';
import { addPost, getUserProfile, setFollowedInfo, setStatus } from '../../redux/profile-reducer';
import { following } from "../../redux/subs-reducer"
import Profile from './profile';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthRedirect } from '../common_components/hoc-components';
import { compose } from 'redux';
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
        return <Profile {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        profileInfo: state.profilePage.profileInfo,
        userId: state.profilePage.userId,
        subscribeProgress: state.subsPage.subscribeProgress,
        status: state.profilePage.status
    }
}
export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() }
        return <Children {...props} match={match} />
    }
}

export default compose(
    connect(mapStateToProps,
        {
            addPost,
            getUserProfile,
            setFollowedInfo,
            following,
            setStatus
        }),
    withRouter,
    AuthRedirect
)(ProfilePage);
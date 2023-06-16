import { connect } from 'react-redux';
import { getUserProfile, setFollowedInfo, setStatus, setPhoto } from '../../redux/profile-reducer';
import { addPost } from '../../redux/news-reducer';
import { following } from "../../redux/subs-reducer"
import * as profileSelectors from "../../redux/profile-selectors"
import { getSubscribeProgress } from "../../redux/subs-selectors"
import Profile from './profile';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthRedirect } from '../common_components/hoc-components';
import { compose } from 'redux';
const ProfilePage = (props) => {
    const userid = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (!userid.id) {
            navigate('/profile/' + props.authId)
        } else {
            props.getUserProfile(userid.id);
        }
    }, [userid.id])
    return (<Profile {...props} />)
}
const mapStateToProps = (state) => {
    return {
        posts: state.news.postData,
        profileInfo: profileSelectors.getProfileInfo(state),
        userId: profileSelectors.getUserId(state),
        subscribeProgress: getSubscribeProgress(state),
        status: profileSelectors.getStatus(state),
        authId: state.auth.id,
        authPhoto:state.auth.photo,
    }
}
// export function withRouter(Children) {
//     return (props) => {
//         const match = { params: useParams() }
//         return <Children {...props} match={match} />
//     }
// }

export default compose(
    connect(mapStateToProps,
        {
            addPost,
            getUserProfile,
            setFollowedInfo,
            following,
            setStatus,
            addPost,
            setPhoto
        }),
    // withRouter,
    AuthRedirect,
)(ProfilePage);
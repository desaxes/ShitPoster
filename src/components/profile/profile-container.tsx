import { connect } from 'react-redux';
import { getUserProfile, setStatus, setPhoto, getFollowedInfo } from '../../redux/profile-reducer.ts';
import { addPost } from '../../redux/news-reducer.ts';
import { following } from "../../redux/subs-reducer.ts"
import { changeAuthPhoto, } from "../../redux/auth-reducer.ts"
import * as profileSelectors from "../../redux/profile-selectors.ts"
import { getSubscribeProgress } from "../../redux/subs-selectors.ts"
import Profile from './profile.tsx';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthRedirect } from '../common_components/hoc-components';
import { compose } from 'redux';
import { appStateType } from '../../redux/redux-store.ts';
type props = {
    posts: postType[]
    profileInfo: profileInfoType
    userId: number
    subscribeProgress: number[]
    status: string
    authId: number
    authPhoto: string
    login: string
    addPost: () => void
    getUserProfile: (userId: number|string) => void
    following: () => void
    setStatus: () => void
    setPhoto: () => void
    changeAuthPhoto: () => void
    getFollowedInfo: () => void
    followed: boolean
}
const ProfilePage: React.FC<props> = (props) => {
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
const mapStateToProps = (state: appStateType) => {
    return {
        posts: state.news.postData,
        profileInfo: profileSelectors.getProfileInfo(state),
        userId: profileSelectors.getUserId(state),
        subscribeProgress: getSubscribeProgress(state),
        status: profileSelectors.getStatus(state),
        authId: state.auth.id,
        authPhoto: state.auth.photo,
        login: state.auth.login,
        followed: state.profilePage.followed
    }
}
// export function withRouter(Children) {
//     return (props) => {
//         const match = { params: useParams() }
//         return <Children {...props} match={match} />
//     }
// }

export default compose<React.FC>(
    connect(mapStateToProps,
        {
            addPost,
            getUserProfile,
            following,
            setStatus,
            setPhoto,
            changeAuthPhoto,
            getFollowedInfo
        }),
    // withRouter,
    AuthRedirect,
)(ProfilePage);
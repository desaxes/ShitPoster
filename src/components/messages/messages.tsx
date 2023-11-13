import React, { useEffect } from 'react'
import s from './messages.module.css'
import Chat from '../chat/chat';
import Contact from '../contact/contact';
import { AppDispatch } from '../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import * as dialogSelectors from '../../redux/messages-selectors.ts'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { compose } from 'redux';
import { AuthRedirect } from '../common_components/hoc-components.tsx';




const Messages: React.FC = () => {
    const params = useParams()
    const navigate = useNavigate()
    const currentDialog = useSelector(dialogSelectors.getCurrentDialog)
    useEffect(() => {
        if (params.id === undefined && currentDialog != '') {
            navigate('/ShitPoster/messages/' + currentDialog)
        }
    }, [])
    const dialogsData = useSelector(dialogSelectors.getDialogsData)

    return (
        <div className={s.messages}>
            <div className={s.inner}>
                {<Chat />}
            </div>
        </div>
    )
}
export default compose<React.FC>(
    AuthRedirect,
)(Messages)
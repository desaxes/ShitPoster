import s from './header.module.css'
import React, { FC, useEffect } from 'react'
import logo from './../../img/shit_icon.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth-selectors.ts'
import { AppDispatch } from '../../redux/redux-store.ts';
import { logout } from '../../redux/auth-reducer.ts';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text, Flex, Avatar, Textarea, ScrollArea } from '@mantine/core';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
type chatData = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
const Header: React.FC = React.memo(() => {

    const [chatData, setChatData] = useState<chatData[]>([])
    const [messageText, setMessageText] = useState('')
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setChatData((prevMessages) => ([...prevMessages, ...newMessages]))
        })
    }, [])
    const messages = chatData?.map((m, index) => <ChatMessage key={index} message={m.message} photo={m.photo} userId={m.userId} userName={m.userName} />)
    const id = useSelector(authSelectors.getAuthId)
    const isAuth = useSelector(authSelectors.getIsAuth)
    const login = useSelector(authSelectors.getLogin)
    const photo = useSelector(authSelectors.getAuthPhoto)
    const dispatch: AppDispatch = useDispatch()
    const [menuSwitch, рunchSwitch] = useState(false)
    const navigate = useNavigate()
    const showUserMenu = () => {
        if (menuSwitch === false) {
            рunchSwitch(true)
        }
        else {
            рunchSwitch(false)
        }
    }
    const toProfile = () => {
        navigate("/ShitPoster/profile/" + id)
    }
    const toSettings = () => {
        navigate("/ShitPoster/settings")
    }
    const exitProfile = () => {
        dispatch(logout());
        navigate("/ShitPoster/login")
        рunchSwitch(false)
    }
    const sendMessage = (data: string) => {
        if (data != '') {
            ws.send(data)
        }
        setMessageText('')
    }
    const [opened, { toggle, close }] = useDisclosure(false);
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div>
                    <img className={s.logo} src={logo} alt='logotip'></img>
                </div>
                <NavLink to="/ShitPoster/newsfeed" className={s.title}>
                    ShitPoster
                </NavLink>
                {isAuth === true ? <Group position="center">
                    <button onClick={toggle} className='quick-posting__btn'>Open Chat</button>
                </Group> : undefined}
                <div className={s.flex}>{isAuth === false ?
                    <NavLink to="/ShitPoster/login" className={s.login}>Login</NavLink> : <div className={s.authorize}>
                        <div className={s.flex}>
                            <div className={s.header__avatar}>
                                <img className={s.avatar}
                                    src={photo === null ? logo : photo} alt='logotip'></img>
                            </div>
                            <div className={s.login}>{login}</div>
                            <div className={s.settings}>
                                <button onClick={showUserMenu} type='button' className={s.set_btn}>
                                    {menuSwitch ? '◄' : '▼'}
                                </button>
                                {menuSwitch &&
                                    <div className={s.sMenu}>
                                        <div onClick={toProfile} className={s.btn_box}>
                                            <div className='quick-posting__btn'>Profile</div>
                                        </div>
                                        <div onClick={toSettings} className={s.btn_box}>
                                            <div className='quick-posting__btn'>Settings</div>
                                        </div>
                                        <div onClick={exitProfile} className={s.btn_box}>
                                            <div className='quick-posting__btn'>Exit</div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>}
                </div>
                {isAuth === true ? <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
                    <Text size="sm" mb="xs" weight={500}>
                        CHAT
                    </Text>
                    <Flex direction='column' p={10}>
                        <ScrollArea h={300} pr={20}>
                            {messages}
                        </ScrollArea>
                        <Flex justify={'space-between'} align={'center'} gap={40}>
                            <Textarea onChange={(e) => setMessageText(e.currentTarget.value)} value={messageText} placeholder="Enter message" sx={{ flex: 6 }} />
                            <Button disabled={ws.readyState !== WebSocket.OPEN} onClick={(e) => sendMessage(messageText)} sx={{ flex: 1 }}>Send</Button>
                        </Flex>
                    </Flex>
                </Dialog> : undefined}
            </div>
        </header>)
}
)
const ChatMessage: React.FC<chatData> = (props) => {
    return (
        <Flex direction='column' align={'start'} mb={20}>
            <Flex gap={10} align={'center'}>
                <Avatar radius={'xl'} src={props.photo === null ? logo : props.photo}></Avatar>
                <Text fw={700}>{props.userName}</Text>
            </Flex>
            <Text maw={200} ml={50}>{props.message}</Text>
        </Flex>
    )
}
export default Header;
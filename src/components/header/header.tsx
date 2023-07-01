import s from './header.module.css'
import React from 'react'
import logo from './../../img/shit_icon.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth-selectors.ts'
import { AppDispatch } from '../../redux/redux-store.ts';
import { logout } from '../../redux/auth-reducer.ts';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text, Flex, Avatar, Textarea, ScrollArea } from '@mantine/core';

const Header: React.FC = () => {
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
        navigate("/profile/" + id)
    }
    const toSettings = () => {
        navigate("/settings")
    }
    const exitProfile = () => {
        dispatch(logout());
        navigate("/login")
        рunchSwitch(false)
    }
    const [opened, { toggle, close }] = useDisclosure(false);
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div>
                    <img className={s.logo} src={logo} alt='logotip'></img>
                </div>
                <NavLink to="/newsfeed" className={s.title}>
                    ShitPoster
                </NavLink>
                {isAuth === true ? <Group position="center">
                    <button onClick={toggle} className='quick-posting__btn'>Open Chat</button>
                </Group> : undefined}
                <div className={s.flex}>{isAuth === false ?
                    <NavLink to="/login" className={s.login}>Login</NavLink> : <div className={s.authorize}>
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
                    <Flex direction='column'>
                        <ScrollArea h={300}>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Avatar></Avatar>
                                <Text>Message</Text>
                            </Flex>
                        </ScrollArea>
                        <Flex justify={'space-between'} align={'center'} gap={40}>
                            <Textarea placeholder="Enter message" sx={{ flex: 6 }} />
                            <Button onClick={close} sx={{ flex: 1 }}>Send</Button>
                        </Flex>
                    </Flex>
                </Dialog> : undefined}
            </div>
        </header>)
}
export default Header;
import './App.css';
import Main from './components/main/main';
import Header from './components/header/header';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize } from "./redux/app-reducer";
import { Preloader } from './components/common_components/preloader';
import { appStateType } from './redux/redux-store';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';
type props = {
  initialized: boolean
  initialize: () => void
}
const App: React.FC<props> = (props) => {
  useEffect(() => {
    props.initialize()
  }, [props.initialized])
  if (props.initialized === true) {
    return (
      <div className="App">
        <div className='wrapper'>
          <Header />
          <Main />
        </div>
      </div>
    )
  }
  else {
    return (<Preloader />)
  }
}

const mapStateToProps = (state: appStateType) => {
  return {
    initialized: state.app.initialized
  }
}
const AppContainer = connect(mapStateToProps, { initialize })(App)
export default AppContainer;
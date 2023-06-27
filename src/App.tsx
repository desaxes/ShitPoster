import './App.css';
import Main from './components/main/main';
import HeaderContainer from './components/header/header-container';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize } from "./redux/app-reducer";
import { Preloader } from './components/common_components/preloader';
import { appStateType } from './redux/redux-store';
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
          <HeaderContainer />
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
import './App.css';
import Main from './components/main/main';
import { HeaderContainer } from './components/header/header-container';
import React from 'react';
import { connect } from 'react-redux';
import { initialize } from "./redux/app-reducer";
import { Preloader } from './components/common_components/preloader';
class App extends React.Component {
  componentDidMount() {
    this.props.initialize()
  }
  render() {
    if (this.props.initialized === true) {
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
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
const AppContainer = connect(mapStateToProps, { initialize })(App)
export default AppContainer;
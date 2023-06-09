import './App.css';
import Main from './components/main/main';
import { HeaderContainer } from './components/header/header-container';

const App = (props) => {
  return (
    <div className="App">
      <div className='wrapper'>
        <HeaderContainer />
        <Main/>
      </div>
    </div>
  )
}

export default App;
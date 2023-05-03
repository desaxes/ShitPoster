import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='wrapper'>
          <Header />
          <Main />
        </div>
      </div>
    </BrowserRouter>)
}

export default App;
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';



const App = (props) => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Main state={props.state} addPost={props.addPost} updatePostText ={props.updatePostText}/>
      </div>
    </div>
  )
}

export default App;
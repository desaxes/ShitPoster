import './App.css';
import Header from './components/header';
import Main from './components/main';



const App = () => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Main/>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './components/posts/post'
import Contact from './components/contact/contact';
import Message from './components/chat/messagebox/message';
import avatar from './img/shit_icon.svg'
import postimage from './img/jsgif.gif'
import postimage2 from './img/effy.gif'
import s from './components/chat/messagebox/message.module.css'

let postData = [
  {
      name: 'Shitposter',
      avatar: avatar,
      time: '10 minutes ago',
      postimage: postimage,
      posttext: 'I hate TV',
      com_count: '34',
      like_count: '954'
  },
  {
      name: 'Shitposter',
      avatar: avatar,
      time: 'Yesterday',
      posttext: 'We updated the header of our profile',
      com_count: '57',
      like_count: '408'
  },
  {
      name: 'Shitposter',
      avatar: avatar,
      time: '128 April 2023',
      postimage: postimage2,
      posttext: 'Friday',
      com_count: '233',
      like_count: '91'
  }
]
let posts = postData.map(p => <Post name={p.name} avatar={p.avatar} time={p.time}
  postimage={p.postimage} posttext={p.posttext} com_count={p.com_count} like_count={p.like_count} />)

  let dialogsData = [
    { id: '/1', name: 'James' },
    { id: '/2', name: 'John' },
    { id: '/3', name: 'Josie' },
    { id: '/4', name: 'Jamie' }
]
let dialogs = dialogsData.map (c =>
    <Contact username={c.name} dialogId={c.id} /> 
)

let messagesData = [
  { inout: s.in, text: 'HI' },
  { inout: s.out, text: 'Hi, John' },
  { inout: s.in, text: 'How are you' },
  { inout: s.out, text: 'Im fine' },
  { inout: s.out, text: 'And You?' },
  { inout: s.in, text: 'Im too. Sorry, but i should go. My wife come home. Talk later.' },
  { inout: s.out, text: 'Ok. Bye!' },
  { inout: s.out, text: 'Ok. Bye!' },
]
let messages = messagesData.map ( m =>
  <Message inout={m.inout} text={m.text} />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {posts, dialogs, messages};

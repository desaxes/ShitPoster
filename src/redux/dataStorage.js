import avatar from './../img/shit_icon.svg'
import postimage from './../img/jsgif.gif'
import postimage2 from './../img/effy.gif'
import mes_style from './../components/chat/messagebox/message.module.css'


let store = {
  _state: {
    profilePage: {
      postData: [
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
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogsData: [
        { id: '1', name: 'James' },
        { id: '2', name: 'John' },
        { id: '3', name: 'Josie' },
        { id: '4', name: 'Jamie' }
      ],

      messagesData: [
        { inout: `${mes_style.in}`, text: 'HI' },
        { inout: `${mes_style.out}`, text: 'Hi, John' },
        { inout: `${mes_style.in}`, text: 'How are you' },
        { inout: `${mes_style.out}`, text: 'Im fine' },
        { inout: `${mes_style.out}`, text: 'And You?' },
        { inout: `${mes_style.in}`, text: 'Im too. Sorry, but i should go. My wife come home. Talk later.' },
        { inout: `${mes_style.out}`, text: 'Ok. Bye!' },
        { inout: `${mes_style.in}`, text: 'Ok. Bye!' },
      ],
      newMessageText:''
    },
  },
  _callSubscriber() {
  },
  getState() {
    return (this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      if (this._state.profilePage.newPostText == '') { }
      else {
        let newPost = {
          name: action.name,
          avatar: action.avatar,
          time: action.time,
          posttext: this._state.profilePage.newPostText,
          com_count: action.com_count,
          like_count: action.like_count
        }
        this._state.profilePage.postData.push(newPost);
        this._callSubscriber();
        this._state.profilePage.newPostText = '';
      }
    }
    else if (action.type === 'UPDATE-POST-TEXT') {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber();
    }
    else if(action.type === 'UPDATE-MESSAGE-AREA'){
      this._state.messagesPage.newMessageText = action.text;
      this._callSubscriber()
    }
    else if(action.type === 'SEND-MESSAGE'){
      if (this._state.messagesPage.newMessageText == ''){}
      else{
          let message = {
            inout:`${mes_style.out}`,
            text:this._state.messagesPage.newMessageText
          }
          this._state.messagesPage.messagesData.push(message);
          this._callSubscriber();
          this._state.messagesPage.newMessageText = '';
      }
    }

  }
}

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const SEND_MESSAGE = 'SEND-MESSAGE';
const addPostActionCreator = (name, avatar, time, com_count, like_count) => (
  { type: ADD_POST, name: name, avatar: avatar, time: time, com_count: com_count, like_count: like_count })

const addUpdatePostTextActionCreator = (text) =>
  ({ type: UPDATE_POST_TEXT, text: text })

const addUpdateMessageAreaActionCreator = (text) =>
  ({ type: UPDATE_MESSAGE_AREA, text: text })

const addSendMessageActionCreator = ()=>({type:SEND_MESSAGE})


export { store, addPostActionCreator, addUpdatePostTextActionCreator, addUpdateMessageAreaActionCreator,addSendMessageActionCreator };




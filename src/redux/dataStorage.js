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
      ]
    },
  },
  getState(){
    return(this._state)
  },
  _callSubscriber() {
  },
  addPost (name, avatar, time, com_count, like_count) {
    if (this._state.profilePage.newPostText == '') { }
    else {
      let newPost = {
        name: name,
        avatar: avatar,
        time: time,
        posttext: this._state.profilePage.newPostText,
        com_count: com_count,
        like_count: like_count
      }
      this._state.profilePage.postData.push(newPost);
      this._callSubscriber();
      this._state.profilePage.newPostText = '';
    }
  },
  updatePostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}
export { store };




import Post from '../components/posts/post'
import Contact from '../components/contact/contact';
import Message from '../components/chat/messagebox/message';
import {dataStorage} from './dataStorage'

let userData = {
  dialogs: dataStorage.messagesPage.dialogsData.map (c =>
  <Contact username={c.name} dialogId={c.id} /> 
),
  messages: dataStorage.messagesPage.messagesData.map ( m =>
  <Message inout={m.inout} text={m.text} />
),
  posts: dataStorage.profilePage.postData.map(p => <Post name={p.name} avatar={p.avatar} time={p.time}
  postimage={p.postimage} posttext={p.posttext} com_count={p.com_count} like_count={p.like_count} />)
}

export {userData};  

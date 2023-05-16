
import Contact from '../components/contact/contact';
import Message from '../components/chat/messagebox/message';
import { dataStorage } from './dataStorage'


  
let userData = {
  dialogs: dataStorage.messagesPage.dialogsData.map(c =>
    <Contact username={c.name} dialogId={c.id} />
  ),
  messages: dataStorage.messagesPage.messagesData.map(m =>
    <Message inout={m.inout} text={m.text} />
  ),
  

}



export { userData, addPost };  

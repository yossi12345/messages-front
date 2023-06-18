
import { useEffect, useState } from 'react';
import './App.scss';
import { handleCreateMessage, handleSetMessages } from './functions';

function App() {
  const [messages,setMessages]=useState([])
  useEffect(()=>{
    handleSetMessages(setMessages)
  },[])
  return (
    <div className='container'>
      <form onSubmit={(event)=>{
        event.preventDefault()
        handleCreateMessage(event.target)
      }}>
        <textarea name="message"/>
        <button type='submit'>create message</button>
      </form>
      <div>
        {messages.map(message=>(
          <h4 key={Math.random()}>{message.content}</h4>
        ))}
      </div>
    </div>
  );
}
export default App;

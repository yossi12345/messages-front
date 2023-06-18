import axios from "axios"
export async function handleSetMessages(setMessages){
    try{
      const {data:messages}=await axios.get(process.env.REACT_APP_SERVER_URL+"get",{
        headers:{
          "Content-Type":"application/json"
        }
      })
      setMessages(messages)
      console.log(messages)
    }catch(err){
      setMessages(["we didn't succeed to get the messages"])
      console.log(err)
    }
}
export async function handleCreateMessage(formElement){
    const {message:messageContent}=Object.fromEntries(new FormData(formElement))
    if (messageContent==="")
        return
    try{
      await axios.post(process.env.REACT_APP_SERVER_URL+"new",{
        content:messageContent
      },{
        headers:{
          "Content-Type":"application/json"
        }
      })
      window.location.reload()
    }
    catch(err){
      console.log(err)
      alert("we are sorry but we didnt succeed to create your message")
    }
}
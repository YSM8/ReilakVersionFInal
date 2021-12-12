import React, { useCallback, useContext, useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { messageStartLoading } from "../../actions/chat";
import moment from "moment";
import { SocketContext } from "../../context/SocketContext";
import { scrollToBottom } from "../../helpers/scrollToBottom";

export const ChatHistory = () => {
const dispatch = useDispatch();
const { socket } = useContext(SocketContext);

const messagesEndRef = useRef(null);
const scrollToBottom = ()=>{
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
}


  const {messages} = useSelector(state => state.chat);
  const {uid} = useSelector(state => state.auth);
  const {chatActivo} = useSelector(state => state.chat)

  useEffect(() => {
    scrollToBottom();
    
    }, [messages])
    scrollToBottom();

    const handleMoveMouse = (e)=>{
      
      const id=chatActivo;
      const data = {
        id,
        uid
      }
      socket.emit("read-last-message", {
        data
      });
    }
  return (
    <div className="chat__history" id="messages" onMouseDown={handleMoveMouse}>

     { messages.map((messages,i)=>(
       (messages.from === uid)?
       <div className="chat__message-right" key={i}>
       <div className="chat__message-info-right">
         <div className="chat__message-info-name"></div>
         <div className="chat__message-info-content">{messages.message.substr(-3)==="png" ||messages.message.substr(-3)==="jpg"||messages.message.substr(-3)==="jpge"||messages.message.substr(-3)==="gif"?<img src={messages.message}/>:messages.message.substr(-3)==="mp4"?<ReactPlayer
                      url={messages.message}
                      width="100%"
                      height="100%"
                      controls={true}
                      pip={true}
                      volume="0.8"
                      light="true"
                    />:messages.message}</div>
         <div className="chat__message-info-time">{moment(messages.fecha).format(" h:mm a, DD-MM")} </div> {/*chatActivo.tipo==="personal"&&(<span><i class="fas fa-check"></i><i class="fas fa-check"></i></span>)*/}
         
       </div>
       <div ref={messagesEndRef} />
       
     </div>
     :
<div className="chat__message-left" key={i}>
       <div className="chat__message-photo">
         <img src={messages.imgusuario} />
       </div>
       <div className="chat__message-info-left">
         <div className="chat__message-info-name">{messages.name} {messages.segundoNombre} {messages.apellidoPaterno} {messages.apellidoMaterno}</div>
         <div className="chat__message-info-content">{messages.message.substr(-3)==="png" ||messages.message.substr(-3)==="jpg"||messages.message.substr(-3)==="jpge"||messages.message.substr(-3)==="gif"?<img src={messages.message}/>:messages.message.substr(-3)==="mp4"?<ReactPlayer
                      url={messages.message}
                      width="100%"
                      height="100%"
                      controls={true}
                      pip={true}
                      volume="0.8"
                      light="true"
                    />:messages.message}</div>
         <div className="chat__message-info-time">{moment(messages.fecha).format("h:mm a, DD-MM")}</div>
       </div>
       <div ref={messagesEndRef} />
       
     </div>

      ))}




    </div>

    
    
  );
};

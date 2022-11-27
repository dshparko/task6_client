import React, {useEffect, useState} from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Login.css"
import Message from "./Message";
import Popup from "reactjs-popup";
function Messenger({socket, sender, room}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [currentTopic, setCurrentTopic] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: sender,
                message: currentMessage,
                topic: currentTopic,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) => {
                        return (
                            <div className="message-container">
                            <Popup trigger={<button> {messageContent.topic}</button>} position="right center">
                                <Message message={messageContent.message} time={messageContent.time} sender={messageContent.author} topic={messageContent.topic}/>
                            </Popup>
                            </div>
                      );
                    })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentTopic}
                    placeholder="Topic"
                    onChange={(event) => {
                        setCurrentTopic(event.target.value);
                    }}
                />
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Text"
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default Messenger;

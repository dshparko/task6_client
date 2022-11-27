import React, {useState} from "react";
import "./message.css"
import Popup from "reactjs-popup";
import "./Login.css"

function Message({time, sender, topic, message}) {
    const [toggleText, setToggleText] = useState(false);

    return (
        <div className="message">

                <h3>Topic: {topic}</h3>
                <div className="message-content">
                    <p>{message}</p>
                </div>
                <div className="message-meta">
                    <p id="author">From: {sender}</p>
                    <p id="time">{time}</p>
                </div>
        </div>
    )
}

export default Message;
import Messenger from "./Messenger";
import io from "socket.io-client";
import { useState } from "react";
import "./Login.css"

const socket = io.connect("http://localhost:3001");
function Login (){
    const [sender, setSender] = useState("");
    const [recipient, setRecipient]=useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (sender !== "" &&recipient !== "" && room !== "") {
            socket.emit("join_room", room,sender,recipient);
            setShowChat(true);
        }
    };

    return (
        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    <input
                        type="text"
                        placeholder="Sender"
                        onChange={(event) => {
                            setSender(event.target.value);
                        }}
                    />
                    <input
                    type="text"
                    placeholder="Recipient"
                    onChange={(event) => {
                        setRecipient(event.target.value);
                    }}
                />
                    <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value);
                        }}
                    />
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Messenger socket={socket} sender={sender} room={room} />
            )}
        </div>
    );

}
export default Login;
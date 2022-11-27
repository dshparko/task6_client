import Messenger from "./Messenger";
import io from "socket.io-client";
import {useState} from "react";
import "./App.css"

const socket = io.connect("http://localhost:3001");

function Login() {
    const [username, setUsername] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "") {
            socket.emit("join_room");
            setShowChat(true);
        }
    };

    return (
        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join a chat</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />

                    <button onClick={joinRoom}>Start a chat</button>
                </div>
            ) : (
                <Messenger socket={socket} username={username}/>
            )}
        </div>
    );
}

export default Login;
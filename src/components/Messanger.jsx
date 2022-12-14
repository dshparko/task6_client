import React, {useState} from 'react';
import {send} from '../actions/actions';
import Message from './Message';


const Messanger = (props) => {


    const [time, setTime] = useState('')
    const [value, setValue] = useState('')
    const [theme, setTheme] = useState('')
    const [recipient, setRecipient] = useState('')


    const sender = localStorage.getItem('sender');

    const now = new Date();

    let date = new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes();
    const sendMessage = async () => {
        //   setTime(new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes())

        if (value.trim() === '' || theme.trim() === '') {
            alert('ERROR!')
        } else {
            const time = now.toLocaleString();
            send(sender, recipient, theme, value, time)
            setRecipient('')
            setValue('')
            setTheme('')
        }
    }

    const data = props.data.map(e => {
            if (e.recipient === sender) {
                return (
                    <Message
                        key={e._id}
                        sender={e.sender}
                        title={e.title}
                        content={e.content}
                        stime={e.time}
                    />
                )
            }
            return null;
        }
    )


    return (
        <>
            <div className=' flex items-center flex-col container mx-auto'>
                <div className=' my-4 flex items-end flex-col'>

                    <div className=''>
                        Username: {sender}
                    </div>
                    <input
                        value={recipient}
                        onChange={e => setRecipient(e.target.value)}
                        type="text"
                        className="px-3 py-2 mb-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
                        placeholder="Recipient" required/>

                    <input
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        type="text"
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
                        placeholder="Topic" required/>

                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        type="text"
                        className="px-3 py-20 my-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 sm:text-sm focus:ring-1"
                        placeholder="Message" required/>

                    <div className=' flex justify-between w-full'>

                        <button value={String(new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes())}
                            onClick={(e) => {
                                sendMessage();
                                {setTime(e.target.value)};
                            }}
                            className='bg-blue-700 rounded-md px-20 py-2 ml-14 hover:bg-amber-200 '
                        >
                            Send
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className='wrap_images '
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/1200px-Refresh_icon.svg.png"
                                alt="Check new messages"/>
                        </button>
                    </div>

                </div>
                {props.data.length > 0
                    ?
                    <div className='w-full'>{data.reverse()}</div>
                    :
                    <div className=' text-white'>Time: {time}</div>
                }
            </div>
        </>
    );
};

export default Messanger;
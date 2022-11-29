import React from 'react';

const Message = (props) => {

    return (
        <div className=' flex flex-col  rounded-lg border-4 p-2 my-4'>
            <h2 className=' text-black font-bold text-lg'>Sender: {props.sender}, {props.time}</h2>
            <h3 className=' text-gray-800 font-semibold text-lg '>Theme: {props.title}</h3>
            <p className=' text-black'>Message: {props.content}</p>
        </div>
    );
};

export default Message;
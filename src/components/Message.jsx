import React from 'react';

const Message = (props) => {

    return (
        <div className=' flex flex-col  rounded-lg border-4 p-2 my-4'>


    <div className="info">

        <h2 className=' text-black font-bold text-lg'>Sender: {props.sender}, {props.time}</h2>
        <input id="info__body_1" className="info__switch" type="checkbox"/>

        <label htmlFor="info__body_1" className="info__headline">Theme: {props.title}</label>
        <div className="info__body">
            <p className=' text-black'>Message: {props.content}</p>
        </div>
    </div>
</div>
    );
};

export default Message;
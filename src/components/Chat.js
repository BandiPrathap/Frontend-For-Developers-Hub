// Chat.js
import React, { useState } from 'react';
import './Chat.css'; // Move your CSS here or keep it inline

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-8 col-xl-6 chat">
          <div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" className="rounded-circle user_img" alt="user" />
                  <span className="online_icon"></span>
                </div>
                <div className="user_info">
                  <span>ChatBot</span>
                  <p>Ask me anything!</p>
                </div>
              </div>
            </div>
            <div className="card-body msg_card_body">
              {messages.map((msg, index) => (
                <div key={index} className="d-flex justify-content-start mb-4">
                  <div className="msg_cotainer">
                    {msg}
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <form id="messageArea" className="input-group" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  id="text"
                  name="msg"
                  placeholder="Type your message..."
                  autoComplete="off"
                  className="form-control type_msg"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button type="submit" id="send" className="input-group-text send_btn">
                    <i className="fas fa-location-arrow"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

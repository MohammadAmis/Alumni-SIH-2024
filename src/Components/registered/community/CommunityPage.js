import React, { useState } from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState('oneToOne');
  const [selectedChat, setSelectedChat] = useState(null); // State to manage selected chat

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setSelectedChat(null); // Reset selected chat when switching tabs
  };

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId); // Set the selected chat based on chat ID
  };

  return (
    <div className="community-page">
      <header className="community-header">
        <h1>University Alumni Networking</h1>
        <p>Connect with peers, join groups, and engage in professional and academic growth.</p>
      </header>

      <div className="community-tabs">
        <button onClick={() => handleTabClick('oneToOne')} className={selectedTab === 'oneToOne' ? 'active' : ''}>
          One-to-One Chat
        </button>
        <button onClick={() => handleTabClick('groupChat')} className={selectedTab === 'groupChat' ? 'active' : ''}>
          Group Chat
        </button>
        <button onClick={() => handleTabClick('commonGroup')} className={selectedTab === 'commonGroup' ? 'active' : ''}>
          Common Alumni Group
        </button>
        <button onClick={() => handleTabClick('batchGroup')} className={selectedTab === 'batchGroup' ? 'active' : ''}>
          Batchwise Group
        </button>
      </div>

      <div className="community-content">
        {selectedTab === 'oneToOne' && <OneToOneChat selectedChat={selectedChat} onChatClick={handleChatClick} />}
        {selectedTab === 'groupChat' && <GroupChat selectedChat={selectedChat} onChatClick={handleChatClick} />}
        {selectedTab === 'commonGroup' && <CommonGroup />}
        {selectedTab === 'batchGroup' && <BatchGroup />}
      </div>
    </div>
  );
};

// Chat components

const Chat = ({ chatId, chatType }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender.toLowerCase()}`}>
            <span>{message.sender}: </span>{message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type a message...`}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

const OneToOneChat = ({ selectedChat, onChatClick }) => (
  <div>
    <h2>One-to-One Communication</h2>
    {selectedChat === null ? (
      <div className="chat-list">
        <button onClick={() => onChatClick('chat1')}>Chat with User A</button>
        <button onClick={() => onChatClick('chat2')}>Chat with User B</button>
        {/* Add more chat options here */}
      </div>
    ) : (
      <Chat chatId={selectedChat} chatType="oneToOne" />
    )}
  </div>
);

const GroupChat = ({ selectedChat, onChatClick }) => (
  <div>
    <h2>Group Communication</h2>
    {selectedChat === null ? (
      <div className="chat-list">
        <button onClick={() => onChatClick('group1')}>Group A</button>
        <button onClick={() => onChatClick('group2')}>Group B</button>
        {/* Add more group options here */}
      </div>
    ) : (
      <Chat chatId={selectedChat} chatType="groupChat" />
    )}
  </div>
);

const CommonGroup = () => (
  <div>
    <h2>Common Alumni Group</h2>
    <p>Participate in discussions with the entire alumni community.</p>
    {/* Display posts, comments, and announcements for the whole alumni community */}
  </div>
);

const BatchGroup = () => (
  <div>
    <h2>Batchwise Group Communication</h2>
    <p>Connect with alumni from your graduation batch.</p>
    {/* Chat/group functionality for specific graduation batches */}
  </div>
);

export default CommunityPage;

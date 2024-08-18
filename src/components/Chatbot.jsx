import React, { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message to chat
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      // Make the API request to OpenAI's GPT
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY`, // Replace with your OpenAI API key
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: input,
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.choices[0].text.trim() };

      // Add bot response to chat
      setMessages([...messages, userMessage, botMessage]);
      setInput(''); // Clear input field
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { sender: 'bot', text: "Sorry, I couldn't process that. Please try again." };
      setMessages([...messages, userMessage, botMessage]);
    }
  };

  // Handle Enter key press to send messages
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot bg-white shadow-md p-6 rounded-lg max-w-md mx-auto">
      <div className="chatbot-messages mb-4 overflow-y-auto max-h-96">
        {messages.map((msg, index) => (
          <div key={index} className={`message mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full p-2 mb-2 border rounded-lg focus:outline-none"
        placeholder="Ask a question..."
      />
      <button onClick={handleSend} className="w-full p-2 bg-blue-500 text-white rounded-lg">
        Send
      </button>
    </div>
  );
};

export default Chatbot;

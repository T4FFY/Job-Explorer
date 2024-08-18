import Chatbot from './Chatbot'

const QandA = () => {
    return (
      <div className="help-center bg-light-blue p-40 min-w-full">
        <h1 className="font-mono text-6xl font-bold text-gray-900 mb-10">Help Center</h1>
        <h2 className="font-mono text-4xl font-bold text-gray-900 mb-10">Chat with Us</h2>
        <Chatbot />
      </div>
    );
  };
  
  export default QandA;
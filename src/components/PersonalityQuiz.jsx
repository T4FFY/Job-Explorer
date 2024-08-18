import { useState } from "react";
// import { personalityQuiz } from "../data/personalityQuiz";

export const personalityQuiz = [
    {
      id: 1,
      question: "Do you enjoy solving complex problems and puzzles?",
      options: [
        { answer: "Strongly Agree", trait: "analytical" },
        { answer: "Agree", trait: "analytical" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "creative" },
        { answer: "Strongly Disagree", trait: "creative" }
      ]
    },
    {
      id: 2,
      question: "Are you more interested in creating art than analyzing data?",
      options: [
        { answer: "Strongly Agree", trait: "creative" },
        { answer: "Agree", trait: "creative" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "analytical" },
        { answer: "Strongly Disagree", trait: "analytical" }
      ]
    },
    {
      id: 3,
      question: "Do you find it easy to empathize with others and understand their feelings?",
      options: [
        { answer: "Strongly Agree", trait: "social" },
        { answer: "Agree", trait: "social" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "detailOriented" },
        { answer: "Strongly Disagree", trait: "detailOriented" }
      ]
    },
    {
      id: 4,
      question: "Do you prefer planning every detail rather than going with the flow?",
      options: [
        { answer: "Strongly Agree", trait: "detailOriented" },
        { answer: "Agree", trait: "detailOriented" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "adventurous" },
        { answer: "Strongly Disagree", trait: "adventurous" }
      ]
    },
    {
      id: 5,
      question: "Would you describe yourself as someone who loves to take risks and try new things?",
      options: [
        { answer: "Strongly Agree", trait: "adventurous" },
        { answer: "Agree", trait: "adventurous" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "detailOriented" },
        { answer: "Strongly Disagree", trait: "detailOriented" }
      ]
    },
    {
      id: 6,
      question: "Do you prefer working alone rather than in a group?",
      options: [
        { answer: "Strongly Agree", trait: "analytical" },
        { answer: "Agree", trait: "analytical" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "social" },
        { answer: "Strongly Disagree", trait: "social" }
      ]
    },
    {
      id: 7,
      question: "Are you more excited about the big picture than the details?",
      options: [
        { answer: "Strongly Agree", trait: "adventurous" },
        { answer: "Agree", trait: "adventurous" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "detailOriented" },
        { answer: "Strongly Disagree", trait: "detailOriented" }
      ]
    },
    {
      id: 8,
      question: "Do you enjoy leading a team and making decisions?",
      options: [
        { answer: "Strongly Agree", trait: "social" },
        { answer: "Agree", trait: "social" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "analytical" },
        { answer: "Strongly Disagree", trait: "analytical" }
      ]
    },
    {
      id: 9,
      question: "Do you often think about how to improve things around you?",
      options: [
        { answer: "Strongly Agree", trait: "creative" },
        { answer: "Agree", trait: "creative" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "detailOriented" },
        { answer: "Strongly Disagree", trait: "detailOriented" }
      ]
    },
    {
      id: 10,
      question: "Are you comfortable making decisions based on data and evidence?",
      options: [
        { answer: "Strongly Agree", trait: "analytical" },
        { answer: "Agree", trait: "analytical" },
        { answer: "Neutral", trait: "neutral" },
        { answer: "Disagree", trait: "social" },
        { answer: "Strongly Disagree", trait: "social" }
      ]
    }
  ];
  

    const PersonalityQuiz = () => {

        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [selectedOption, setSelectedOption] = useState(null);
        const [scores, setScores] = useState({
            analytical: 0,
            creative: 0,
            social: 0,
            detailOriented: 0,
            adventurous: 0
        });

        const traitToJobArea = {
            analytical: "Science and Engineering, Business and Finance, Technology and IT",
            creative: "Arts and Media, Environmental and Agricultural",
            social: "Healthcare and Medicine, Social Services and Community Work, Education and Training",
            detailOriented: "Law and Public Safety, Business and Finance, Skilled Trades and Crafts",
            adventurous: "Sports and Recreation, Environmental and Agricultural, Entrepreneurship"
          };

        const handleOptionSelect = (trait) => {
            setSelectedOption(trait);
          };

        const handleNextQuestion = () => {
            if (selectedOption && selectedOption !== "neutral") {
              setScores(prevScores => ({
                ...prevScores,
                [selectedOption]: prevScores[selectedOption] + 1
              }));
            }
            setSelectedOption(null);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          };

        const getResult = () => {
            const highestTrait = Object.keys(scores).reduce((a, b) =>
              scores[a] > scores[b] ? a : b
            );
            return traitToJobArea[highestTrait];
          };

          return (
            <>
            <div className="flex flex-col bg-light-blue p-40 min-w-full min-h-screen">

            <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-20 bg-pale-yellow bg-clip-border rounded-xl ">
            Your Ideal Career</h1>

            <div className="w-[1000px]"><p className="font-mono text-lg text-gray-700 mb-6">
            Take our fun and interactive quiz to uncover the career paths that best match your personality traits and interests. 
            Answer a few simple questions and find out which job areas align with your unique strengths and preferences. 
            Let’s explore your future together!
            </p></div>

            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                {currentQuestionIndex < personalityQuiz.length ? (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      {personalityQuiz[currentQuestionIndex].question}
                    </h2>
                    <div className="flex flex-col gap-4 mb-6">
                      {personalityQuiz[currentQuestionIndex].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(option.trait)}
                          className={`py-2 px-4 rounded text-white ${
                            selectedOption === option.trait
                              ? 'bg-blue-600'
                              : 'bg-blue-500 hover:bg-blue-600'
                          }`}
                        >
                          {option.answer}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedOption === null}
                      className={`py-2 px-6 rounded text-white ${
                        selectedOption ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      You are most aligned with: <strong>{getResult()}</strong>
                    </p>
                    <p className="text-md text-gray-600">
                      Consider exploring careers in: <strong>{getResult()}</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
              
            </>

        )
    }
  
  export default PersonalityQuiz;
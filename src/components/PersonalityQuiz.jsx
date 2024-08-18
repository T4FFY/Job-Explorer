import { useState } from "react";

export const personalityQuiz = [
  {
    id: 1,
    question: "Do you enjoy solving complex problems and puzzles?",
    options: [
      { answer: "Agree", trait: "analytical", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "creative", score: -1 },
    ],
  },
  {
    id: 2,
    question: "Are you more interested in creating art than analyzing data?",
    options: [
      { answer: "Agree", trait: "creative", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "analytical", score: -1 },
    ],
  },
  {
    id: 3,
    question:
      "Do you find it easy to empathize with others and understand their feelings?",
    options: [
      { answer: "Agree", trait: "social", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "detailOriented", score: -1 },
    ],
  },
  {
    id: 4,
    question:
      "Do you prefer planning every detail rather than going with the flow?",
    options: [
      { answer: "Agree", trait: "detailOriented", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "adventurous", score: -1 },
    ],
  },
  {
    id: 5,
    question:
      "Would you describe yourself as someone who loves to take risks and try new things?",
    options: [
      { answer: "Agree", trait: "adventurous", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "detailOriented", score: -1 },
    ],
  },
  {
    id: 6,
    question: "Do you prefer working alone rather than in a group?",
    options: [
      { answer: "Agree", trait: "analytical", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "social", score: -1 },
    ],
  },
  {
    id: 7,
    question: "Are you more excited about the big picture than the details?",
    options: [
      { answer: "Agree", trait: "adventurous", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "detailOriented", score: -1 },
    ],
  },
  {
    id: 8,
    question: "Do you enjoy leading a team and making decisions?",
    options: [
      { answer: "Agree", trait: "social", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "analytical", score: -1 },
    ],
  },
  {
    id: 9,
    question: "Do you often think about how to improve things around you?",
    options: [
      { answer: "Agree", trait: "creative", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "detailOriented", score: -1 },
    ],
  },
  {
    id: 10,
    question:
      "Are you comfortable making decisions based on data and evidence?",
    options: [
      { answer: "Agree", trait: "analytical", score: 1 },
      { answer: "Neutral", trait: "neutral", score: 0 },
      { answer: "Disagree", trait: "social", score: -1 },
    ],
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
    adventurous: 0,
  });

  const traitToJobArea = {
    analytical:
      "Science and Engineering, Business and Finance, Technology and IT",
    creative: "Arts and Media, Environmental and Agricultural",
    social:
      "Healthcare and Medicine, Social Services and Community Work, Education and Training",
    detailOriented:
      "Law and Public Safety, Business and Finance, Skilled Trades and Crafts",
    adventurous:
      "Sports and Recreation, Environmental and Agricultural, Entrepreneurship",
  };

  const handleOptionSelect = (trait) => {
    setSelectedOption(trait);
  };

  const handleNextQuestion = () => {
    if (selectedOption && selectedOption !== "neutral") {
      setScores((prevScores) => ({
        ...prevScores,
        [selectedOption]: prevScores[selectedOption] + 1,
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
      <div className="flex flex-col items-start justify-start bg-light-blue p-40 min-w-full min-h-screen">
        <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-8 bg-pale-yellow bg-clip-border rounded-xl ">
          Ideal Career Quiz
        </h1>
        <div className="w-[1000px]">
          <p className="font-mono text-lg text-gray-700 mb-6">
            Take our fun and interactive quiz to uncover the career paths that
            best match your personality traits and interests. Answer a few
            simple questions and find out which job areas align with your unique
            strengths and preferences. Let’s explore your future together!
          </p>
        </div>
        <div className="quiz-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {currentQuestionIndex < personalityQuiz.length ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">
                {personalityQuiz[currentQuestionIndex].question}
              </h2>
              <div className="options-container mb-4">
                {personalityQuiz[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.trait)}
                      className={`option-button p-4 mb-2 w-full rounded-lg ${
                        selectedOption === option.trait
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                    >
                      {option.answer}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
                className="bg-gray-900 text-white p-4 rounded-lg w-full hover:bg-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">
                Quiz Completed!
              </h2>
              <p className="mb-4 text-center">
                You are most aligned with: <strong>{getResult()}</strong>
              </p>
              <p className="text-center">
                Consider exploring careers in: {getResult()}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonalityQuiz;

const personalityQuiz = [
    {
      id: 1,
      question: "Do you enjoy solving complex problems and puzzles?",
      options: [
        { answer: "Agree", trait: "analytical", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "creative", score: -1 }
      ]
    },
    {
      id: 2,
      question: "Are you more interested in creating art than analyzing data?",
      options: [
        { answer: "Agree", trait: "creative", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "analytical", score: -1 }
      ]
    },
    {
      id: 3,
      question: "Do you find it easy to empathize with others and understand their feelings?",
      options: [
        { answer: "Agree", trait: "social", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "detailOriented", score: -1 }
      ]
    },
    {
      id: 4,
      question: "Do you prefer planning every detail rather than going with the flow?",
      options: [
        { answer: "Agree", trait: "detailOriented", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "adventurous", score: -1 }
      ]
    },
    {
      id: 5,
      question: "Would you describe yourself as someone who loves to take risks and try new things?",
      options: [
        { answer: "Agree", trait: "adventurous", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "detailOriented", score: -1 }
      ]
    },
    {
      id: 6,
      question: "Do you prefer working alone rather than in a group?",
      options: [
        { answer: "Agree", trait: "analytical", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "social", score: -1 }
      ]
    },
    {
      id: 7,
      question: "Are you more excited about the big picture than the details?",
      options: [
        { answer: "Strongly Agree", trait: "adventurous", score: 2 },
        { answer: "Agree", trait: "adventurous", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "detailOriented", score: -1 }
      ]
    },
    {
      id: 8,
      question: "Do you enjoy leading a team and making decisions?",
      options: [
        { answer: "Strongly Agree", trait: "social", score: 2 },
        { answer: "Agree", trait: "social", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "analytical", score: -1 }
      ]
    },
    {
      id: 9,
      question: "Do you often think about how to improve things around you?",
      options: [
        { answer: "Strongly Agree", trait: "creative", score: 2 },
        { answer: "Agree", trait: "creative", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "detailOriented", score: -1 }
      ]
    },
    {
      id: 10,
      question: "Are you comfortable making decisions based on data and evidence?",
      options: [
        { answer: "Strongly Agree", trait: "analytical", score: 2 },
        { answer: "Agree", trait: "analytical", score: 1 },
        { answer: "Neutral", trait: "neutral", score: 0 },
        { answer: "Disagree", trait: "social", score: -1 }
      ]
    }
  ];
  export default personalityQuiz;
// ✅ src/pages/Quiz.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { questions } from "../data/questions";

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const quizData = questions[category];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    let newScore = score;
    if (selected === quizData[current].answer) {
      newScore++;
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setScore(newScore);
      setSelected(null);
    } else {
      localStorage.setItem("quizScore", newScore);
      navigate("/result");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4">
      {loading ? (
        <div className="text-xl font-semibold animate-pulse">Loading quiz...</div>
      ) : (
        <div className="bg-white/90 backdrop-blur-lg w-full max-w-2xl p-8 rounded-xl shadow-xl space-y-6">
          <h2 className="text-xl font-bold text-blue-700">Question {current + 1} of {quizData.length}</h2>
          <p className="font-semibold text-gray-800">{quizData[current].question}</p>
          <div className="grid gap-3">
            {quizData[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(opt)}
                className={`p-3 rounded-md text-left border transition 
                  ${selected === opt ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-blue-100"}`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="text-right">
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              {current + 1 === quizData.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
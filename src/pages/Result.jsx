// ✅ src/pages/Result.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Result = () => {
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedScore = localStorage.getItem("quizScore");
    const storedName = localStorage.getItem("username");
    if (!storedScore || !storedName) navigate("/");
    else {
      setScore(storedScore);
      setUsername(storedName);
      setTimeout(() => setLoading(false), 1200); // Simulate loading
    }
  }, []);

  const handleBack = () => {
    localStorage.removeItem("quizScore");
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    >
      {loading ? (
        <div className="text-xl font-semibold animate-pulse">Loading your score...</div>
      ) : (
        <div className="bg-white/90 backdrop-blur-lg max-w-md w-full p-8 rounded-xl shadow-xl text-center transition-opacity duration-500">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Well done, {username} 🎉</h1>
          <p className="text-xl font-semibold text-gray-800 mb-6">Your Score: {score}</p>
          <button
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;

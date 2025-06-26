// ✅ src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookOpenText, Brain, CodeXml, LogOut } from "lucide-react"; // optional icons


const categories = [
  { id: 1, name: "HTML", color: "bg-gradient-to-r from-pink-200 to-pink-100", icon: <CodeXml /> },
  { id: 2, name: "JAVASCRIPT", color: "bg-gradient-to-r from-yellow-200 to-yellow-100", icon: <Brain /> },
  { id: 3, name: "REACT", color: "bg-gradient-to-r from-blue-200 to-blue-100", icon: <BookOpenText /> },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (!storedName) navigate("/");
    else setUsername(storedName);
  }, []);

  const handleStartQuiz = (category) => {
    navigate(`/quiz/${category}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const getInitial = (name) => name?.charAt(0)?.toUpperCase();

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-10"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/html-system-website-concept_23-2150376774.jpg?w=1920&t=st=1719500000~exp=1719503600~hmac=abc123')" }}
    >
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full bg-cover bg-center shadow-lg border"
              style={{ backgroundImage: "url('https://img.icons8.com/color/96/000000/source-code.png')" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold backdrop-blur-sm bg-black/30">
                {getInitial(username)}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 font-medium">Welcome Back</span>
              <h1 className="text-2xl font-semibold text-gray-900">{username}</h1>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8 text-center font-semibold">Select a category to start your quiz</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleStartQuiz(cat.name.toLowerCase())}
              className={`${cat.color} cursor-pointer rounded-2xl shadow-md p-6 transition-transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="bg-white p-4 rounded-full shadow-md">{cat.icon}</div>
                <h3 className="text-xl font-bold text-gray-700">{cat.name}</h3>
                <p className="text-sm text-gray-600">30 Questions</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
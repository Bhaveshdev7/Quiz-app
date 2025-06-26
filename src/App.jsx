import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import Loginpage from "./pages/Loginpage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz/:category" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;

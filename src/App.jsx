import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz/:category" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("username", name);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-6 p-8 w-full max-w-md bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-gray-700">
            Login to your account
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 p-2 rounded-md w-full font-bold"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 rounded-md w-full"
          >
            Login
          </button>
          <hr className="w-full" />
          <p className="font-bold text-gray-500 text-center">
            Welcome To Quiz App
          </p>
        </div>
      </div>
      <div className="bg-blue-200 py-4">
        <p className="text-center text-sm font-bold">©️ Bhavesh Chaudhary</p>
      </div>
    </div>
  );
};

export default Loginpage;

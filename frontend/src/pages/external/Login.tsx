import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add auth logic here
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center fade-in">
        <div className="flex flex-col w-lg justify-center items-center">
          <div className="flex w-full">
            <div className="flex-1 flex-col">
              <button
                onClick={handleReturn}
                className="flex items-center justify-center  bg-blue-200 cursor-pointer rounded-xl p-2"
              >
                <BiChevronLeft className="text-xl font-bold" />
              </button>
            </div>
            <h1 className="flex-1/3 flex-col text-2xl text-center font-bold">Login</h1>
            <div className="flex-1 flex-col"></div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col p-2 w-3/4 gap-y-3">
            <input
              className="border-2 rounded-lg p-1"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              className="border-2 rounded-lg p-1"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

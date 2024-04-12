import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-[400px] flex flex-col h-screen px-5 py-8 mx-auto">
      <h1 className="font-bold text-xl">Welcome back</h1>
      <form className="flex flex-col w-full mt-8 gap-4">
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F1F1F1] text-[#7F7F7F] py-3 px-4 rounded-md outline-none"
        />
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="bg-[#F1F1F1] text-[#7F7F7F] py-3 px-4 rounded-md outline-none w-full"
          />
          {show ? (
            <EyeOffIcon
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
              onClick={() => setShow(false)}
            />
          ) : (
            <EyeIcon
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
              onClick={() => setShow(true)}
            />
          )}
        </div>
        <span className="text-xs text-[#7F7F7F] font-semibold underline underline-offset-2 tracking-wide">
          Forgot your password?
        </span>
        <button className="mt-40 rounded-lg text-white font-semibold w-full px-5 py-3 bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] text-lg">
          Sign In
        </button>
        <p className="flex items-center mt-2 ">
          <span className="flex-1 border-b border-gray-400"></span>
          <span className="mx-2 text-xl font-semibold">Or</span>
          <span className="flex-1 border-b border-gray-400"></span>
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="./images/google.png"
            alt="google"
            className="w-14 h-14 p-3 border-2 border-gray-400 rounded-lg"
          />
          <img
            src="./images/facebook.png"
            alt="facebook"
            className="w-14 h-14 p-3 border-2 border-gray-400 rounded-lg"
          />
        </div>
        <span className="flex items-center justify-center gap-1 text-sm">
          Don&apos;t have an account yet?
          <Link
            to={"/login"}
            className="text-[#819CFF] underline underline-offset-2"
          >
            Create an account
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;

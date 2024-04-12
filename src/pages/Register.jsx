import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-[400px] flex flex-col h-screen px-5 py-8 mx-auto">
      <h1 className="font-bold text-xl">Create an account</h1>
      <form className="flex flex-col w-full mt-8 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="bg-[#F1F1F1] text-[#7F7F7F] py-3 px-4 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-[#F1F1F1] text-[#7F7F7F] py-3 px-4 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F1F1F1] text-[#7F7F7F] py-3 px-4 rounded-md outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#F1F1F1] text-[#7F7F7F] py-3 px-4 rounded-md outline-none"
        />
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4" />
          <span className="text-xs text-[#7F7F7F] tracking-wide font-semibold">
            By proceeding, I agree to all{" "}
            <span className="underline underline-offset-2 text-[#93A9FF]">
              T&C
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-2 text-[#93A9FF]">
              Privacy Policy
            </span>
          </span>
        </div>
        <button className="mt-20 rounded-lg text-white font-semibold w-full px-5 py-3 bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] text-lg">
          Create an Account
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
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-[#819CFF] underline underline-offset-2"
          >
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register
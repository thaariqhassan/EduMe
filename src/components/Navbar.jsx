import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex flex-1 flex-row justify-between items-center px-5 bg-transparent my-2 absolute w-screen">
      <div className="text-2xl text-black">EduMe</div>
      <div className="flex flex-row justify-between items-center min-w-25 w-125 hidden md:flex">
        <div className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          Subjects
        </div>
        <Link to="/courses" className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          Courses
        </Link>
        <div className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          Degrees
        </div>
        <div className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          For Business
        </div>
      </div>
      <div className="flex w-37.5 flex-row justify-between items-center">
        <button className="bg-white text-black rounded-md p-2 cursor-pointer">
          Sign up
        </button>
        <Link
          to="/login"
          className="bg-orange-500 text-white rounded-md p-2 cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

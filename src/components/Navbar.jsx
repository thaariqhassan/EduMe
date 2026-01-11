import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex flex-1 flex-row justify-between items-center px-5 bg-transparent my-2 absolute w-screen top-0 left-0">
      <Link to="/" className="text-2xl text-black">EduMe</Link>
      <div className="flex flex-row justify-between items-center min-w-25 w-125 hidden md:flex">
        <Link to={'/subjects'} className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          Subjects
        </Link>
        <Link to="/courses" className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          Courses
        </Link>
        <Link to={'/degrees'} className="cursor-pointer" style={{ fontFamily: "poppins" }}>
          Degrees
        </Link>
        <div className="cursor-pointer">
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

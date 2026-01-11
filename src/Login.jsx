import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-[#F0F0DA] min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-lg min-w-115">
          <h1 className="text-4xl font-semibold mb-8">Login</h1>
          <form className="flex flex-col gap-4" onSubmit={()=>navigate("/")}>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-4 rounded-md mt-4"
            >
              Login
            </button>
          </form>
          <h2 className="">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-800 hover:text-blue-500">
              Sign up
            </Link>
          </h2>
        </div>
      </section>
    </>
  );
};

export default Login;

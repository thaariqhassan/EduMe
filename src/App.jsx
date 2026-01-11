import { MdArrowOutward } from "react-icons/md";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="bg-[#F0F0DA] min-h-screen flex items-center justify-center">
        <div className="flex max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden p-16 min-h-[80vh]">
          <div className="flex flex-col justify-between mr-10">
            <div className="mb-8 flex flex-col gap-10 my-2">
              <h1 className="text-6xl font-semibold">Find the right <span className="text-orange-500">course</span> for you</h1>
              <h2 className="text-lg w-1/2">
                See your personalized recommendations based on your interest and
                goals
              </h2>
              <div className="flex gap-4">
                <button className="bg-orange-500 text-white px-6 py-4 rounded-md">
                  Find course
                </button>
                <button className="flex items-center gap-2 text-orange-500 shadow px-6 py-4 rounded-md">
                  View our courses <MdArrowOutward />
                </button>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col py-4 px-8 rounded-lg justify-center text-center border-black border-2">
                <div className="text-lg">Subjects</div>
                <div className="text-3xl">+40</div>
              </div>
              <div className="flex flex-col bg-purple-300 py-4 px-8 rounded-lg justify-center text-center border-black border-2">
                <div className="text-lg">Courses</div>
                <div className="text-3xl">+40</div>
              </div>
              <div className="flex flex-col bg-yellow-200 py-4 px-8 rounded-lg justify-center text-center border-black border-2">
                <div className="text-lg">learner reviews</div>
                <div className="text-3xl">+180k</div>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/image.png" alt="pen" className="size-50" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

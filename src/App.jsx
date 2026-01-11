import { MdArrowOutward } from "react-icons/md";

function App() {
  return (
    <>
      <section className="bg-[#F0F0DA] min-h-screen flex items-center justify-center">
        <div className="flex max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden p-16 min-h-[80vh]">
          <div className="flex flex-col justify-between mr-10">
            <div className="mb-8 flex flex-col gap-8">
              <h1 className="text-6xl">Find the right course for you</h1>
              <h2 className="">
                See your personalized recommendations based on your interest and
                goals
              </h2>
              <div className="flex gap-4">
                <button className="">Find course</button>
                <button className="flex items-center gap-2">
                  View our courses <MdArrowOutward />
                </button>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col bg-amber-200 py-4 px-8 rounded-lg justify-center text-center border-black border-2">
                <div className="text-lg">Subjects</div>
                <div className="text-3xl">+40</div>
              </div>
              <div className="flex flex-col bg-amber-200 py-4 px-8 rounded-lg justify-center text-center border-black border-2">
                <div className="text-lg">Subjects</div>
                <div className="text-3xl">+40</div>
              </div>
              <div className="flex flex-col bg-amber-200 py-4 px-8 rounded-lg justify-center text-center border-black border-2">
                <div className="text-lg">Subjects</div>
                <div className="text-3xl">+40</div>
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

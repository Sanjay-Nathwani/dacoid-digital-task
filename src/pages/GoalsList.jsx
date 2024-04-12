

const GoalsList = () => {
  return (
    <div className="flex flex-col items-center py-8 px-3 max-w-[400px] h-screen mx-auto">
      <span className="text-xl font-semibold">What are your goals?</span>
      <div className="flex w-full flex-col items-center gap-5 mt-8">
        <div className="relative w-full flex justify-between items-center bg-[#F1F1F1] py-3 rounded-xl px-5">
          <span className="font-semibold">Weight Loss</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="relative w-full flex justify-between items-center bg-[#F1F1F1] py-3 rounded-xl px-5">
          <span className="font-semibold">Muscle Gain</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="relative w-full flex justify-between items-center bg-[#F1F1F1] py-3 rounded-xl px-5">
          <span className="font-semibold">Flexibility and Mobility</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="relative w-full flex justify-between items-center bg-[#F1F1F1] py-3 rounded-xl px-5">
          <span className="font-semibold">General Fitness</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="relative w-full flex justify-between items-center bg-[#F1F1F1] py-3 rounded-xl px-5">
          <span className="font-semibold">Event - specific training</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="relative w-full flex justify-between items-center bg-[#F1F1F1] py-3 rounded-xl px-5">
          <span className="font-semibold">Mindfulness and Mental Health</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
      </div>

      <button className="mt-20 rounded-lg text-white font-semibold w-full px-5 py-3 bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] text-lg">
        Confirm
      </button>
    </div>
  );
}

export default GoalsList
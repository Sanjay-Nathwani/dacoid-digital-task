import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkoutSchedule = () => {
  return (
    <div className="flex flex-col py-3 px-3 max-w-[400px] h-screen mx-auto">
      <div className="flex items-center justify-between w-full">
        <ChevronLeft className="w-8 h-8 bg-[#F1F1F1] p-2 rounded-md" />
        <h1 className="font-semibold text-xl">Workout Schedule</h1>
        <div />
      </div>
      <div className="flex items-center justify-center mt-2 gap-2">
        <ChevronLeft />
        <span>Feb 2024</span>
        <ChevronRight />
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="flex flex-col items-center border-1 border-gray-200 shadow-lg py-2 px-3 rounded-xl hover:bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF]">
          <p className="text-sm">Sun</p>
          <p className="text-2xl font-semibold">5</p>
        </span>
        <span className="flex flex-col items-center border-1 border-gray-200 shadow-lg py-2 px-3 rounded-xl hover:bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF]">
          <p className="text-sm">Mon</p>
          <p className="text-2xl font-semibold">6</p>
        </span>
        <span className="flex flex-col items-center border-1 border-gray-200 shadow-lg py-2 px-3 rounded-xl hover:bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF]">
          <p className="text-sm">Tue</p>
          <p className="text-2xl font-semibold">7</p>
        </span>
        <span className="flex flex-col items-center border-1 border-gray-200 shadow-lg py-2 px-3 rounded-xl hover:bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF]">
          <p className="text-sm">Wed</p>
          <p className="text-2xl font-semibold">8</p>
        </span>
        <span className="flex flex-col items-center border-1 border-gray-200 shadow-lg py-2 px-3 rounded-xl hover:bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF]">
          <p className="text-sm">Thu</p>
          <p className="text-2xl font-semibold">9</p>
        </span>
      </div>
      <div className="flex flex-col mt-4 w-full relative">
        <span className="py-3">06:00 AM</span>
        <hr />
        <div className="relative py-3">
          <span className="">07:00 AM</span>
          <hr />
          <span className="px-2 rounded-full text-white absolute right-1 top-1/2 bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0]">
            Ab Workout, 7:30am
          </span>
        </div>
        <span className="py-3">08:00 AM</span>
        <hr />
        <div className="relative py-3">
          <span className="py-3">09:00 AM</span>
          <hr />
          <span className="px-2 rounded-full text-white absolute right-10 top-1/2 bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0]">
            Upperbody Workout, 9am
          </span>
        </div>
        <span className="py-3">10:00 AM</span>
        <hr />
        <span className="py-3">11:00 AM</span>
        <hr />
        <span className="py-3">12:00 AM</span>
        <hr />
        <span className="py-3">01:00 AM</span>
        <hr />
        <div className="py-3 relative">
          <span className="py-3">02:00 AM</span>
          <hr />
          <span className="px-2 rounded-full absolute right-14 top-2 bg-gray-100">
            Upperbody Workout, 9am
          </span>
        </div>
        <div className="relative flex flex-col gap-3">
          <span className="">03:00 AM</span>
          <hr />
          <span className="">04:00 AM</span>
          <hr />
          <img
            src="/images/add.png"
            className="w-16 h-16 right-2 absolute top-2"
          />
          <img
            src="/images/plus.png"
            className="w-6 h-6 right-7 absolute top-6"
          />
        </div>
        <span className="py-3">05:00 AM</span>
        <hr />

        <div className="z-100 w-full bg-white absolute -bottom-24 px-2 flex items-center justify-between">
          <img src="/images/home.png" className="w-7 h-7" />
          <img src="/images/photo.png" className="w-7 h-7" />
          <img src="/images/search.png" className="w-20 h-20 -translate-y-8" />
          <img src="/images/camera.png" className="w-7 h-7" />
          <img src="/images/user.png" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default WorkoutSchedule;

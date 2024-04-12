import { ChevronLeft, TriangleAlert } from "lucide-react";
import ToggleSwitch from "../components/ToggleSwitch";

const WorkoutTracker = () => {
  return (
    <div className="flex flex-col py-3 px-3 max-w-[400px] h-screen mx-auto">
      <div className="flex items-center justify-between w-full">
        <ChevronLeft className="w-8 h-8 bg-[#F1F1F1] p-2 rounded-md" />
        <h1 className="font-semibold text-xl">Workout Tracker</h1>
        <div />
      </div>
      <div className="w-full mt-3">
        <img src="/images/workout.png" className="w-full h-32 px-5 " />
      </div>
      <div className="w-full py-2 px-5 mx-2 flex items-center mt-3 bg-gradient-to-r from-[#819DFF47] to-[#10101000] rounded-lg gap-3">
        <TriangleAlert className="text-[#7E96FF] w-6 h-6" />
        <p className="leading-[1] text-sm tracking-wide">
          You&apos;ve burned fewer calories than yesterday. Time to get moving!{" "}
        </p>
      </div>
      <div className="flex w-full justify-between mt-4">
        <p className="font-semibold text-lg">Upcoming Workout</p>
        <p className="text-sm text-[#7F7F7F]">See more</p>
      </div>
      <div className="w-full flex items-center justify-between px-3 shadow-xl rounded-xl mt-2 border-2 border-gray-100">
        <img
          src="./images/workout1.png"
          alt="workout1"
          className="w-12 h-12 rounded-full object-cover object-center bg-[#819AFF26]"
        />
        <div className="flex flex-col flex-1 p-3 gap-2">
          <p className="text-sm text-[#2C2B2B]">Full Body Workout</p>
          <p className="text-xs text-[#7F7F7F]">Today 3pm</p>
        </div>
        <ToggleSwitch id="ts-1" />
      </div>
      <div className="w-full flex items-center justify-between px-3 shadow-xl rounded-xl mt-4 border-2 border-gray-100">
        <img
          src="./images/workout2.png"
          alt="workout2"
          className="w-12 h-12 rounded-full object-cover object-center bg-[#819AFF26]"
        />
        <div className="flex flex-col flex-1 p-3 gap-2">
          <p className="text-sm text-[#2C2B2B]">Upper Body Workout</p>
          <p className="text-xs text-[#7F7F7F]">4 Feb, 3:30 pm</p>
        </div>
        <ToggleSwitch id="ts-2" />
      </div>

      <span className="font-semibold mt-4">What Do You Want to Train</span>
      <div className="relative w-full">
        <div className="flex justify-between mt-5 p-3 bg-[#8CB1FF99] rounded-xl">
          <div className="flex flex-col gap-2">
            <span className="text-base">Full Body Workout</span>
            <p className="text-xs">Arms</p>
            <p className="text-xs">Chest</p>
          </div>
          <img
            src="/images/workout3.png"
            alt="workout3"
            className="w-28 h-28 bg-[#FFFFFF7A] mt-2 p-2 rounded-full object-cover object-center"
          />
        </div>
        <div className="z-100 w-full bg-white absolute top-28 px-2 flex items-center justify-between">
          <img src="/images/home.png" className="w-7 h-7" />
          <img src="/images/photo.png" className="w-7 h-7" />
          <img src="/images/search.png" className="w-20 h-20 -translate-y-8" />
          <img src="/images/camera.png" className="w-7 h-7" />
          <img src="/images/user.png" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default WorkoutTracker
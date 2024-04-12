import { useState } from "react";

const ToggleSwitch = ({id}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={id}
        className={`relative flex-shrink-0 w-10 h-5 rounded-full border-1 ${
          isChecked ? "bg-[#8099FF]" : "bg-gray-400"
        }`}
      >
        <span
          className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
            isChecked ? "transform translate-x-full" : ""
          }`}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;

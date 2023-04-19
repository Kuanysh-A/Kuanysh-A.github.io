import { useState } from "react";

export const Range = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div class="flex flex-col space-y-2 p-2 w-80">
        <input type="range" className="w-full" min="1" max="6" step="1" />
        <ul class="flex justify-between w-full px-[10px]">
          <li class="flex justify-center relative">
            <span class="absolute">0</span>
          </li>
          <li class="flex justify-center relative">
            <span class="absolute">15</span>
          </li>
          <li class="flex justify-center relative">
            <span class="absolute">30</span>
          </li>
          <li class="flex justify-center relative">
            <span class="absolute">60</span>
          </li>
          <li class="flex justify-center relative">
            <span class="absolute">90</span>
          </li>
          <li class="flex justify-center relative">
            <span class="absolute">90+</span>
          </li>
        </ul>
      </div>
    </>
  );
};

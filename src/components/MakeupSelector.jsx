import React from "react";

function MakeupSelector({ selected, onChange }) {
  const options = Array.from({ length: 10 }, (_, i) => {
    const id = `makeup-${String(i + 1).padStart(2, "0")}`;
    return {
      id,
      src: `/makeup/${id}.svg`,
    };
  });

  return (
    <div className="grid grid-cols-4 gap-3 p-3 bg-[#2A2849] rounded-xl shadow-lg">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`aspect-square rounded-xl overflow-hidden flex items-center justify-center border-4 transition-all
            ${selected === option.id ? "border-purple-500 bg-purple-700" : "border-transparent"}
          `}
        >
          <img
            src={option.src}
            alt={option.id}
            className="w-3/4 h-3/4 object-contain"
          />
        </button>
      ))}
    </div>
  );
}

export default MakeupSelector;

import React from "react";
import { FaCircle, FaMagic, FaScribd, FaPalette } from "react-icons/fa";

const tools = [
];

function SubOptionToolbar({ selectedTool, onSelectTool }) {
  return (
    <div className="relative h-0">
      <div className="absolute -top-[100px]" style={{ right: "200px" }}>
        <div className="flex gap-2">
          {tools.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center">
              <button
                onClick={() => onSelectTool(tool.id)}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all
                  ${
                    selectedTool === tool.id
                      ? "bg-purple-500 text-white"
                      : "bg-[#2A2849] text-white"
                  }`}
              >
                {tool.icon}
              </button>
              <div
                className={`mt-1 h-1 w-6 rounded-full transition-all duration-200 ${
                  selectedTool === tool.id ? "bg-purple-500" : "bg-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubOptionToolbar;

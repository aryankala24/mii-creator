import React from "react";
import {
  FaSmile,
  FaCut,
  FaEye,
  FaKiss,
  FaGlasses,
  FaSave,
  FaGripLines,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { GiNoseSide, GiBeard, GiNecklaceDisplay } from "react-icons/gi";
import { FaScribd } from "react-icons/fa"; // (Already used for wrinkles)

const categories = [
  { id: "face", icon: <FaSmile /> },
  { id: "hair", icon: <FaCut /> },
  { id: "eyebrows", icon: <FaGripLines /> },
  { id: "eyes", icon: <FaEye /> },
  { id: "nose", icon: <GiNoseSide /> },
  { id: "mouth", icon: <FaKiss /> },
  { id: "glasses", icon: <FaGlasses /> },
  { id: "facehair", icon: <GiBeard /> },
  { id: "accessory", icon: <GiNecklaceDisplay /> }, // ✅ Fixed icon
  { id: "save", icon: <FaSave /> },
];

function FeatureCategoryTabs({ selectedCategory, onSelectCategory, onSave }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1B193C] px-4 py-3">
      <div className="flex justify-center gap-6 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() =>
              cat.id === "save" ? onSave() : onSelectCategory(cat.id)
            }
            className={`text-xl transition-colors duration-200 ${
              selectedCategory === cat.id
                ? "text-[#A86DFF]"
                : "text-white opacity-70 hover:opacity-100"
            }`}
          >
            {cat.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeatureCategoryTabs;

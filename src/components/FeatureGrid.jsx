import React, { useState, useEffect } from "react";
import { featureOptions } from "../data/FeatureData"; // Import featureOptions from FeatureData.js

function FeatureGrid({ selectedCategory, onSelectFeature }) {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const defaults = {
      face: "face-01",
      eyes: "eyes-01",
      hair: "hair-1",
      eyebrows: "eyebrows-01",
      nose: "nose-01",
      mouth: "mouth-01",
      glasses: "glasses-1",
      facehair: "facehair-01",
      accessory: "accessory1",
    };

    setSelectedOption(defaults[selectedCategory] || "");
  }, [selectedCategory]);

  const getOptions = () => {
    let count = 8;
    let path = "/faces";
    let prefix = "face";
    let zeroPad = true;

    switch (selectedCategory) {
      case "eyes":
        count = 8;
        path = "/eyes";
        prefix = "eyes";
        break;

      case "hair":
        count = 6;
        path = "/hair";
        prefix = "hair";
        zeroPad = false;
        break;
      case "eyebrows":
        count = 8;
        path = "/eyebrows";
        prefix = "eyebrows";
        break;
      case "nose":
        count = 8;
        path = "/nose";
        prefix = "nose";
        break;
      case "mouth":
        count = 8;
        path = "/mouth";
        prefix = "mouth";
        break;
      case "glasses":
        count = 8;
        path = "/glasses";
        prefix = "glasses";
        zeroPad = false;

        return [
          {
            id: "glasses-none",
            src: "",
            isNone: true,
          },
          ...Array.from({ length: count }, (_, i) => {
            const id = `${prefix}-${i + 1}`;
            return {
              id,
              src: `${path}/${id}.svg`,
            };
          }),
        ];

      case "mole":
        return [
          {
            id: "mole-none",
            src: "",
            isNone: true,
          },
          { id: "mole", src: "mole/mole.jpg" },
        ];

      case "facehair":
        count = 8;
        path = "/facehair";
        prefix = "facehair";
        return [
          {
            id: "facehair-none",
            src: "",
            isNone: true,
          },
          ...Array.from({ length: count }, (_, i) => {
            const id = `${prefix}-${String(i + 1).padStart(2, "0")}`;
            return {
              id,
              src: `${path}/${id}.svg`,
            };
          }),
        ];

      case "accessory":
        return [
          { id: "accessory1", src: "/assets/accessory/accessory1.jpg" },
          { id: "accessory2", src: "/assets/accessory/accessory2.jpg" },
        ];
    }

    return Array.from({ length: count }, (_, i) => {
      const id = `${prefix}-${zeroPad ? String(i + 1).padStart(2, "0") : i + 1}`;
      return {
        id,
        src: `${path}/${id}.svg`,
      };
    });
  };

  const options = getOptions();

  const handleSelect = (id) => {
    setSelectedOption(id);
    if (onSelectFeature) onSelectFeature(id);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 px-2 sm:p-4 max-w-xs sm:max-w-md mx-auto mt-2 sm:mt-4 mb-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSelect(option.id)}
          className={`aspect-square rounded-xl overflow-hidden flex items-center justify-center transition-all border-4 ${
            selectedOption === option.id
              ? "bg-purple-500 border-white"
              : "bg-[#2A2849] border-transparent"
          } hover:border-purple-400`}
        >
          {option.isNone ? (
            <span className="text-white text-2xl font-bold">🚫</span>
          ) : (
            <img
              src={option.src}
              alt={option.id}
              className="w-3/4 h-3/4 object-contain"
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default FeatureGrid;

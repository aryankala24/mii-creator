import React from "react";

const COLOR_PALETTE = [
  "#000000", "#6B7280", "#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899", "#FFFFFF"
];

function ColorPalettePicker({ selected, onChange }) {
  return (
    <div className="flex gap-3 mt-2 flex-wrap max-w-sm">
      {COLOR_PALETTE.map((color, i) => (
        <button
          key={i}
          onClick={() => onChange(color)}
          className={`w-10 h-10 rounded-full border-4 transition-all ${
            selected === color ? "border-purple-500" : "border-transparent"
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default ColorPalettePicker;

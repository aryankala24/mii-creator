import React, { useState } from "react";
import CharacterPreview from "./CharacterPreview";
import FeatureGrid from "./FeatureGrid";
import FeatureCategoryTabs from "./FeatureCategoryTabs";
import SubOptionToolbar from "./SubOptionToolbar";
import ColorPalettePicker from "./ColorPalettePicker";
import MakeupSelector from "./MakeupSelector";

function MiiCreatorLayout() {
  const [selectedCategory, setSelectedCategory] = useState("face");
  const [selectedTool, setSelectedTool] = useState("skin");
  const [skinTone, setSkinTone] = useState("#FCE7D8");
  const [color, setColor] = useState("#000000");
  const [makeup, setMakeup] = useState("makeup-01");

  const [selectedFeatures, setSelectedFeatures] = useState({
    face: "face-01",
    eyes: "eyes-01",
    mouth: "mouth-01",
    nose: "nose-01",
    hair: "hair-1",
    eyebrows: "eyebrows-01",
    glasses: "glasses-01",
    facehair: "facehair-01",
    mole: "mole",
    accessory: "accessory1",
  });

  const handleSave = () => {
    const miiData = {
      skinTone,
      color,
      makeup,
      selectedFeatures,
    };

    console.log("Saving Mii data:", miiData);

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(miiData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "mii-avatar.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-blue-1000 p-4">
      {/* Character Display */}
      <CharacterPreview
        skinTone={skinTone}
        color={color}
        makeup={makeup}
        selectedFeatures={selectedFeatures}
      />

      {/* Grid to select features */}
      <FeatureGrid
        selectedCategory={selectedCategory}
        onSelectFeature={(id) =>
          setSelectedFeatures((prev) => ({
            ...prev,
            [selectedCategory]: id,
          }))
        }
      />

      {/* Show toolbar only if not in save mode */}
      {selectedCategory !== "save" && (
        <SubOptionToolbar
          selectedTool={selectedTool}
          onSelectTool={setSelectedTool}
        />
      )}

      {selectedTool === "palette" && (
        <div className="absolute bottom-[72px] left-[calc(50%+180px)] z-20 bg-[#2A2849] px-4 py-2 rounded-xl shadow-lg">
          <ColorPalettePicker selected={color} onChange={setColor} />
        </div>
      )}

      {selectedTool === "makeup" && (
        <div className="absolute bottom-[72px] left-[calc(50%+180px)] z-20 bg-[#2A2849] px-4 py-2 rounded-xl shadow-lg">
          <MakeupSelector selected={makeup} onChange={setMakeup} />
        </div>
      )}

      {/* Bottom Category Tabs */}
      <FeatureCategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSave={handleSave}
      />
    </div>
  );
}

export default MiiCreatorLayout;

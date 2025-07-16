import React, { useState } from "react";
import { featureOptions } from "../data/FeatureData"; // Import featureOptions from FeatureData.js

function CharacterPreview({ selectedFeatures }) {
  const [molePosition, setMolePosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const layers = [
    { type: "accessory", zIndex: 5 },
    { type: "eyebrows", zIndex: 150 },
    { type: "face", zIndex: 10 },
    { type: "eyes", zIndex: 20 },
    { type: "mouth", zIndex: 30 },
    { type: "nose", zIndex: 40 },
    { type: "hair", zIndex: 50 },
    { type: "glasses", zIndex: 60 },
    { type: "facehair", zIndex: 70 },
    { type: "wrinkles", zIndex: 20 },
    { type: "makeup", zIndex: 80 },
  ];

  const handleMouseDown = (e) => {
    setDragging(true);
    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    setMolePosition({
      x: e.clientX - container.left - offset.x,
      y: e.clientY - container.top - offset.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div className="character-preview my-4 flex justify-center">
      <div
        className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[280px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {layers.map(({ type, zIndex }) => {
          const featureId = selectedFeatures[type];
          if (!featureId) return null;

          const feature = featureOptions[type]?.find(opt => opt.id === featureId);
          let src = feature?.src;

          // Default fallback paths
          if (!src && type === "mole") {
            src = "mole/mole.jpg";
          }
          if (!src && type === "accessory") {
            if (featureId === "accessory1") {
              src = "/assets/accessory/accessory1.jpg";
            } else if (featureId === "accessory2") {
              src = "/assets/accessory/accessory2.jpg";
            }
          }

          if (!src) return null;

          // Draggable Mole
          if (type === "mole") {
            return (
              <img
                key={type}
                src={src}
                alt="mole"
                onMouseDown={handleMouseDown}
                className="absolute w-[30px] h-[30px] object-contain cursor-move"
                style={{
                  left: molePosition.x,
                  top: molePosition.y,
                  zIndex,
                }}
              />
            );
          }


          // Glasses
          if (type === "glasses") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "90px",
                  height: "40px",
                  left: "100px",
                  top: "55px",
                  zIndex,
                }}
              />
            );
          }

          // Eyebrows
          if (type === "eyebrows") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "80px",   // Adjusted width for eyebrows
                  height: "25px",  // Adjusted height for eyebrows
                  left: "103px",   // Adjusted horizontal position
                  top: "44px",     // Adjusted vertical position
                  zIndex,
                }}
              />
            );
          }

          // Nose
          if (type === "nose") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "80px",   // Adjusted width for nose
                  height: "50px",  // Adjusted height for nose
                  left: "105px",   // Adjusted left position for nose
                  top: "63px",    // Adjusted top position for nose
                  zIndex,
                }}
              />
            );
          }

          // Eyes
          if (type === "eyes") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "80px",   // Adjusted width for eyes
                  height: "30px",  // Adjusted height for eyes
                  left: "104px",   // Adjusted left position for eyes
                  top: "55px",     // Adjusted top position for eyes
                  zIndex,
                }}
              />
            );
          }

          // Mouth
          if (type === "mouth") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "80px",
                  height: "28px",
                  left: "105px",
                  top: "103px",
                  zIndex,
                }}
              />
            );
          }

          // Facehair
          if (type === "facehair") {
            let width = "90px";
            let height = "50px";
            let left = "101px";
            let top = "98px";

            if (featureId === "facehair-06") {
              width = "200px";
              height = "250px";
              left = "45px";
              top = "-50px";
            } else if (featureId === "facehair-07") {
              width = "200px";
              height = "250px";
              left = "45px";
              top = "-50px";
            }

            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width,
                  height,
                  left,
                  top,
                  zIndex,
                }}
              />
            );
          }

          // Hair
          if (type === "hair") {
            let width = "200px";
            let height = "300px";
            let left = "45px";
            let top = "-75px";

            if (featureId === "hair-4") {
              width = "180px";
              height = "300px";
              left = "55px";
              top = "-80px";
            }

            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width,
                  height,
                  left,
                  top,
                  zIndex,
                }}
              />
            );
          }

          // Wrinkles
          if (type === "wrinkles") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "100px",  // Adjust size for wrinkles
                  height: "40px",  // Adjust height for wrinkles
                  left: "120px",   // Adjust position for wrinkles
                  top: "90px",     // Adjust position (slightly higher)
                  zIndex,
                }}
              />
            );
          }

          // Face
          if (type === "face") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "180px",
                  height: "180px",
                  left: "55px",
                  top: "-10px",
                  zIndex,
                }}
              />
            );
          }

          // Accessories (necklaces or hats etc.)
          if (type === "accessory") {
            return (
              <img
                key={type}
                src={src}
                alt={featureId}
                className="absolute object-contain"
                style={{
                  width: "220px",
                  height: "200px",
                  left: "35px",
                  top: "120px",
                  zIndex,
                }}
              />
            );
          }

          // Default render
          return (
            <img
              key={type}
              src={src}
              alt={featureId}
              className="absolute w-full h-full object-contain"
              style={{ zIndex }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterPreview;

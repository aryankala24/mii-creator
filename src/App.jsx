import React from "react";
import MiiCreatorLayout from "./components/MiiCreatorLayout";

function App() {
  const handleSave = () => {
    // For now, just trigger a download of the character.svg
    const link = document.createElement("a");
    link.href = "/character.svg"; // You can replace this with a generated canvas or data URL later
    link.download = "mii-character.svg";
    link.click();
  };

  return (
    <div className="App">
      <MiiCreatorLayout onSave={handleSave} />
    </div>
  );
}

export default App;

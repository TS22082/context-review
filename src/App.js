import "./App.css";
import { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import InnerComponent from "./Components/InnerComponent/InnerComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="App">
        <InnerComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

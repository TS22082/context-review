import React, { useContext, useEffect } from "react";
import ThemeContext from "../../Context/ThemeContext";

const InnerInnerComponent = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <h1>Hello from inner inner component</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle</button>
    </div>
  );
};

export default InnerInnerComponent;

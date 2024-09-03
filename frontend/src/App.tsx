import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";

import "./index.scss";

function App() {
  // darkMode states
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState<string>("light"); //default dark theme set in html

  // handle darkMode toggle
  const toggleDarkMode = () => {
    document.querySelector("html")?.setAttribute("data-theme", `${theme}`);
  };
  useEffect(() => {
    // action on update of darkMode
    if (darkMode == false) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [darkMode]);


  return (
    <main className={`w-full h-screen bg-bkg text-content px-24 py-10`}>
      <div className="w-full text-3xl flex gap-x-4 pb-44">
        <h1>Jacob Delgado</h1>
        <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
          {theme === "light" ? (
            <MdOutlineMail className="text-4xl text-[#98b9db]" />
          ) : (
            <MdOutlineMail className="text-4xl text-[#454545]" />
          )}
        </a>
        <button
          className="w-9 text-4xl"
          onClick={() => {
            setDarkMode(!darkMode);
            toggleDarkMode();
          }}
        >
          {theme === "light" ? (
            <IoSunnyOutline className="text-[#eeeeee]" />
          ) : (
            <FaMoon className="text-[#454545]" />
          )}
        </button>
        <div></div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl">Hello! I'm Jacob.</h2>
        <p>I'm currently a freelance developer looking for a Junior Role.</p>
      </div>
    </main>
  );
}

export default App;

import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiGitea } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

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
    <main
      className={`w-full h-screen bg-bkg text-content px-24 py-10 font-primary font-sans`}
    >
      <div className="w-full text-2xl flex pb-44">
        <div className="w-1/2 flex items-center gap-x-2 justify-start text-center">
          <h1>Jacob Delgado</h1>
          <button
            className="w-9 text-4xl"
            onClick={() => {
              setDarkMode(!darkMode);
              toggleDarkMode();
            }}
          >
            {theme === "light" ? (
              <IoSunnyOutline className="text-3xl text-[#eeeeee]" />
            ) : (
              <FaMoon className="text-2xl text-[#454545]" />
            )}
          </button>
        </div>
        <div className="flex w-1/2 justify-end items-center">
          <ul className="flex flex-row gap-x-2 items-center">
            <li>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                {theme === "light" ? (
                  <MdOutlineMail className="text-[1.7rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                ) : (
                  <MdOutlineMail className="text-[1.7rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                )}
              </a>
            </li>
            <li>
              <a href={`${import.meta.env.VITE_LINKEDIN}`} target="blank">
                {theme === "light" ? (
                  <FaLinkedin className="text-[1.7rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                ) : (
                  <FaLinkedin className="text-[1.7rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                )}
              </a>
            </li>
            <li>
              <a href={`${import.meta.env.VITE_GITHUB}`} target="blank">
                {theme === "light" ? (
                  <FaGithub className="text-[1.7rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                ) : (
                  <FaGithub className="text-[1.7rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                )}
              </a>
            </li>
            <li>
              <a href={`${import.meta.env.VITE_GITEA}`} target="blank">
                {theme === "light" ? (
                  <SiGitea className="text-[1.7rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                ) : (
                  <SiGitea className="text-[1.7rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                )}
              </a>
            </li>
            <li><a href={`${import.meta.env.VITE_RESUME}`} className="text-lg border-2 border-[#98b9db] p-0.5 rounded">Resume</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl">Hello! I'm Jacob.</h2>
        <p>I'm currently a freelance developer looking for a Junior Role.</p>
      </div>
    </main>
  );
}

export default App;

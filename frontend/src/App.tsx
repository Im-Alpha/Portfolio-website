import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiGitea } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import "./App.css";
import "./index.scss";

function App() {
  // darkMode states
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState<string>("light"); //default dark theme set in html
  const [burgerClass, setBurgerClass] = useState<string>("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState<string>("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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

  // handle burger Menu
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  };

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
          <div className="burger-menu lg:hidden" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <div className={menuClass}>
            <ul className="md:flex flex-row gap-x-2 items-center hidden justify-center">
              <li>
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                  {theme === "light" ? (
                    <MdOutlineMail className="text-[2.5rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                  ) : (
                    <MdOutlineMail className="text-[2.5rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                  )}
                </a>
              </li>
              <li>
                <a href={`${import.meta.env.VITE_LINKEDIN}`} target="blank">
                  {theme === "light" ? (
                    <FaLinkedin className="text-[2rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                  ) : (
                    <FaLinkedin className="text-[2rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                  )}
                </a>
              </li>
              <li>
                <a href={`${import.meta.env.VITE_GITHUB}`} target="blank">
                  {theme === "light" ? (
                    <FaGithub className="text-[2rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                  ) : (
                    <FaGithub className="text-[2rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                  )}
                </a>
              </li>
              <li>
                <a href={`${import.meta.env.VITE_GITEA}`} target="blank">
                  {theme === "light" ? (
                    <SiGitea className="text-[2.5rem] text-[#98b9db] hover:text-[#eeeeee] transition-none" />
                  ) : (
                    <SiGitea className="text-[2.5rem] text-[#454545] hover:text-[#98b9db] transition-none" />
                  )}
                </a>
              </li>
              <li>
                <a
                  href={`${import.meta.env.VITE_RESUME}`}
                  target="blank"
                  className="text-lg flex items-center justify-center"
                >
                  {theme === "light" ? (
                    <p className="text-[1.7rem] text-[#98b9db] hover:text-[#eeeeee] transition-none border-2 border-[#98b9db] p-0.5 rounded">
                      Resume
                    </p>
                  ) : (
                    <p className="text-[1.7rem] text-[#454545] hover:text-[#98b9db] transition-none border-2 border-[#454545] p-0.5 rounded">
                      Resume
                    </p>
                  )}
                </a>
              </li>
            </ul>
          </div>
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

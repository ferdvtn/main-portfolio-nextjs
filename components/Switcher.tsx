import { useEffect, useState } from "react";

const Switcher = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const switchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const html = document.querySelector("html");
    setDarkTheme(e.target.checked);
    if (e.target.checked) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkTheme) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div
      className={`theme-switch-wrapper flex justify-center items-center absolute right-5 top-5`}
    >
      <em
        className={`icon-dark mr-5 md:mr-0 md:ml-5 ${
          !darkTheme ? "hidden" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </em>
      <em
        className={`icon-light mr-5 md:mr-0 md:ml-5 ${
          darkTheme ? "hidden" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </em>

      <label
        className="order-last md:order-first theme-switch"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          id="checkbox"
          checked={darkTheme}
          onChange={switchTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default Switcher;

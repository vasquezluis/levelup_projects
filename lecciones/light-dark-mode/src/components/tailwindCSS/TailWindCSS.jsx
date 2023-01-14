import { useState, useEffect } from "react";
import image from "../../assets/card-top.jpg";

function TailWindCSS() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-black">
        <img className="w-full" src={image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 dark:text-white">
            The Coldest Sunset
          </div>
          <p className="text-gray-700 text-base dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={handleSwitch}
          className="bg-blue-500 text-white p-3 mt-5 dark:bg-pink-300"
        >
          Cambiar theme
        </button>
      </div>
    </div>
  );
}

export default TailWindCSS;

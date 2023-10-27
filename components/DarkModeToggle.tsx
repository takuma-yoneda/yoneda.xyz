/* Refer to https://blog.logrocket.com/dark-mode-react-in-depth-guide/ */


import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
const useColorSchemeState = createPersistedState("colorScheme");

// import Toggle from "react-toggle";
import "react-toggle/style.css";


const useColorScheme = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );
  console.log('systemPrefersDark', systemPrefersDark)

  const [isDark, setIsDark] = useColorSchemeState();
//   const value = useMemo(
//     () => (isDark === undefined ? !!systemPrefersDark : isDark),
//     [isDark, systemPrefersDark]
//   );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

//   return {
//     isDark: value,
//     setIsDark,
//   };
  return {
    isDark: isDark,
    setIsDark,
  };
}


export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
//   const [isDark, setIsDark] = useState(false);
  return (

    // <Link href='/' onClick={() => {
    //   console.log('Link is clicked!')
    //   setIsDark(!isDark)
    // }}>
    //   <i className="fa-solid fa-moon text-violet-500 text-xl p-4" />
    // </Link>

    // Overwrite with `display: inline` to align with other icons (default with .swap is `display: inline-grid`)
    <label className="swap swap-rotate text-xl p-4 inline">
      <input type="checkbox" defaultChecked={!!isDark} className="inline" onClick={() => {
          console.log('clicked!!', isDark)
          setIsDark(!isDark)
      }} />
      {/* // A standard approach for centering an object (absolute + left-1/2 + top-1/2 + translate-x-[-50%] + translate-y-[-50%]) */}
      <i className="swap-on fa-solid fa-moon text-violet-500 absolute left-6 top-1/2 translate-x-[-50%] translate-y-[-50%]" />
      <i className="swap-off fa-solid fa-sun text-yellow-300 absolute left-6 top-1/2 translate-x-[-50%] translate-y-[-50%]" />
    </label>
  );
};
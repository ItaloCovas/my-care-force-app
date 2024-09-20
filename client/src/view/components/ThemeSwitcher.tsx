import { useTheme } from "@/shared/providers/ThemeProvider";
import { RxMoon, RxSun } from "react-icons/rx";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="mt-2">
      {theme === "dark" ? (
        <RxSun
          onClick={() => setTheme("light")}
          className="h-7 w-7 cursor-pointer text-[#F3C432] hover:text-[#3F4347] hover:transition hover:duration-500 hover:ease-in-out mb-2"
        />
      ) : (
        <RxMoon
          onClick={() => setTheme("dark")}
          className="h-7 w-7 cursor-pointer text-[#3F4347] hover:text-[#F3C432] hover:transition hover:duration-500 hover:ease-in-out mb-2"
        />
      )}
    </div>
  );
}

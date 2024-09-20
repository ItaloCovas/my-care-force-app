import { useAuth } from "../../shared/context/AuthContext/useAuth";
import { Logo } from "./Logo";
import { MdLogout } from "react-icons/md";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  const { signOut } = useAuth();

  return (
    <header className="w-full  flex items-center justify-between p-5 border-b border-zinc-200 dark:border-[#4062F9] pb-3">
      <Logo />
      <div className="flex items-center justify-center gap-x-6 relative">
        <ThemeSwitcher />
        <MdLogout
          className="w-6 h-6 cursor-pointer text-zinc-700 dark:text-white"
          onClick={signOut}
        />
      </div>
    </header>
  );
}

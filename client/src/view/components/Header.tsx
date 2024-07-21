import { useAuth } from "../../shared/context/AuthContext/useAuth";
import { Logo } from "./Logo";
import { MdLogout } from "react-icons/md";

export function Header() {
  const { signOut } = useAuth();

  return (
    <header className="w-full  flex items-center justify-between p-5 border-b border-zinc-200 pb-3">
      <Logo />
      <MdLogout
        className="w-6 h-6 cursor-pointer text-zinc-700"
        onClick={signOut}
      />
    </header>
  );
}

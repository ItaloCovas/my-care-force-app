import { ThemeSwitcher } from "@/view/components/ThemeSwitcher";
import logo from "../../../assets/img/logo.png";
import { Input } from "../../components/Input";
import { Spinner } from "../../components/Spinner";
import { useSignIn } from "./useSignIn";

export function SignIn() {
  const { register, errors, handleSubmit, isLoading } = useSignIn();

  return (
    <main className="h-screen w-full bg-zinc-50 dark:bg-zinc-800 flex flex-col justify-center items-center px-6 md:px-0 relative select-none">
      <ThemeSwitcher />
      <div className="bg-white dark:bg-zinc-900/30 w-[500px] py-16 pb-10 px-6 rounded-lg border-[#4062F9] border-2 mt-10">
        <form>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <img
              src={logo}
              alt="My Care Force Logo"
              className="h-[70px] w-[70px] rounded-full"
            />
            <span className="font-semibold text-center dark:text-white">
              MyCareForce - Login Enfermeiros
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-y-3">
            <Input
              placeholder="Insira seu email"
              type="text"
              label="Email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              placeholder="Insira sua senha"
              type="password"
              label="Senha"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>
          <button
            disabled={Object.entries(errors).length > 0}
            className="bg-[#4062F9] hover:bg-[#4062F9]/90 disabled:bg-[#93A1F7] flex justify-center items-center transition-colors ease-in-out duration-200 w-full rounded-lg mt-6 py-[10px] disabled:cursor-not-allowed text-white font-bold tracking-wider"
            onClick={handleSubmit}
          >
            {isLoading ? <Spinner /> : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}

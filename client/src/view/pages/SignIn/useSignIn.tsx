import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useState } from "react";
import { usersService } from "../../../shared/services/authService";
import { useAuth } from "../../../shared/context/AuthContext/useAuth";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório.")
    .email("Informe um email válido."),
  password: z.string().min(8, "Senha é obrigatória."),
});

type FormData = z.infer<typeof schema>;

export function useSignIn() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = hookFormSubmit(async (data: FormData) => {
    try {
      setIsLoading(true);
      const authData = await usersService.signInUser(data);
      setIsLoading(false);
      signIn(authData!);
      reset();
      toast.success("Login efetuado com sucesso.");
    } catch {
      setIsLoading(false);
      toast.error("Credenciais inválidas, tente novamente.");
    }
  });

  return {
    register,
    errors,
    handleSubmit,
    isLoading,
  };
}

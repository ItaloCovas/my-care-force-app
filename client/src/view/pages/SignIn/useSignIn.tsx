import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useState } from "react";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório.")
    .email("Informe um email válido."),
  password: z.string().min(8, "Senha é obrigatória."),
});

type FormData = z.infer<typeof schema>;

export function useSignIn() {
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
    console.log(data, "edaksdsk");
    try {
      setIsLoading(true);
      //   const authData = await usersService.signInAdmin(data);
      //   setIsLoading(false);
      //   signInAdmin(authData!);
      reset();
      toast.success("Login efetuado com sucesso.");
      //   navigate('/admin/classes', { replace: true });
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

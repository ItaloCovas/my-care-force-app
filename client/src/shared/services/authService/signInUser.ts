import { api } from "../api";

export interface SignInUserParams {
  email: string;
  password: string;
}

export interface SignInUserResponse {
  accessToken: string;
  expiresIn: number;
}

export async function signInUser(signInData: SignInUserParams) {
  const data = await api.post<SignInUserResponse>("auth/sign-in", signInData);

  return data.data;
}

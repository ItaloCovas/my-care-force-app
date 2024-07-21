import { api } from "../api";

export interface SignInUserParams {
  ra: string;
  password: string;
}

export interface SignInUserResponse {
  accessToken: string;
  expiresIn: number;
}

export async function signInUser(signInData: SignInUserParams) {
  const data = await api.post<SignInUserResponse>("/user/scrape", signInData);

  console.log(data, "DEITAAA");
}

import { signIn } from "next-auth/react";

export async function serverSignIn(email: string, password: string) {
  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (result?.error) {
    return { success: false, message: result.error };
  }

  return { success: true, message: "You have successfully logged in." };
}

import { signOut } from "next-auth/react";

export async function serverSignOut() {
  await signOut({ redirect: true, callbackUrl: "/" });

  //   if (result?.error) {
  //     return { success: false, message: result.error };
  //   }

  //   return { success: true, message: "You have successfully " };
}

import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "./types";

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return true;
  }
};

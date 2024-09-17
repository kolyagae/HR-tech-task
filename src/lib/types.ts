// export interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface DecodedToken {
  exp: number;
}

// export interface ProfileResponse {
//   myProfile: User;
// }

export interface LoginResponse {
  login: {
    access_token: string;
    refresh_token: string;
  };
}

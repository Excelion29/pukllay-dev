import { ApiResponse } from "./ApiResponse";

export interface AuthResponse{
  accessToken: string;
  refreshToken: string;
  id: number;
  name: string;
  email: string;
  tokenType: string;
  expiresAt: string;
  roles: string[];
}

export interface AuthRequest{
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthLoginRequest{
  email: "string",
  password: "string"
}

export interface AuthApiResponse extends ApiResponse{
  data: AuthResponse;
}

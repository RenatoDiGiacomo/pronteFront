import { createContext } from "react";

// Type definitions for User and AuthContext needed confirm schema
export type User = {
  _id: string;
  name?: string;
  email?: string;
};

// Type definition for the AuthContext, including user information and authentication functions
export type AuthContextType = {
  user?: User | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  isAuthenticated: boolean;
  loading: boolean;

  login: (user: string, password: string) => Promise<void>;
  logout: () => void;
  refresh?: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

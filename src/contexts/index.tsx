import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { ColorModeProvider } from "./ColorModeProvider";
import { ToastProvider } from "./ToastProvider";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ColorModeProvider>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </ColorModeProvider>
  );
}

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useMemo } from "react";
import { useColorMode } from "./hooks/useColorMode";
import { Routes } from "./routes";
import { getTheme } from "./theme";

export function App() {
  const { mode } = useColorMode();

  const theme = useMemo(() => getTheme(mode), [mode]);

  console.log(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

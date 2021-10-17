import { createTheme } from "@material-ui/core/styles";

export type ModeTypes = "dark" | "light";
export const getTheme = (mode: ModeTypes = "light") => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#556cd6",
      },
      // secondary: {
      //   main: '#19857b',
      // },
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: "#fff",
      // },
    },
  });
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: "#fff",
    // },
  },
});

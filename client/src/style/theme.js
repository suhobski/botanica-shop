import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#ffffff",
  dark: "#528e86",
});

export const secondBackgroundColor = theme("mode", {
  light: "#dcefe7",
  dark: "#477d76",
});

export const textColor = theme("mode", {
  light: "#2b7959",
  dark: "#fafafa",
});

export const secondTextColor = theme("mode", {
  light: "#eee",
  dark: "#222",
});

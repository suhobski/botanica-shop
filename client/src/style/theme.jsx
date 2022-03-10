import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#528e86",
});

export const textColor = theme("mode", {
  light: "#528e86",
  dark: "#fafafa",
});

export const secondBackgroundColor = theme("mode", {
  light: "transparent",
  dark: "#477d76",
});

export const secondTextColor = theme("mode", {
  light: "#eee",
  dark: "#222",
});

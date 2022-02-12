import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#f8f8f8",
  dark: "#023026",
});

export const textColor = theme("mode", {
  light: "#3d9690",
  dark: "#d5eddc",
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee",
});

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222",
});

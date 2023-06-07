import { extendTheme } from "@chakra-ui/theme-utils";
import { popoverTheme } from "./styles/popOverTheme";

export const colors = {
  primaryYellow: "#e07e1b",
};
const theme = extendTheme({
  colors,
  components: {
    Popover: popoverTheme,
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {
          dialog: { top: "100px !important", maxH: "90vh" },
          body: { top: "120px" },
        },
        secondary: {
          dialog: {
            top: "100px !important",
            maxH: "60vh",
            left: "150px !important",
          },
          body: { top: "120px" },
        },
      },
    },
    Link: {
      variants: {
        primary: { _hover: { textDecor: "none", color: "primaryYellow" } },
        secondary: {
          color: "primaryYellow",
          _hover: { textDecor: "none", color: "primaryYellow" },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          bg: "primaryYellow",
          color: "#fff",
          borderRadius: "8px",
          _hover: { bg: "primaryYellow", color: "#fff" },
          _active: { bg: "primaryYellow", color: "#fff" },
          _selected: { bg: "primaryYellow", color: "#fff" },
        },
        secondary: {
          bg: "none",
          borderRadius: "8px",
          _hover: { bg: "primaryYellow", color: "#fff" },
          _active: { bg: "primaryYellow", color: "#fff" },
          _selected: { bg: "primaryYellow", color: "#fff" },
        },
      },
    },
  },
});

export default theme;

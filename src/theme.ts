import { extendTheme } from "@chakra-ui/theme-utils";

export const colors = {
  primaryYellow: "#e07e1b",
};
const theme = extendTheme({
  colors,
  components: {
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
            maxH: "70vh",
            left: "150px !important",
          },
          body: { top: "120px" },
        },
      },
    },
  },
});

export default theme;

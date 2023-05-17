import { extendTheme } from "@chakra-ui/theme-utils";

export const colors = {
  primaryYellow: "#e07e1b",
};
const theme = extendTheme({
  colors,
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      baseStyle: {
        dialog: { top: "120px" },
      },
      variants: {
        primary: {
          dialog: { top: "100px !important", maxH: "90vh" },
          body: { top: "120px" },
        },
      },
    },
  },
});

export default theme;

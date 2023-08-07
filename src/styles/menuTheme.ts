import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    bg: "teal.500",
    color: "gray.200",
    _hover: {
      bg: "teal.600",
      color: "white",
    },
  },
  menu: {
    // ml: "148px",
  },
  list: {
    py: "4",
    border: "none",
    bg: "#fff",
  },
  item: {
    bg: "#fff",
    color: "gray.800",
    _hover: {
      bg: "#fff",
      color: "primaryYellow",
    },
    _focus: {
      bg: "#fff",
      color: "primaryYellow",
    },
  },
  groupTitle: {
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
  divider: {
    my: "4",
    borderColor: "white",
    borderBottom: "2px dotted",
  },
});
export const menuTheme = defineMultiStyleConfig({ baseStyle });

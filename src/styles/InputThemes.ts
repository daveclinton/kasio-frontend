import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    _focusVisible: {
      outline: "2px solid #e07e1b",
      borderColor: "none",
      boxShadow: "none",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });

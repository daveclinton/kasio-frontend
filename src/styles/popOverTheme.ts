import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);
const baseStyle = definePartsStyle({
  // define the part you're going to style
  popper: {
    zIndex: 20, // change the background of the body to gray.800
  },
});
export const popoverTheme = defineMultiStyleConfig({ baseStyle });

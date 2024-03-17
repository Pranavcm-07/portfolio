import { styled } from "@mui/system";
import { Box } from "@mui/material";

const ScrollBox = styled(Box)({
  display: "inline-block",
  animation: "scroll 10s linear infinite",
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
});

export default ScrollBox;

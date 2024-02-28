import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(255, 193, 7)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(255, 193, 7)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffc107",
  },
});

export default CustomTextField;

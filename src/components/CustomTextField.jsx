import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#aaa",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(255, 193, 7)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(255, 193, 7)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffc107",
  },
  "& .MuiInputLabel-root": {
    color: "#aaa",
  },
  "& .css-1x5jdmq": {
    color: "white",
  },
  "& .css-u36398": {
    color: "white",
  },
});

export default CustomTextField;

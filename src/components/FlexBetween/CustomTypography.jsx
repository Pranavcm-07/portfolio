import { Typography } from "@mui/material";
const CustomTypography = ({ item }) => {
  return (
    <Typography
      sx={{
        fontWeight: "700",
        fontSize: "17px",
        "&:hover": {
          color: "#ffc107",
        },
      }}
    >
      <span
        data-hover={item}
        style={{
          position: "relative",
          display: "inline-block",
          transition: "0.3s",
        }}
      >
        {item}
      </span>
    </Typography>
  );
};

export default CustomTypography;

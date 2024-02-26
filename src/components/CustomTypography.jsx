import { Typography } from "@mui/material";
const CustomTypography = ({ item }) => {
  const handleClick = () => {
    const section = document.getElementById(`${item}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Typography
      sx={{
        fontWeight: "700",
        fontSize: "17px",
        "&:hover": {
          color: "#ffc107",
        },
        cursor: "pointer",
      }}
    >
      <span
        onClick={handleClick}
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

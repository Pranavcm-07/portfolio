import { Typography, useMediaQuery } from "@mui/material";
const CustomTypography = ({ item }) => {
  const handleClick = () => {
    const section = document.getElementById(`${item}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const isTablet = useMediaQuery("(max-width:900px)");

  return (
    <Typography
      sx={{
        fontWeight: "700",
        fontSize: "17px",
        "&:hover": {
          color: "#ffc107",
        },
        cursor: "pointer",
        mt: isTablet && "30px",
      }}
    >
      <span
        onClick={handleClick}
        data-hover={item}
        style={{
          position: "relative",
          display: "inline-block",
          transition: "0.1s",
        }}
      >
        {item}
      </span>
    </Typography>
  );
};

export default CustomTypography;

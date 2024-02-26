import { IconButton, Typography, Box } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import LightModeIcon from "@mui/icons-material/LightMode";
import CustomTypography from "../../components/CustomTypography";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "15px 20px",
        backgroundColor: "white",
        zIndex: "9999",
        position: "sticky",
      }}
    >
      <FlexBetween
        sx={{
          width: "70%",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            "&:hover": {
              color: "#ffc107",
            },
            transition: "0.3s",
          }}
        >
          Pranav
        </Typography>
        <FlexBetween
          sx={{
            gap: "30px",
            color: "grey",
          }}
        >
          <CustomTypography item={"Home"} />
          <CustomTypography item={"About"} />
          <CustomTypography item={"Skills"} />
          <CustomTypography item={"Projects"} />
          <CustomTypography item={"Experience"} />
          <CustomTypography item={"Contact"} />
        </FlexBetween>
        <IconButton sx={{ fontSize: "30px" }}>
          <LightModeIcon sx={{ color: "black" }} />
        </IconButton>
      </FlexBetween>
    </Box>
  );
};

export default Navbar;

import { IconButton, Typography, Box } from "@mui/material";
import FlexBetween from "../../components/FlexBetween/FlexBetween";
import LightModeIcon from "@mui/icons-material/LightMode";
import CustomTypography from "../../components/FlexBetween/CustomTypography";

const Navbar = () => {
  return (
    <Box sx={{ width: "70%", margin: "auto" }}>
      <FlexBetween
        sx={{
          mt: "20px",
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

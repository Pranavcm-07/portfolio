import { Typography, Box, Link, IconButton } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import CustomTypography from "../../components/CustomTypography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "15px 20px",
        backgroundColor: "rgba(255,255,255)",
        zIndex: "9999",
        position: "fixed",
        borderBottom: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          width: "95%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            "&:hover": {
              color: "#ffc107",
            },
            transition: "0.1s",
            position: "absolute",
            left: "0",
          }}
        >
          Pranav.dev
        </Typography>
        <FlexBetween
          sx={{
            gap: "30px",
            color: "black",
          }}
        >
          <CustomTypography item={"Home"} />
          <CustomTypography item={"About"} />
          <CustomTypography item={"Skills"} />
          <CustomTypography item={"Projects"} />
          <CustomTypography item={"Experience"} />
          <CustomTypography item={"Contact"} />
        </FlexBetween>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            position: "absolute",
            right: "0",
          }}
        >
          <Link
            href="https://www.linkedin.com/in/pranav-cm-929129249/"
            target="_blank"
            rel="noopener"
          >
            <IconButton>
              <LinkedInIcon sx={{ fontSize: "20px", color: "black" }} />
            </IconButton>
          </Link>
          <Link
            href="https://twitter.com/pranavcm_07"
            target="_blank"
            rel="noopener"
          >
            <IconButton>
              <TwitterIcon sx={{ fontSize: "20px", color: "black" }} />
            </IconButton>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
          >
            <IconButton>
              <InstagramIcon sx={{ fontSize: "20px", color: "black" }} />
            </IconButton>
          </Link>
          <Link
            href="https://github.com/Pranavcm-07"
            target="_blank"
            rel="noopener"
          >
            <IconButton>
              <GitHubIcon sx={{ fontSize: "20px", color: "black" }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

import {
  Typography,
  Box,
  Link,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import FlexBetween from "../../components/FlexBetween";
import CustomTypography from "../../components/CustomTypography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
const Navbar = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
    const section = document.getElementById(`Home`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      component={motion.nav}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      sx={{
        width: isTablet && menu ? "50%" : "100%",
        height: isTablet && menu ? "100%" : "auto",
        padding: isTablet ? "20px" : "25px 20px",
        backgroundColor: "rgba(0,0,0)",
        color: "white",
        zIndex: "9999",
        position: "fixed",
        transition: "0.3s",
        borderBottom: isTablet ? null : "1px solid rgba(255,255,255,0.2)",
        boxShadow: isTablet && menu && "5px 0px 20px rgba(160,160,160,0.2)",
      }}
    >
      {isTablet ? (
        menu ? (
          <>
            <IconButton onClick={() => setMenu(!menu)} sx={{ mb: "20px" }}>
              <CloseIcon
                sx={{
                  fontSize: "30px",
                  color: "white",
                }}
              />
            </IconButton>
            <Box
              sx={{
                width: "95%",
                margin: "auto",
                display: "Block",
                position: "relative",
              }}
            >
              <Typography
                onClick={handleClick}
                sx={{
                  fontSize: "25px",
                  fontWeight: "700",
                  "&:hover": {
                    color: "#ffc107",
                  },
                  transition: "0.1s",
                  left: "0",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Pranav.dev
              </Typography>
              <Box
                sx={{
                  color: "white",
                  textAlign: "center",
                }}
                onClick={() => setMenu(!menu)}
              >
                <CustomTypography item={"About"} />
                <CustomTypography item={"Skills"} />
                <CustomTypography item={"Projects"} />
                <CustomTypography item={"Experience"} />
                <CustomTypography item={"Contact"} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                  right: "0",
                  mt: isTablet && "30px",
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/pranav-cm-929129249/"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton>
                    <LinkedInIcon sx={{ fontSize: "20px", color: "white" }} />
                  </IconButton>
                </Link>
                <Link
                  href="https://twitter.com/pranavcm_07"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton>
                    <TwitterIcon sx={{ fontSize: "20px", color: "white" }} />
                  </IconButton>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton>
                    <InstagramIcon sx={{ fontSize: "20px", color: "white" }} />
                  </IconButton>
                </Link>
                <Link
                  href="https://github.com/Pranavcm-07"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton>
                    <GitHubIcon sx={{ fontSize: "20px", color: "white" }} />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </>
        ) : (
          <IconButton onClick={() => setMenu(!menu)}>
            <MenuIcon
              sx={{
                fontSize: "30px",
                color: "white",
              }}
            />
          </IconButton>
        )
      ) : (
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
            onClick={handleClick}
            sx={{
              fontSize: "25px",
              fontWeight: "700",
              "&:hover": {
                color: "#ffc107",
              },
              transition: "0.1s",
              position: "absolute",
              left: "0",
              cursor: "pointer",
            }}
          >
            Pranav.dev
          </Typography>
          <FlexBetween
            sx={{
              gap: "30px",
              color: "white",
            }}
          >
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
                <LinkedInIcon sx={{ fontSize: "20px", color: "white" }} />
              </IconButton>
            </Link>
            <Link
              href="https://twitter.com/pranavcm_07"
              target="_blank"
              rel="noopener"
            >
              <IconButton>
                <TwitterIcon sx={{ fontSize: "20px", color: "white" }} />
              </IconButton>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
            >
              <IconButton>
                <InstagramIcon sx={{ fontSize: "20px", color: "white" }} />
              </IconButton>
            </Link>
            <Link
              href="https://github.com/Pranavcm-07"
              target="_blank"
              rel="noopener"
            >
              <IconButton>
                <GitHubIcon sx={{ fontSize: "20px", color: "white" }} />
              </IconButton>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

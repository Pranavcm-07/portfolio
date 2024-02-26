import { Box, Typography, IconButton, Divider, Link } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <Box sx={{ width: "85%", margin: "auto", padding: "30px" }}>
      <Box>
        <FlexBetween>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              PRANAV CM
            </Typography>
            <Typography
              sx={{
                margin: "15px 0",
                width: "60%",
                lineHeight: "2",
                color: "#aaa",
              }}
            >
              A dynamic full-stack developer driven by a burning passion for
              crafting innovative solutions. Living, learning, & leveling up one
              day at a time.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                textAlign: "center",
                mb: "10px",
              }}
            >
              Socials
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Link
                href="https://www.linkedin.com/in/pranav-cm-929129249/"
                target="_blank"
                rel="noopener"
              >
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1d1d1d",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: "30px", color: "white" }} />
                </IconButton>
              </Link>
              <Link
                href="https://twitter.com/pranavcm_07"
                target="_blank"
                rel="noopener"
              >
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1d1d1d",
                    },
                  }}
                >
                  <TwitterIcon sx={{ fontSize: "30px", color: "white" }} />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
              >
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1d1d1d",
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: "30px", color: "white" }} />
                </IconButton>
              </Link>
              <Link
                href="https://github.com/Pranavcm-07"
                target="_blank"
                rel="noopener"
              >
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1d1d1d",
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: "30px", color: "white" }} />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </FlexBetween>
      </Box>
      <Divider sx={{ backgroundColor: "#aaa", margin: "20px 0" }} />
      <Box
        sx={{
          mt: "30px",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          © Copyright 2024. Made by
          <Typography sx={{ fontWeight: "500", fontSize: "13px" }}>
            Pranav CM
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

import {
  Box,
  Typography,
  IconButton,
  Divider,
  Link,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  const date = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width:650px)");
  const isTablet = useMediaQuery("(max-width:1000px)");
  return (
    <Box
      sx={{ width: "90%", margin: "auto", padding: isMobile ? "15px" : "30px" }}
    >
      <Box>
        <Box
          sx={{
            display: isMobile ? "block" : "flex",
            alignItems: "top",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: isMobile ? "17px" : "20px",
                fontWeight: "700",
                textAlign: isMobile && "center",
              }}
            >
              PRANAV CM
            </Typography>
            <Typography
              sx={{
                margin: isMobile ? "15px auto" : "15px 0",
                width: isTablet ? "90%" : "60%",
                lineHeight: "2",
                color: "#aaa",
                textAlign: isMobile && "center",
                fontSize: isMobile && "15px",
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
                fontSize: isMobile ? "17px" : "20px",
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
                  <LinkedInIcon
                    sx={{ fontSize: "30px", color: "rgba(255,255,255,0.3)" }}
                  />
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
                  <TwitterIcon
                    sx={{ fontSize: "30px", color: "rgba(255,255,255,0.3)" }}
                  />
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
                  <InstagramIcon
                    sx={{ fontSize: "30px", color: "rgba(255,255,255,0.3)" }}
                  />
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
                  <GitHubIcon
                    sx={{ fontSize: "30px", color: "rgba(255,255,255,0.3)" }}
                  />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{ backgroundColor: "rgba(255,255,255,0.3)", margin: "20px 0" }}
      />
      <Box
        sx={{
          mt: "30px",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        <Box
          sx={{
            fontSize: "13px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          © Copyright {date}. Made by
          <Typography sx={{ fontWeight: "500", fontSize: "13px" }}>
            Pranav CM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

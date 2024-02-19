import { Box, Button, CardMedia, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const Home = () => {
  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        display: "flex",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Typography
          sx={{
            color: "#5b5b5b",
            fontSize: "14px",
            fontWeight: "600",
            wordSpacing: "4px",
            mt: "15px",
            padding: "10px 0",
          }}
        >
          Welcome to my portfolio website!
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "2.8em",
              fontWeight: "700",
            }}
          >
            Hey folks, I'm <span style={{ color: "#ffc107" }}>Pranav</span>
          </Typography>
          {/* <Typography></Typography> */}
        </Box>
        <Typography
          sx={{
            margin: "10px 0",
            color: "#5b5b5b;",
            fontSize: "18px",
            fontWeight: "300",
          }}
        >
          A passionate full-stack web developer dedicated to crafting engaging
          and innovative digital experiences.
        </Typography>
        <Box
          sx={{
            margin: "25px 0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button
            sx={{
              padding: "13px 29px",
              display: "flex",
              gap: "7px",
              alignItems: "center",
              backgroundColor: "#eee",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#eee",
                "& svg": {
                  color: "#ffc107",
                },
                "& .MuiTypography-root": {
                  color: "#ffc107",
                },
              },
            }}
          >
            <DescriptionIcon
              sx={{ color: "#5b5b5b", fontSize: "15px", transition: "0.3s" }}
            />
            <Typography
              sx={{
                color: "#5b5b5b",
                fontWeight: "700",
                fontSize: "12px",
                transition: "0.3s",
              }}
            >
              Download Resume
            </Typography>
          </Button>
          <Button
            sx={{
              padding: "13px 29px",
              display: "flex",
              gap: "7px",
              alignItems: "center",
              backgroundColor: "#474559",
              borderRadius: "50px",

              "&:hover": {
                backgroundColor: "#ffc107",
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "12px",
                transition: "0.3s",
              }}
            >
              Contact Me
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "40%", padding: "15px" }}>
        <Box
          sx={{
            position: "relative",
            borderRadius: "60% 40% 34% 66% / 55% 69% 31% 45% ",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffc107",
          }}
        >
          <CardMedia
            component="img"
            image="../public/images.png"
            sx={{
              position: "absolute",
              width: "300px",
              left: "50px",
              top: "-170px",
              zIndex: "999",
              mixBlendMode: "multiply",
              objectFit: "contain",
              borderRadius: "20px",
            }}
            alt="Paella dish"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
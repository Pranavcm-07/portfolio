import { Box, Typography, CardMedia } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "500px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width={"50%"}>
        <CardMedia
          component="img"
          image="../public/images.png"
          sx={{
            // position: "absolute",
            width: "300px",
            // left: "50px",
            // top: "-170px",
            // zIndex: "999",
            mixBlendMode: "multiply",
            // objectFit: "contain",
            borderRadius: "20px",
            ml: "50px",
          }}
          alt="Paella dish"
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "600",
            margin: "10px 0",
            color: "#ffc107",
          }}
        >
          ABOUT ME
        </Typography>
        <Box
          sx={{
            margin: "20px 0",
            lineHeight: "1.5",
            wordSpacing: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "500" }}>
            Hey there, I'm Pranav, a dynamic full-stack developer driven by a
            burning passion for crafting innovative solutions. Currently
            pursuing a bachelor's degree in Electrical and Electronics
            Engineering at Sri Sivasubramaniya Nadar College of Engineering, I
            seamlessly blend my technical acumen with a relentless drive for
            excellence.
          </Typography>
          <br />
          <Typography sx={{ fontWeight: "500" }}>
            Beyond coding, I find joy in watching movies, playing football and
            cricket. Additionally, I'm an avid Rubik's Cube enthusiast.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

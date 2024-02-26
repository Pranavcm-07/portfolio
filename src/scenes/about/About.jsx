import { Box, Typography, CardMedia } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ width: "70%", height: "500px", margin: "auto" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          margin: "10px 0",
          color: "black",
          textAlign: "center",
        }}
      >
        ABOUT ME
      </Typography>
      <Box
        sx={{
          width: "80px",
          height: "5px",
          borderRadius: "50px",
          backgroundColor: "#ffc107",
          margin: "auto",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "50px",
        }}
      >
        <Box width={"50%"}>
          <CardMedia
            component="img"
            image="../public/images.png"
            sx={{
              // position: "absolute",
              width: "250px",
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
            backgroundColor: "white",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              margin: "10px 0",
              lineHeight: "1.5",
              wordSpacing: "5px",
            }}
          >
            <Typography sx={{ fontWeight: "400" }}>
              Hey there, I'm Pranav, a dynamic full-stack developer driven by a
              burning passion for crafting innovative solutions. Currently
              pursuing a bachelor's degree in Electrical and Electronics
              Engineering at Sri Sivasubramaniya Nadar College of Engineering, I
              seamlessly blend my technical acumen with a relentless drive for
              excellence.
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "400" }}>
              Beyond coding, I find joy in watching movies, playing football and
              cricket. Additionally, I'm an avid Rubik's Cube enthusiast.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

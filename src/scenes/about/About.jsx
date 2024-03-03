import { Box, Typography, CardMedia, Button } from "@mui/material";

const About = () => {
  const handleClick = () => {
    const section = document.getElementById(`Contact`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box sx={{ width: "90%", height: "auto", margin: "auto" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          margin: "10px 0",
          color: "white",
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
          mt: "10px",
          padding: "20px",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <CardMedia
            component="img"
            image="../public/7712733_3714961.svg"
            sx={{
              width: "500px",
              borderRadius: "20px",
            }}
            alt="Paella dish"
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            padding: "20px",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              margin: "10px 0",
              lineHeight: "1.5",
              wordSpacing: "5px",
              color: "white",
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
          <Button
            onClick={handleClick}
            sx={{
              padding: "10px 20px",
              display: "flex",
              gap: "7px",
              alignItems: "center",
              border: "1px solid #ffc107",
              borderRadius: "50px",
              backgroundColor: "black",

              "&:hover": {
                backgroundColor: "#ffc107",
                "& .MuiTypography-root": {
                  color: "white",
                },
              },
              mt: "50px",
            }}
          >
            <Typography
              sx={{
                color: "#ffc107",
                fontWeight: "700",
                fontSize: "12px",
                transition: "0.1s",
              }}
            >
              CONTACT ME
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

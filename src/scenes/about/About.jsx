import {
  Box,
  Typography,
  CardMedia,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const handleClick = () => {
    const section = document.getElementById(`Contact`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const isSmallTablet = useMediaQuery("(max-width:900px)");
  const isSmallMobile = useMediaQuery("(max-width:400px)");
  const isTablet = useMediaQuery("(max-width:1000px)");

  return (
    <Box sx={{ width: "90%", height: "auto", margin: "auto" }}>
      <Typography
        component={motion.p}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{
          fontSize: isSmallMobile ? "25px" : "40px",
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
          display: isSmallTablet ? "block" : "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "10px",
          padding: "20px",
          gap: "20px",
        }}
      >
        <Box
          component={motion.div}
          whileInView={{ opacity: [0, 0.5, 1], x: [-40, -20, 0] }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          sx={{
            margin: "auto",
          }}
        >
          <CardMedia
            component="img"
            image="7712733_3714961.svg"
            sx={{
              width: isSmallMobile
                ? "200px"
                : isSmallTablet
                ? "300px"
                : isTablet
                ? "400px"
                : "500px",
              borderRadius: "20px",
              margin: isSmallTablet && "auto",
            }}
            alt="Paella dish"
          />
        </Box>
        <Box
          sx={{
            width: isSmallMobile ? "100%" : isSmallTablet ? "90%" : "50%",
            padding: isSmallMobile ? "5px" : "20px",
            borderRadius: "30px",
            margin: isSmallTablet && "auto",
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
            <Typography
              component={motion.p}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              sx={{ fontWeight: "400" }}
              textAlign={isSmallMobile && "center"}
            >
              Hey there, I'm Pranav, a dynamic full-stack developer driven by a
              burning passion for crafting innovative solutions. Currently
              pursuing a bachelor's degree in Electrical and Electronics
              Engineering at Sri Sivasubramaniya Nadar College of Engineering, I
              seamlessly blend my technical acumen with a relentless drive for
              excellence.
            </Typography>
            <br />
            <Typography
              component={motion.p}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              sx={{ fontWeight: "400" }}
              textAlign={isSmallMobile && "center"}
            >
              Beyond coding, I find joy in watching movies, playing football and
              cricket. Additionally, I'm an avid Rubik's Cube enthusiast.
            </Typography>
          </Box>
          <Button
            component={motion.button}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
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
              margin: isSmallMobile && "auto",

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

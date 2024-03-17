import { Box, Button, CardMedia, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        display: "flex",
      }}
    >
      <Box sx={{ width: "60%", margin: "auto" }}>
        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            component={motion.p}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            sx={{
              fontSize: "2.8em",
              fontWeight: "700",
              color: "white",
            }}
          >
            Hey folks, I'm <span style={{ color: "#ffc107" }}>Pranav</span>
          </Typography>
          {/* <Typography></Typography> */}
        </Box>
        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            component={motion.button}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              sx={{ color: "black", fontSize: "15px", transition: "0.1s" }}
            />
            <Typography
              sx={{
                color: "black",
                fontWeight: "700",
                fontSize: "12px",
                transition: "0.1s",
              }}
            >
              Download Resume
            </Typography>
          </Button>
          <Button
            component={motion.button}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            href="https://github.com/Pranavcm-07"
            target="_blank"
            sx={{
              padding: "13px 29px",
              display: "flex",
              gap: "7px",
              alignItems: "center",
              backgroundColor: "black",
              borderRadius: "50px",
              border: "1px solid #ffc107",

              "&:hover": {
                backgroundColor: "#ffc107",
                "& .MuiTypography-root": {
                  color: "white",
                },
              },
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
              GITHUB
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "40%", padding: "15px" }}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <CardMedia
            component="img"
            image="../public/blob.svg"
            sx={{
              width: "80%",
              margin: "auto",
            }}
            alt="Paella dish"
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;

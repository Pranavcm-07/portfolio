import {
  Box,
  Button,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

const Home = () => {
  const isSmallMobile = useMediaQuery("(max-width:430px)");
  const isMobile = useMediaQuery("(max-width:750px)");
  return (
    <Box
      sx={{
        maxWidth: isMobile ? "450px" : "900px",
        margin: "auto",
        display: "flex",
        flexDirection: isMobile && "column-reverse",
        padding: isSmallMobile ? "40px" : "20px",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "60%",
          margin: "auto",
        }}
      >
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
            display: isSmallMobile ? "block" : "flex",
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
          <Link
            href="https://github.com/Pranavcm-07"
            target="_blank"
            underline="none"
          >
            <Button
              component={motion.button}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                mt: isSmallMobile && "20px",
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
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "40%",
          padding: "15px",
          margin: isMobile && "auto",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: isMobile ? 0 : 100,
            y: isMobile ? -100 : 0,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <CardMedia
            component="img"
            image="profile-avatar.svg"
            sx={{
              width: isMobile ? "60%" : "80%",
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

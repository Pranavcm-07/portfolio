import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Project from "./Project";

const Projects = () => {
  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Typography
        component={motion.p}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          color: "white",
          textAlign: "center",
          mb: "10px",
        }}
      >
        MY PROJECTS
      </Typography>
      <Box
        sx={{
          width: "80px",
          height: "5px",
          borderRadius: "50px",
          backgroundColor: "#ffc107",
          margin: "0 auto 80px",
        }}
      />
      <Project />
      <Project />
      <Project />
    </Box>
  );
};

export default Projects;

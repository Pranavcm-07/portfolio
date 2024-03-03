import { Box, Typography, Icon } from "@mui/material";
import data from "../../../data/data.json";

const Skills = () => {
  const { skills } = data;
  return (
    <Box
      sx={{
        width: "75%",
        margin: "auto",
        borderRadius: "50px",
        backgroundColor: "white",
        // border: "1px solid #ccc",
        padding: "50px",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          color: "black",
          textAlign: "center",
          mb: "10px",
        }}
      >
        MY SKILLS
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
    </Box>
  );
};

export default Skills;

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
        backgroundColor: "black",
        // border: "1px solid #ccc",
        padding: "50px",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          color: "white",
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
          margin: "0 auto 50px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "80%",
          margin: "auto",
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              padding: "10px 20px",
              borderLeft: "5px solid #ffc107",
              borderRadius: "30px",
              boxShadow: "1px 1px 10px #5d5d5d",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", color: "white" }}
            >
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;

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
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              padding: "0px 20px",
              borderRadius: "10px",
              height: "50px",
              width: "120px",
              boxShadow: "0 0 10px #ffc107",
              // backgroundColor: "#F6F5F8",
              mt: "20px",
              position: "relative",
            }}
          >
            <img
              src="../public/expressjs.png"
              style={{
                mixBlendMode: "multiply",
                width: "60px",
                transform: "translate(15%,15%)",
              }}
            />
            {/* <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "500",
                color: "ffc107",
                textAlign: "center",
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translate(-50%,70%)",
              }}
            >
              {skill}
            </Typography> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;

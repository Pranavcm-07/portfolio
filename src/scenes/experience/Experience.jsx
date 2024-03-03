import { Box, Typography } from "@mui/material";
import data from "../../../data/data.json";

const Experience = () => {
  const { experience } = data;
  return (
    <Box sx={{ margin: "auto", width: "70%", padding: "30px" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          color: "white",
          textAlign: "center",
          mb: "10px",
        }}
      >
        MY EXPERIENCE
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
          mt: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {experience.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                padding: "15px",
                borderRadius: "15px",
                border: "1px solid #aaa",
                width: "50%",
                marginLeft: index % 2 == 1 && "50%",
                borderLeft: index % 2 == 0 && "7px solid #ffc107",
                borderRight: index % 2 == 1 && "7px solid #ffc107",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontSize: "23px",
                  fontWeight: "500",
                  mb: "5px",
                }}
              >
                {item.course}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", color: "rgba(255, 193, 7,0.8)" }}
              >
                {item.timeline}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "300",
                  color: "#aaa",
                }}
              >
                {item.location}
              </Typography>
              <Typography sx={{ color: "#aaa" }}>{item.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;

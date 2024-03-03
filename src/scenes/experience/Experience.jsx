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
          color: "black",
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
          //   position: "relative",
          //   width: "auto",
          //   height: "45vh",
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
                boxShadow: "1px 1px 10px #aaa",
                width: "50%",
                // position: "absolute",
                // left: index % 2 == 0 ? "0" : "50%",
                marginLeft: index % 2 == 1 && "50%",
                borderLeft: index % 2 == 0 && "7px solid #ffc107",
                borderRight: index % 2 == 1 && "7px solid #ffc107",
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
              <Typography sx={{ fontSize: "12px", color: "rgb(90,90,90)" }}>
                {item.timeline}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "300",
                }}
              >
                {item.location}
              </Typography>
              <Typography>{item.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;

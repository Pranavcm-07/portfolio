import { Box, Button, CardMedia, Fade, Link, Typography } from "@mui/material";
import { useState } from "react";

const Projects = () => {
  const [hover, setHover] = useState(false);
  const st = [
    "React",
    "Redux",
    "Javascript",
    "MaterialUI",
    "API",
    "MongoDB",
    "NodeJS",
  ];
  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        padding: "20px",
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
        MY PROJECTS
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
          width: "80%",
          margin: "80px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#white",
            borderRadius: "10px",
            boxShadow: "1px 1px 40px #ccc",
          }}
        >
          <Box
            width="50%"
            height="300px"
            sx={{
              overflow: "hidden",
              borderRadius: "10px",
              position: "relative",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <CardMedia
              component="img"
              src="../public/so.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: ".2s ease",
                transform: hover ? "scale(1.075)" : "scale(1)",
                filter: hover && "blur(0.7rem)",
              }}
            />
            <Fade in={hover}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  gap: "30px",
                  p: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Built on the MERN stack
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    mt: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      border: "1px solid #ffc107",
                      borderRadius: "20px",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#ffc107",
                        border: "1px solid #ffc107",
                      },
                    }}
                  >
                    <Link
                      underline="none"
                      color="white"
                      href="https://connectify-socialmedia.vercel.app/"
                      target="_blank"
                    >
                      WEBSITE
                    </Link>
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      border: "1px solid #ffc107",
                      borderRadius: "20px",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#ffc107",
                        border: "1px solid #ffc107",
                      },
                    }}
                  >
                    <Link
                      underline="none"
                      color="white"
                      href="https://github.com/Pranavcm-07/socialmedia-website-frontend.git"
                      target="_blank"
                    >
                      CODE
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Box>
          <Box
            width="50%"
            height="300px"
            sx={{
              padding: "0 20px",
            }}
          >
            <Typography
              sx={{
                margin: "10px 0",
                fontSize: "25px",
                fontWeight: "500",
                color: "black",
                textAlign: "center",
              }}
            >
              CONNECTIFY
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                padding: "10px",
              }}
            >
              Connectify, a dynamic MERN stack social media website that brings
              people together in a seamless digital space.
            </Typography>
            <Box
              sx={{
                mt: "10px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: "15px",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              {st.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    padding: "1px 10px",
                    color: "black",
                    fontWeight: "500",
                    borderRadius: "20px",
                    backgroundColor: "#e9e9e9",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;

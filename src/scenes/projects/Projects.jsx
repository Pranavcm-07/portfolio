import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
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
          margin: "auto",
        }}
      />
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          width: "80%",
          margin: "80px auto",
          transition: ".2s ease",
          transform: hover ? "scale(1.02)" : "scale(1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            border: "1px solid #aaa",
            borderLeft: "5px solid #ffc107",
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
          >
            <CardMedia
              component="img"
              src="../public/so.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* <Slide in={hover} direction="up">
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
                  background:
                    "linear-gradient(rgba(0,0,0,0.3),rgb(255, 193, 7,0.5))",
                }}
              >
                <Box sx={{ position: "absolute", bottom: "40px" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #ffc107",
                      borderRadius: "20px",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        border: "1px solid #ffc107",
                      },
                      mr: "50px",
                    }}
                  >
                    <Link
                      underline="none"
                      color="#ffc107"
                      href="https://connectify-socialmedia.vercel.app/"
                      target="_blank"
                    >
                      WEBSITE
                    </Link>
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #ffc107",
                      borderRadius: "20px",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        border: "1px solid #ffc107",
                      },
                    }}
                  >
                    <Link
                      underline="none"
                      color="#ffc107"
                      href="https://github.com/Pranavcm-07/socialmedia-website-frontend.git"
                      target="_blank"
                    >
                      CODE
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Slide> */}
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
                color: "white",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <IconButton
                href="https://github.com/Pranavcm-07/socialmedia-website-frontend.git"
                target="_blank"
              >
                <CodeIcon
                  sx={{ color: "white", "&:hover": { color: "#ffc107" } }}
                />
              </IconButton>
              CONNECTIFY
              <IconButton
                href="https://connectify-socialmedia.vercel.app"
                target="_blank"
              >
                <LinkIcon
                  sx={{ color: "white", "&:hover": { color: "#ffc107" } }}
                />
              </IconButton>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                padding: "10px",
                color: "#aaa",
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
                    padding: "2px 10px",
                    color: "white",
                    fontWeight: "500",
                    borderRadius: "20px",
                    border: "1px solid #ffc107",
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

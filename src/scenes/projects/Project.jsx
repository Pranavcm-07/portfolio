import {
  Box,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Project = ({ project }) => {
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isSmallMobile = useMediaQuery("(max-width:400px)");
  const isBigMobile = useMediaQuery("(max-width:800px)");

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  return (
    <Box
      component={motion.div}
      ref={scrollRef}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      sx={{
        maxWidth: isTablet ? "100%" : "810px",
        margin: "30px auto",
        "&:hover": {
          transition: "0.25s",
          scale: "1.02",
        },
        position: "relative",
        minHeight: "max-content",
      }}
    >
      <Box
        sx={{
          display: isBigMobile ? "block" : "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          border: "1px solid #aaa",
          borderLeft: "5px solid #ffc107",
        }}
      >
        {isSmallMobile ? null : (
          <Box
            width={isBigMobile ? "100%" : "50%"}
            height="300px"
            sx={{
              overflow: "hidden",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              src={`../public/${project.image}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        )}
        <Box
          width={isBigMobile ? "100%" : "50%"}
          minHeight="300px"
          sx={{
            padding: isBigMobile ? "20px" : "0 20px",
          }}
        >
          <Typography
            sx={{
              margin: "10px 0",
              fontSize: isTablet ? "20px" : "25px",
              fontWeight: "500",
              color: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <IconButton href={project.github} target="_blank">
              <CodeIcon
                sx={{ color: "white", "&:hover": { color: "#ffc107" } }}
              />
            </IconButton>
            {project.name}
            <IconButton href={project.website} target="_blank">
              <LinkIcon
                sx={{ color: "white", "&:hover": { color: "#ffc107" } }}
              />
            </IconButton>
          </Typography>
          <Typography
            sx={{
              fontSize: isTablet ? "17px" : "20px",
              padding: "10px",
              color: "#aaa",
            }}
          >
            {project.description}
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
              mb: "10px",
            }}
          >
            {project.skills.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  padding: "2px 10px",
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "20px",
                  border: "1px solid #ffc107",
                  fontSize: isTablet && "15px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;

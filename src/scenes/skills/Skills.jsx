import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  CPPIcon,
  HTMLIcon,
  JavascriptIcon,
  MaterialUIIcon,
  MongoDBIcon,
  MysqlIcon,
  VerselIcon,
  NodeJSIcon,
  ReactJSIcon,
  ReduxJSIcon,
  BootstrapIcon,
  GitIcon,
  PostmanIcon,
  PythonIcon,
  ExpressJSIcon,
  CSSIcon,
} from "../../../public/icons/icons";
import { motion } from "framer-motion";
import ScrollBox from "../../components/Style";

import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector(".scroller_inner");
      const copy = scrollerInner.cloneNode(true);
      scroller.appendChild(copy);
    });
  }, []);
  const isMobile = useMediaQuery("(max-width:750px)");
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isSmallMobile = useMediaQuery("(max-width:400px)");
  return (
    <Box
      sx={{
        width: isTablet ? "100%" : "1000px",
        margin: "auto",
        borderRadius: "50px",
        backgroundColor: "black",
        padding: isMobile ? "50px 20px" : "50px",
      }}
    >
      <Typography
        component={motion.p}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        sx={{
          fontSize: isSmallMobile ? "25px" : "40px",
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
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <HTMLIcon width="50px" height="50px" />
          <CSSIcon />
          <JavascriptIcon />
          <ReactJSIcon />
          <NodeJSIcon />
          <ExpressJSIcon />
          <MongoDBIcon />
          <MysqlIcon />
          <GitIcon />
          <CPPIcon />
          <PythonIcon />
          <BootstrapIcon />
          <MaterialUIIcon />
          <VerselIcon />
          <ReduxJSIcon />
          <PostmanIcon />
        </Box>
      ) : (
        <>
          <Box
            className="scroller"
            sx={{
              overflow: "hidden",
              position: "relative",
              width: "90%",
              WebkitMaskImage:
                "linear-gradient(90deg,transparent,#fff 20%,#fff 80%,transparent)",
              whiteSpace: "nowrap",
              margin: "auto",
            }}
          >
            <ScrollBox className="scroller_inner">
              <HTMLIcon />
              <CSSIcon />
              <JavascriptIcon />
              <ReactJSIcon />
              <NodeJSIcon />
              <ExpressJSIcon />
              <MongoDBIcon />
              <MysqlIcon />
            </ScrollBox>
          </Box>
          <Box
            className="scroller"
            sx={{
              overflow: "hidden",
              width: "90%",
              position: "relative",
              WebkitMaskImage:
                "linear-gradient(90deg,transparent,#fff 20%,#fff 80%,transparent)",
              whiteSpace: "nowrap",
              margin: "auto",
            }}
          >
            <ScrollBox
              className="scroller_inner"
              sx={{
                animationDirection: "reverse",
              }}
            >
              <GitIcon />
              <CPPIcon />
              <PythonIcon />
              <BootstrapIcon />
              <MaterialUIIcon />
              <VerselIcon />
              <ReduxJSIcon />
              <PostmanIcon />
            </ScrollBox>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Skills;

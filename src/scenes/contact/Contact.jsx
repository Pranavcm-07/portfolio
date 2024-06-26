import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [info, setInfo] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const isFullname = Boolean(info.fullname);
  const isEmail = Boolean(info.email);
  const isMessage = Boolean(info.message);
  const isMobile = useMediaQuery("(max-width:650px)");
  const isSmallMobile = useMediaQuery("(max-width:400px)");
  const isTablet = useMediaQuery("(max-width:1000px)");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    setInfo({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });
    const data = {
      service_id: import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID,
      template_id: import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_ID,
      user_id: import.meta.env.VITE_REACT_APP_YOUR_PUBLIC_KEY,
      template_params: {
        fullname: info.fullname,
        email: info.email,
        message: info.message,
        subject: info.subject,
      },
    };
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };
  return (
    <Box
      sx={{ margin: "auto", width: isMobile ? "100%" : "70%", padding: "20px" }}
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
        CONTACT ME
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
      <Typography
        sx={{
          textAlign: "center",
          fontSize: isSmallMobile ? "15px" : "20px",
          width: isSmallMobile ? "80%" : isTablet ? "70%" : "65%",
          margin: " 20px auto",
          color: "white",
        }}
      >
        Need to reach out faster than a pizza delivery on a Friday night? Look
        no further! I'm just a click away from solving your mysteries.
      </Typography>
      <Box
        component="form"
        ref={form}
        sx={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "1fr",
          padding: isSmallMobile ? "15px" : "30px",
          border: "1px solid #aaa",
          borderRadius: "20px",
          width: isSmallMobile ? "100%" : isTablet ? "80%" : "60%",
          margin: "40px auto",
        }}
      >
        <CustomTextField
          label="Full Name"
          name="fullname"
          value={info.fullname}
          onChange={handleChange}
          sx={{
            borderRadius: "30px",
          }}
        />
        <CustomTextField
          value={info.email}
          onChange={handleChange}
          label="Email"
          name="email"
          sx={{ borderRadius: "30px" }}
        />
        <CustomTextField
          value={info.subject}
          onChange={handleChange}
          label="Subjext"
          name="subject"
          sx={{ borderRadius: "30px" }}
        />
        <CustomTextField
          value={info.message}
          onChange={handleChange}
          variant="outlined"
          label="Message"
          name="message"
          multiline
          minRows={5}
          sx={{
            borderRadius: "30px",
          }}
        />
        <Button
          sx={{
            width: "150px",
            borderRadius: "30px",
            color: "#ffc107",
            border: "1px solid #ffc107",
            "&:hover": {
              backgroundColor: "#ffc107",
              color: "white",
            },
          }}
          onClick={(e) => isEmail && isFullname && isMessage && sendEmail(e)}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;

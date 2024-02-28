import { Box, Button, TextField, Typography } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";

const Contact = () => {
  return (
    <Box sx={{ margin: "auto", width: "70%", padding: "20px" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          color: "black",
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
          fontSize: "20px",
          width: "65%",
          margin: " 20px auto",
        }}
      >
        Need to reach out faster than a pizza delivery on a Friday night? Look
        no further! I'm just a click away from solving your mysteries.
      </Typography>
      <Box
        component="form"
        sx={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "1fr",
          padding: "30px",
          boxShadow: "1px 1px 10px #aaa",
          borderRadius: "20px",
          width: "60%",
          margin: "40px auto",
        }}
      >
        <CustomTextField
          label="Full Name"
          name="fullname"
          sx={{
            borderRadius: "30px",
            "&:focus": {
              color: "#ffc107",
            },
          }}
        />
        <CustomTextField
          label="Email"
          name="email"
          sx={{ borderRadius: "30px" }}
        />
        <CustomTextField
          label="Subjext"
          name="subject"
          sx={{ borderRadius: "30px" }}
        />
        <CustomTextField
          variant="outlined"
          label="Message"
          name="message"
          multiline
          rows={5}
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
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;

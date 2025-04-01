import React from "react";
import { Grid, Card, CardContent, Typography, Container, Box } from "@mui/material";

const HowItWorks = () => {
  const steps = [
    { title: "Step 1", description: "Connect with our team to discuss your business needs. We listen to understand your requirements, challenges, and goals for the software solution." },
    { title: "Step 2", description: "We create a tailored software solution based on your business requirements. Our team designs a custom architecture and user experience that fits your needs." },
    { title: "Step 3", description: "Our skilled developers start coding, while our QA team ensures the product is fully tested for bugs, functionality, and performance." },
    { title: "Step 4", description: "We deploy the software and ensure a smooth launch. Our team provides continuous support, updates, and maintenance to guarantee optimal performance." },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "40px 0", sm: "80px 0" }, // Adjust padding for mobile and desktop
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Wrapper for Image & Steps */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" }, // Center on mobile and space-between on larger screens
            alignItems: "center",
            gap: { xs: "20px", sm: "50px" },
            flexWrap: "wrap",
          }}
        >
          {/* Left Side - Image with Absolute Title */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "40%" },
              maxWidth: "400px",
            }}
          >
            {/* Heading Positioned Over the Image */}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "5px 15px",
                borderRadius: "10px",
                zIndex: 2,
                color: "#000000",
                whiteSpace: "nowrap",
              }}
            >
              How It Works?
            </Typography>

            {/* Image */}
            <img
              src={require("../assets/Q.png")}
              alt="Q Illustration"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px", // Added rounded corners for image
              }}
            />
          </Box>

          {/* Right Side - Steps (2x2 Grid) */}
          <Box sx={{ width: { xs: "100%", sm: "55%" } }}>
            <Grid container spacing={3}>
              {steps.map((step, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      padding: "20px",
                      textAlign: "center",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        background: "linear-gradient(to right, #06beb6, #48b1bf)",
                      },
                      minHeight: "150px",
                      borderRadius: "20px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Gradient Top Bar */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "8px",
                        background: "linear-gradient(to right, #06beb6, #48b1bf)",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;

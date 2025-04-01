import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import { styled } from "@mui/system";

// Styled Container with Gradient Background
const Section = styled("section")({
  background: "linear-gradient(to bottom, #CBF3F1, #899FE0)",
  padding: "60px 0",
  textAlign: "center",
});

// Styled Card with Hover Effect
const ServiceCard = styled(Card)({
  textAlign: "center",
  padding: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)", // Enlarge on hover
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  },
});

// Features Data
const features = [
  {
    title: "UI/UX Design",
    description: "Creating visually appealing and user-friendly interfaces.",
    icon: <DesignServicesIcon sx={{ fontSize: 50, color: "#3498db" }} />,
  },
  {
    title: "Web Development",
    description: "Building scalable and responsive websites.",
    icon: <CodeIcon sx={{ fontSize: 50, color: "#2ecc71" }} />,
  },
  {
    title: "Database Management",
    description: "Optimized storage and retrieval solutions.",
    icon: <StorageIcon sx={{ fontSize: 50, color: "#e74c3c" }} />,
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "30px" }}>
        Our Services
      </Typography>

      <Container>
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent>
                  {feature.icon}
                  <Typography variant="h6" sx={{ marginTop: "10px", fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                  {hoveredIndex === index && (
                    <Typography variant="body2" sx={{ marginTop: "10px", color: "#555" }}>
                      {feature.description}
                    </Typography>
                  )}
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;

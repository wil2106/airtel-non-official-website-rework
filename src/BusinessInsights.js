import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function BusinessInsights(props) {
  return (
    <div>
      <Container>
          <Box mt={3} mb={2} fontSize="h4.fontSize">Why Airtel Business</Box>
          <Box mt={3} mb={2} fontSize="h6.fontSize" style={{color: "#E40000"}}>
            Airtel Business is a reliable partner offering its customers with matchless services that enhance their business productivity with the enormous market dynamics.
          </Box>
          <Box mt={3}>
            In Airtel Business, we deliver outstanding customer delight through unique, tailor made and high quality business solutions through innovative products and solutions.
          </Box>
          <Box my={1}>
            1. We develop, implement and support solutions
          </Box>
          <Box my={1}>
            2. We pride ourselves
          </Box>
          <Box my={1}>
            3. Prompt solution delivery and implementation
          </Box>
          <Box my={1}>
            ...
          </Box>
      </Container>
    </div>
  );
}

export default BusinessInsights;
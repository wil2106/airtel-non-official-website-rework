import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function CloudDataCenters(props) {
  return (
    <div>
        <Container>
            <Box mt={3} mb={2} fontSize="h4.fontSize">Accelerate your digital transformation</Box>
            <Box mt={3} mb={2} fontSize="h6.fontSize" style={{color: "#E40000"}}>
              Our complete end-to-end cloud and data centre solutions prepares you for your future computing and storage needs. With a footprint covering local data centres and public cloud platforms in all Airtel Africa operations, we give you the ability to create new innovative services quickly and stay ahead of your competition.
            </Box>
            <Box my={1}>
              ...
            </Box>
        </Container>
    </div>
  );
}

export default CloudDataCenters;
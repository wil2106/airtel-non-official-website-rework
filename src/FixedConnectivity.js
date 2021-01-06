import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function FixedConnectivity(props) {
  return (
    <Container>
            <Box mt={3} mb={2} fontSize="h4.fontSize">Power your business with speed, security, unrivalled coverage and reliability</Box>
            <Box mt={3} mb={2} fontSize="h6.fontSize" style={{color: "#E40000"}}>
            Our fixed connectivity solutions include SDWAN, local and international MPLS solutions, international private leased circuits (IPLC), point to point and point to multipoint solutions, corporate internet.
            </Box>
            <Box my={1}>
              ...
            </Box>
      </Container>
  );
}

export default FixedConnectivity;
import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function Carrier(props) {
  return (
    <div>
         <Container>
            <Box mt={3} mb={2} fontSize="h4.fontSize">Carrier solutions</Box>
            <Box mt={3} mb={2} fontSize="h6.fontSize" style={{color: "#E40000"}}>
              Airtel is one of the Largest Pan African Carriers
            </Box>
            <Box my={1}>
              ...
            </Box>
        </Container>
    </div>
  );
}

export default Carrier;
import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function BusinessMobility(props) {
  return (
    <div>
        <Container>
          <Box mt={3} mb={2} fontSize="h4.fontSize">Mobilise your workforce with unrivalled 4G mobile coverage and reliability</Box>
          <Box mt={3} mb={2} fontSize="h6.fontSize" style={{color: "#E40000"}}>
            Our mobile voice and data services include pure postpaid, postpaid hybrid, data plans, customized voice and data bundle plans, broadband internet services over 3G and 4G infrastructure and device plans. Our mobility product portfolio also includes managed and hosted services such as bulk SMS, bulk top up, corporate ring back tones and machine to machine (M2M)/telemetry asset management and tracking services.
          </Box>
          <Box my={1}>
            ...
          </Box>
      </Container>
    </div>
  );
}

export default BusinessMobility;
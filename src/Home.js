import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import "./home.css";
import vid from "./video.mp4";

import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  return (
    <div>
      <video className="video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <Box mt={3} mb={2} mx={2} fontSize="h4.fontSize" style={{color: "#E40000"}}>Solution categories</Box>
      <div class="container">
        <div class="col" id="SME_Go_Digital" onClick={()=>history.push("/sme-go-digital")}>
          <div class="overlay">
            <div class="cont">
              <div class="title">SME Go Digital</div>
              <div class="desc">Grow your Business with Airtel Africa</div>
            </div>
          </div>
        </div>
        <div class="col" id="Fixed_connectivity" onClick={()=>history.push("/fixed-connectivity")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Fixed connectivity</div>
              <div class="desc">Power your business with speed, security, unrivalled coverage and reliability</div>
            </div>
          </div>
        </div>
        <div class="col" id="Business_mobility" onClick={()=>history.push("/business-mobility")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Business mobility</div>
              <div class="desc">Mobilise your workforce with unrivalled 4G mobile coverage and reliability</div>
            </div>
          </div>
        </div>
        <div class="col" id="Convergence_Collaboration" onClick={()=>history.push("/convergence-collaboration")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Convergence & Collaboration</div>
              <div class="desc">Create a seamless communication experience for your business</div>
            </div>
          </div>
        </div>
        <div class="col" id="Cloud_Data_centers" onClick={()=>history.push("/cloud-data-centers")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Cloud & Data centers</div>
              <div class="desc">Accelerate your digital transformation</div>
            </div>
          </div>
        </div>
        <div class="col" id="Carrier" onClick={()=>history.push("/carrier")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Carrier</div>
              <div class="desc"></div>
            </div>
          </div>
        </div>
        <div class="col" id="Airtel_Money_for_Business" onClick={()=>history.push("/airtel-money-for-business")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Airtel Money for Business</div>
              <div class="desc"></div>
            </div>
          </div>
        </div>
        <div class="col" id="Business_Insights" onClick={()=>history.push("/business-insights")}>
          <div class="overlay">
            <div class="cont">
            <div class="title">Business Insights</div>
              <div class="desc">Why Airtel Business</div>
            </div>
          </div>
        </div>
      </div>
      <Box mt={3} mb={2}></Box>
    </div>
  );
}

export default Home;

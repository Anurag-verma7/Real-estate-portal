import React from "react";
import { Jumbotron, Button,Container,Row,Col,Image } from "react-bootstrap";
import { IoLogoInstagram,IoLogoLinkedin,IoLogoTwitter,IoLogoYoutube} from "react-icons/io";
export default function Footer() {
  return (
    <div>
      <Jumbotron style={{marginBottom:"0px"}}>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems : "center"}}>
         <div style={{display:"flex",justifyContent:"space-around",width:"180px",fontSize:"30px"}}>
             <IoLogoInstagram />
             <IoLogoLinkedin />
             <IoLogoTwitter />
             <IoLogoYoutube />
         </div>
        
         <hr style={{display:"block",width:"90%"}}></hr>
         <div>
             <p style={{fontSize:"15px"}}>&copy; Copyright HomeCluster. All Rights Reserved.</p>
         </div>
        </div>
      </Jumbotron>
    </div>
  );
}

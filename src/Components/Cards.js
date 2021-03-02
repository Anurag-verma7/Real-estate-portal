import React from "react";
import { Card,Button } from "react-bootstrap";
export default function Cardss() {
  return (
    <div
      style={{
          width:"80%",
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin:"100px auto",
      }}
    >
      <Card style={{ width: "18rem" ,borderRadius: "150px 150px 20px 20px"}}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" style={{borderRadius:"50%"}}/>
        <Card.Body>
          <Card.Title>Aditya</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" ,borderRadius: "150px 150px 20px 20px"}}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" style={{borderRadius:"50%"}}/>
        <Card.Body>
          <Card.Title>Dishant</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" ,borderRadius: "150px 150px 20px 20px"}}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" style={{borderRadius:"50%"}}/>
        <Card.Body>
          <Card.Title>Akhil</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

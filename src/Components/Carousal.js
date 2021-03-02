import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function Carousals() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img style={{height:"700px",objectFit:"cover"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=999&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{}}>Reasonable price</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"700px",objectFit:"cover"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Wide coverage</h3>
      <p>find a wide variety </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"700px",objectFit:"cover"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{}}>Everything at a place</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h4 style={{margin:"110px",fontSize:"35px",fontFamily:"sans-serif"}}>what customers say about us</h4>
</div>
    
    )
}

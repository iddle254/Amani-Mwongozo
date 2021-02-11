import React from "react";
import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Testimonial() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBjaGFyaXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGFmcmljYW4lMjBjaGFyaXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1500823050524-096fd13fa287?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGFmcmljYW4lMjBjaGFyaXR5fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Testimonial;

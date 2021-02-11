import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import partner from "../../assets/UN.png";
import TypographyComponent from "../typography.component";

function Partners() {
  return (
    <div>
      <TypographyComponent
        variant="h4"
        marked="center"
        align="center"
        component="h2"
      >
        Our partners
      </TypographyComponent>

      <Container>
        <Row>
          <Col>
            <Image src={partner} roundedCircle />
          </Col>
          <Col>
            <Image src={partner} roundedCircle />
          </Col>
          <Col>
            <Image src={partner} roundedCircle />
          </Col>
          {/* <Col xs={6} md={4}>
      <Image src={partner} thumbnail />
    </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Partners;

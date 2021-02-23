import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import partner from "../../assets/UN.png";
import TypographyComponent from "../typography.component";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  conatinerItem: {
    margin: "15px",
  },
});
function Partners({ classes }) {
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
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "spaceBetween",
          }}
        >
          <div className={classes.conatinerItem}>
            <Image src={partner} roundedCircle />
          </div>

          <div className={classes.conatinerItem}>
            <Image src={partner} roundedCircle />
          </div>

          <div className={classes.conatinerItem}>
            <Image src={partner} roundedCircle />
          </div>
        </div>

        {/* <Col xs={6} md={4}>
            <Image src={partner} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src={partner} roundedCircle />
          </Col> */}
        {/* <Col xs={6} md={4}>
      <Image src={partner} thumbnail />
    </Col> */}
      </Container>
    </div>
  );
}

export default withStyles(styles)(Partners);

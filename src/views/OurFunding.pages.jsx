import React from "react";
import Parallax from "../components/Parallax";
import cover from "../assets/cover.jpg";
import styles from "../assets/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../components/GridContainer";
import GridItem from "../components/GridItem";
import Partners from "../components/our-funding/Partners.component";

const useStyles = makeStyles(styles);

function OurFunding() {
  const classes = useStyles();
  return (
    <div>
      {/* Funding
            Patnerships */}
      <Parallax filter image={cover}>
        <div className={classes.container}>
          <GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Thinking of contributing</h1>
              <h4>
                A little help now can contribute to someone else's future.
              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="/our-portfolio"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Checkout our portfolio
              </Button> */}
            </GridItem>
            <Partners />
          </GridItem>
        </div>
      </Parallax>
    </div>
  );
}

export default OurFunding;

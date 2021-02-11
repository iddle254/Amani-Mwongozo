import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import TypographyComponent from "./typography.component";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

function CausesComponent(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1507427254987-7be33d0321d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGFmcmljYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Child welfare",
      width: "40%",
    },
    {
      url:
        "https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGFmcmljYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Education",
      width: "20%",
    },
    {
      url:
        "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Girl child empowerment",
      width: "40%",
    },
    {
      url:
        "https://images.unsplash.com/photo-1579296440601-efe78a19fa91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZnVnZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Human rights violations",
      width: "38%",
    },
    {
      url: "https://ied.eu/wp-content/uploads/2018/11/refugees.jpg",
      title: "Refugee affairs",
      width: "38%",
    },
    {
      url:
        "https://images.unsplash.com/photo-1542365294386-a938c66551cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxkb3JldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Ahletics",
      width: "24%",
    },
    // {
    //   url:
    //     "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80",
    //   title: "SokoMarket ads",
    //   width: "40%",
    // },
    // {
    //   url:
    //     "https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80",
    //   title: "Men's online",
    //   width: "20%",
    // },
    // {
    //   url:
    //     "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
    //   title: "Book exchange",
    //   width: "40%",
    // },
  ];
  return (
    <Container className={classes.root} component="section">
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <TypographyComponent
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </TypographyComponent>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

CausesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CausesComponent);

import { Box, Grid, Grow, Slide, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { useLottie } from "lottie-react";
import heroAnimation from "../../assets/animations/hero_animation.json";

import styles from "./styles";

import Button from "../Button/Button";

const Hero = () => {
  const style = {
    height: 400,
  };

  const options = {
    animationData: heroAnimation,
    loop: false,
  };

  const { View } = useLottie(options, style);
  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid container sx={styles.container}>
          <Grid item xs="auto" sx={styles.mainHeadingContainer}>
            <Slide direction="left" in={true} timeout={1000}>
              <Typography textAlign={"center"} variant="h2">
                The most Advanced Robotics
              </Typography>
            </Slide>
            <Grow in={true} timeout={3000}>
              <Typography textAlign={"center"} variant="h5">
                Lemon Robotics is a leading automation and robotics solutions
                provider
              </Typography>
            </Grow>
          </Grid>
          <Grid
            xs="auto"
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              top: "-6rem",
            }}
          >
            {View}
            <Button>Explore with us</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;

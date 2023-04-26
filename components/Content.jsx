import React from "react";
import { Grid, Text } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";

import { Slogan } from "./Slogan";
import { Brands } from "./Brands";
import { ReviewCards } from "./ReviewCards";
import { CustomSlider } from "./CustomSlider";
import { Footer } from "./Footer";

import "../styles/content.scss";

export const Content = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  return (
    <>
      <Grid css={{ position: "absolute", zIndex: -1 }}>{/* logo */}</Grid>
      <Slogan />
      <Brands />
      <ReviewCards />
      {isDesktopOrLaptop && (
        <Grid justify="center" css={{ padding: 150 }} xs={12} lg={12} md={12}>
          <Text css={{ fontWeight: "bold", textAlign: "center" }} size={70}>
            “Rate My Creative Saved our business.”
          </Text>
        </Grid>
      )}
      {isTabletOrMobile && (
        <Grid
          css={{ padding: "50px 0 " }}
          justify="center"
          xs={12}
          lg={12}
          md={12}
        >
          <Text
            css={{ fontWeight: "bold", textAlign: "center" }}
            size={isDesktopOrLaptop ? 70 : 40}
          >
            “Rate My Creative Saved our business.”
          </Text>
        </Grid>
      )}
      <CustomSlider />
      <Footer />
    </>
  );
};

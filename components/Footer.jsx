/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Grid, Image, Text } from "@nextui-org/react";

export const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  return (
    <Grid
      justify="space-between"
      css={{
        padding: 16,
        backgroundColor: "black",
      }}
      xs={12}
      lg={12}
      md={12}
      alignItems="center"
    >
      <Grid xs={4}>
        <Link
          style={{ paddingRight: 12 }}
          target="_blank"
          to="https://www.facebook.com/people/Rate-My-Creative-AI/100090980975272/"
        >
          <Image
            width={isDesktopOrLaptop ? 35 : 20}
            height={isDesktopOrLaptop ? 35 : 20}
            src="https://www.ratemycreative.ai/static/img/icon-awesome-facebook-1@1x.png"
            alt="Default Image"
            objectFit="contain"
          />
        </Link>
        <Link style={{ paddingRight: 12 }} to="/">
          <Image
            width={isDesktopOrLaptop ? 35 : 20}
            height={isDesktopOrLaptop ? 35 : 20}
            src="https://www.ratemycreative.ai/static/img/icon-awesome-instagram-1-1x-png@1x.png"
            alt="Default Image"
            objectFit="contain"
          />
        </Link>
        <Link style={{ paddingRight: 12 }} to="/">
          <Image
            width={isDesktopOrLaptop ? 35 : 20}
            height={isDesktopOrLaptop ? 35 : 20}
            src="https://www.ratemycreative.ai/static/img/icon-awesome-twitter-square-1@1x.png"
            alt="Default Image"
            objectFit="contain"
          />
        </Link>
        <Link style={{ paddingRight: 12 }} to="/">
          <Image
            width={isDesktopOrLaptop ? 35 : 20}
            height={isDesktopOrLaptop ? 35 : 20}
            src="https://www.ratemycreative.ai/static/img/icon-awesome-linkedin-1@1x.png"
            alt="Default Image"
            objectFit="contain"
          />
        </Link>
      </Grid>
      <Grid justify="center" xs={4}>
        <Text
          css={isTabletOrMobile && { paddingLeft: 10, textAlign: "center" }}
          size={isTabletOrMobile && 10}
          color="#808080"
        >
          © 2023 All rights are reserved by RollingAdz
        </Text>
      </Grid>
      <Grid justify="flex-end" xs={4}>
        <Link to="/termsofservice">
          <Text
            css={isTabletOrMobile && { textAlign: "center" }}
            size={isTabletOrMobile && 10}
            color="#808080"
          >
            Terms of Service
          </Text>
        </Link>
        <Link to="/privacypolicy">
          <Text
            size={isTabletOrMobile && 10}
            css={
              isDesktopOrLaptop ? { paddingLeft: 24 } : { textAlign: "center" }
            }
            color="#808080"
          >
            Privacy Policy
          </Text>
        </Link>
      </Grid>
    </Grid>
  );
};

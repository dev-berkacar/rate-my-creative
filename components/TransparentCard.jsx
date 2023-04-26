import React from "react";
import { Grid, Image, Text } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";

export const TransparentCard = ({ title, img, description }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <Grid
        css={{
          marginRight: 24,
          paddingTop: isTabletOrMobile && 50,
        }}
        xs={12}
      >
        <Image
          width={120}
          height={120}
          src={img}
          alt="Image"
          objectFit="contain"
        />
      </Grid>
      <Grid css={{ padding: "24px 0" }} xs={12}>
        <Text
          color="white"
          size={32}
          css={{ fontWeight: "bold", margin: "0 24px" }}
        >
          {title}
        </Text>
      </Grid>
      <Grid xs={12}>
        <Text
          color="white"
          size={26}
          css={{ fontWeight: "normal", margin: "0 24px" }}
        >
          {description}
        </Text>
      </Grid>
    </>
  );
};

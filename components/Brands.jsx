import React from "react";
import { Grid, Image, Text } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";

export const Brands = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          {/* brands */}
          <Grid
            xs={12}
            alignItems="center"
            css={{
              backgroundColor: "white",
              marginTop: "20px",
              zIndex: 2,
            }}
          >
            <Text
              css={{
                fontWeight: 900,
                lineHeight: "94px",
                letterSpacing: 0,
                opacity: 0.55,
                whiteSpace: "nowrap",
              }}
              size={60}
            >
              Featured In
            </Text>
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-1@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-2@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-3@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-4@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
          </Grid>
        </>
      )}
      {isTabletOrMobile && (
        <>
          {/* brands */}
          <Grid
            xs={12}
            alignItems="center"
            justify="center"
            css={{
              backgroundColor: "white",
              marginTop: "20%",
              flexWrap: "wrap",
              zIndex: 2,
            }}
          >
            <Text
              css={{
                fontWeight: 900,
                lineHeight: "64px",
                letterSpacing: 0,
                opacity: 0.55,
                display: "flex",
              }}
              size={45}
            >
              Featured In
            </Text>
            <Image
              width={250}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-1@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-2@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-3@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Image
              width={300}
              height={250}
              src="https://www.ratemycreative.ai/static/img/image-4@1x.webp"
              alt="Default Image"
              objectFit="scale-down"
            />
          </Grid>
        </>
      )}
    </>
  );
};

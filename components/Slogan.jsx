import React from "react";
import { Grid, Image, Text, Button } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { Scale } from "@mui/icons-material";

export const Slogan = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  return (
    <>
      {isDesktopOrLaptop && (
        <Grid
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* left text */}
          <Grid
            css={{ padding: "200px 100px 100px 0" }}
            alignItems="center"
            direction="column"
            lg={6}
            md={6}
            xs={12}
          >
            <Grid xs={12}>
              <Text
                css={{ textAlign: "center", fontWeight: 900 }}
                size={80}
                color="white"
              >
                AI Powered Creative Rating System!
              </Text>
            </Grid>
            <Grid css={{ paddingTop: 40 }} xs={12}>
              <Text css={{ textAlign: "center" }} size={40} color="white">
                Find out if your ad is effective before spending money on
                advertising
              </Text>
            </Grid>
            <Grid css={{ paddingTop: 40 }} xs={12}>
              <Button
                auto
                rounded
                css={{
                  padding: 60,
                  backgroundColor: "#ffd700",
                  color: "Black",
                  fontWeight: "$extrabold",
                  fontSize: "$xl",
                }}
              >
                <Text size={30}>BECOME A MEMBER</Text>
              </Button>
            </Grid>
          </Grid>
          {/* Right Image */}
          <Grid
            xs={12}
            md={3}
            lg={3}
            css={{
              marginTop: 180,
              backgroundColor: "white",
              borderRadius: 40,
              height: 550,
              width: "35%",
              padding: 50,
            }}
          >
            <Image
              width={500}
              height={450}
              src="https://www.ratemycreative.ai/static/img/pngaaa-com-2612973@1x.webp"
              alt="Default Image"
              objectFit="contain"
            />
          </Grid>
        </Grid>
      )}
      {isTabletOrMobile && (
        <>
          {/* left text */}

          <Grid
            css={{ padding: 50 }}
            alignItems="center"
            direction="column"
            lg={6}
            md={6}
            xs={12}
          >
            <Grid xs={12}>
              <Text
                css={{ textAlign: "center" }}
                weight="bold"
                h1
                size={40}
                color="white"
              >
                AI Powered Creative Rating System!
              </Text>
            </Grid>
            <Grid css={{ paddingTop: 20 }} xs={12}>
              <Text css={{ textAlign: "center" }} size={25} color="white">
                Find out if your ad is effective before spending money on
                advertising
              </Text>
            </Grid>
            <Grid css={{ paddingTop: 20 }} xs={12}>
              <Button
                auto
                rounded
                css={{
                  padding: 40,
                  backgroundColor: "#ffd700",
                  color: "Black",
                  fontWeight: "$extrabold",
                }}
              >
                <Text size={20}>BECOME A MEMBER</Text>
              </Button>
            </Grid>
          </Grid>
          {/* Right Image */}
          <Grid
            css={{
              backgroundColor: "white",
              maxWidth: 400,
            }}
          >
            <Image
              width={500}
              height={450}
              src="https://www.ratemycreative.ai/static/img/pngaaa-com-2612973@1x.webp"
              alt="Default Image"
              objectFit="contain"
            />
          </Grid>
        </>
      )}
    </>
  );
};

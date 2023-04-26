import React, { useState } from "react";
import { Grid } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";

import { TransparentCard } from "./TransparentCard.jsx";

export const ReviewCards = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Grid
        css={{
          backgroundColor: isTabletOrMobile && "black",
          zIndex: 2,
          padding: 50,
          display: "flex",
          flexWrap: isTabletOrMobile && "wrap",
        }}
        xs={12}
      >
        <Grid
          alignItems="center"
          justify="center"
          direction="column"
          xs={12}
          lg={3}
          md={3}
        >
          <TransparentCard
            description={
              "Millions of designs analyzed across all platforms. Posted on customer interactions and conversion success."
            }
            title={"Design Review"}
            img={
              "https://www.ratemycreative.ai/static/img/icon-material-rate-review@1x.webp"
            }
          />
        </Grid>
        <Grid
          alignItems="center"
          justify="center"
          direction="column"
          xs={12}
          lg={3}
          md={3}
        >
          <TransparentCard
            description={
              "Save money, no more A/ B testing! Analyze your creative effectiveness before spending media dollars!"
            }
            title={"Effectiveness Analysis"}
            img={
              "https://www.ratemycreative.ai/static/img/icon-material-assignment-turned-in@1x.webp"
            }
          />
        </Grid>
        <Grid
          alignItems="center"
          justify="center"
          direction="column"
          xs={12}
          lg={3}
          md={3}
        >
          <TransparentCard
            description={
              "Receive corrective feedback and suggestions to better each creative score."
            }
            title={"Expert Help"}
            img={
              "https://www.ratemycreative.ai/static/img/icon-awesome-chalkboard-teacher@1x.webp"
            }
          />
        </Grid>
        <Grid
          alignItems="center"
          justify="center"
          direction="column"
          xs={12}
          lg={3}
          md={3}
        >
          <TransparentCard
            description={
              "Our patented Ai technology is used to give a precise analysis of the artwork submitted."
            }
            title={"Ai Technology"}
            img={
              "https://www.ratemycreative.ai/static/img/icon-material-computer@1x.webp"
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

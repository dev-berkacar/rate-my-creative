/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Button } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CustomNavbar from "./CustomNavbar";

export const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  const [changeIcon, setChangeIcon] = useState(false);
  return (
    <>
      <Grid.Container
        justify="space-between"
        css={{ backgroundColor: "#fdd700" }}
      >
        <Grid css={{ flexBasis: "0 !important" }} xs={6}>
          <Link to="/">
            <Image
              width={320}
              src="https://www.ratemycreative.ai/static/img/star2-1@1x.png"
              alt="Default Image"
              objectFit="contain"
            />
          </Link>
        </Grid>
        {isDesktopOrLaptop && (
          <Grid
            css={{ paddingRight: "$10" }}
            alignItems="center"
            justify="flex-end"
            xs={6}
          >
            {/* <Button
              auto
              css={{
                backgroundColor: "#fdd700",
                color: "Black",
                fontWeight: "$extrabold",
                fontSize: "$xl",
                "&:hover": {
                  backgroundColor: "#fdd700",
                  color: "Black",
                  fontWeight: "$extrabold",
                },
              }}
            >
              Home
            </Button> */}
            <Link to="/signin">
              <Button
                auto
                css={{
                  backgroundColor: "#fdd700",
                  color: "Black",
                  fontWeight: "$extrabold",
                  fontSize: "$xl",
                  "&:hover": {
                    backgroundColor: "#fdd700",
                    color: "Black",
                    fontWeight: "$extrabold",
                  },
                }}
              >
                Sign in
              </Button>
            </Link>
            <Button
              auto
              css={{
                backgroundColor: "Black",
                color: "White",
                fontWeight: "$extrabold",
                fontSize: "$xl",
              }}
            >
              BECOME A MEMBER
            </Button>
          </Grid>
        )}
        {isTabletOrMobile && (
          <Grid alignItems="center">
            {!changeIcon && (
              <MenuIcon
                sx={{
                  marginTop: "12px",
                  marginRight: "12px",
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setChangeIcon(true);
                }}
                fontSize="large"
              />
            )}
            {changeIcon && (
              <CloseIcon
                sx={{
                  marginTop: "12px",
                  marginRight: "12px",
                  color: "black",
                  cursor: "pointer",
                }}
                fontSize="large"
                onClick={() => {
                  setChangeIcon(false);
                }}
              />
            )}
          </Grid>
        )}
      </Grid.Container>
      {changeIcon && <CustomNavbar />}
    </>
  );
};

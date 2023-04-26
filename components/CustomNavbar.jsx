import { Grid, Image, Button, Navbar, Link } from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <Grid.Container
      gap={1}
      css={{
        backgroundColor: "Black",
        position: "absolute",
        top: 60,
        zIndex: 1,
      }}
    >
      <Grid xs={12} justify="center">
        {/* <Button
          size={"lg"}
          css={{
            fontWeight: "$bold",
            backgroundColor: "Black",
          }}
          xs={12}
        >
          Home
        </Button> */}
      </Grid>
      <Grid xs={12} justify="center">
        <Link to="/signin">
          <Button
            size={"lg"}
            css={{ fontWeight: "$bold", backgroundColor: "Black" }}
            xs={12}
          >
            Sign in
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} justify="center">
        <Button
          size={"lg"}
          css={{
            fontWeight: "$bold",
            backgroundColor: "#ffd700",
          }}
          xs={12}
          auto
        >
          BECOME A MEMBER
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default CustomNavbar;

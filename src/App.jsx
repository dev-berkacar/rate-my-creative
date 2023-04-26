import React from "react";
import Home from "../pages/Home";
import { Header } from "../components/Header";
import { Grid } from "@nextui-org/react";

function App() {
  return (
    <Grid.Container
      css={{
        backgroundSize: "100% 65%",
        height: "100% !important",
        backgroundRepeat: "no-repeat",
      }}
      className="image"
    >
      <Header />
      <Home />
    </Grid.Container>
  );
}

export default App;

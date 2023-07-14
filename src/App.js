import React from "react";
import Header from "./components/Header";
import { Container, Snackbar } from "@mui/material";

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
    </Container>
  );
}

export default App;

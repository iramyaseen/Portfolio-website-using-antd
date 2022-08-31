import React from "react";
import "./App.css";
import "./index.scss";
import Footeer from "./Components/Pages/FooterPage";
import NavbarsList from "./Components/Navbars";
import styled from "styled-components";
const Container = styled.div``;

const App = () => (
  <Container style={{ background: "#2d2d2d" }}>
    <Container>
      <NavbarsList />
    </Container>
    <Container
      style={{
        background: "#414141",
        borderTopLeftRadius: "35px",
        borderTopRightRadius: "35px",
        fontSize: "20px",
        paddingTop: "60px",
        paddingBottom: "10px",
        marginTop: "120px",
      }}
    >
      <Footeer
        footerStyle={{
          marginLeft: "100px",
          marginRight: "100px",
        }}
      />
    </Container>
  </Container>
);

export default App;

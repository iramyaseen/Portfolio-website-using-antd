import React from "react";
import { Col, Row, Typography } from "antd";
import forApp from "../images/appDesign.png";
import foBrower from "../images/brower.png";
import forWeb from "../images/Web.png";
import styled from "styled-components";
const { Title } = Typography;
const Container = styled.div``;
function PortfolioCard() {
  return (
    <>
      <Row style={{ marginTop: "100px" }}>
        <Title level={2} style={{ color: "white", paddingBottom: "20px" }}>
          Portfolio
        </Title>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
        className="responsive_text center center2"
      >
        <Container>
          <Col className="Portfolio_image">
            <img
              src={forApp}
              width="250px"
              height="200px"
              style={{ borderRadius: "10px" }}
              alt="forApp"
            />
            <Col>
              {" "}
              <Title style={{ color: "white", marginTop: "15px" }} level={2}>
                App Design
              </Title>
            </Col>
          </Col>
        </Container>
        <Container>
          <Col className="Portfolio_image">
            <img
              src={foBrower}
              width="250px"
              height="200px"
              style={{ borderRadius: "10px" }}
              alt="forBrower"
            />

            <Col>
              {" "}
              <Title style={{ color: "white", marginTop: "15px" }} level={2}>
                Browse Service
              </Title>
            </Col>
          </Col>
        </Container>
        <Container>
          <Col className="Portfolio_image">
            <img
              src={forWeb}
              width="250px"
              height="200px"
              style={{ borderRadius: "10px" }}
              alt="forWeb"
            />

            <Col>
              {" "}
              <Title style={{ color: "white", marginTop: "15px" }} level={2}>
                Web Design
              </Title>
            </Col>
          </Col>
        </Container>
      </Row>
    </>
  );
}

export default PortfolioCard;

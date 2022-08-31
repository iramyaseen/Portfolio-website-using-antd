import { Row, Col, Typography } from "antd";
import React from "react";
import PortfolioCard from "../PortfolioCard";
import SeeMore from "./SeeMorePage";
const { Title } = Typography;
function Descriptions() {
  return (
    <div
      className="mobile_btn"
      style={{ marginLeft: "100px", marginRight: "100px" }}
    >
      <Row style={{ marginTop: "60px" }}>
        <Col>
          <Title level={2} className="title_color ">
            Massimo Vignelli:
          </Title>
        </Col>
        <Col
          style={{
            color: "#FFFFFF",
            fontSize: "32px",
          }}
          className="responsive_text text"
        >
          “The life of a designer is a constant struggle. Fight against
          ugliness. Just like a doctor fights a disease. For us, visual disease
          is what we have around us, and what we are trying to do is, one way or
          another, cure the environment through design.”
        </Col>
      </Row>
      <PortfolioCard />
      <SeeMore />
    </div>
  );
}

export default Descriptions;

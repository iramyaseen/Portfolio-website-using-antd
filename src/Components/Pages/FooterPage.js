import React from "react";
import { Col, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
function Footeer({ footerStyle }) {
  return (
    <div style={footerStyle} className="main_footer">
      <Row className="footer" justify="space-between" align="middle">
        <Row className="footer">
          <Col style={{ textAlign: "center", width: "200px" }}>
            <Paragraph style={{ color: "white" }}>
              Based in Maidstone, United Kingdom
            </Paragraph>
            <Paragraph style={{ color: "white" }}>+44 7360 784977</Paragraph>
            <Paragraph style={{ color: "white" }}>
              illia_frunza@ukr.net
            </Paragraph>
          </Col>
        </Row>
        {/*  */}
        <Row className="footer">
          <Col>
            <Col>
              <Title level={3} style={{ color: "white" }}>
                Portfolio
              </Title>
            </Col>
            <Paragraph style={{ color: "#C9C9C9" }}>Dribbble</Paragraph>
            <Paragraph style={{ color: "#C9C9C9" }}>Behance</Paragraph>
            <Paragraph style={{ color: "#C9C9C9" }}>Figma Files</Paragraph>
          </Col>
        </Row>
        {/*  */}
        <Row className="footer">
          <Col>
            <Col>
              <Title level={3} style={{ color: "white" }}>
                Social media
              </Title>
            </Col>
            <Paragraph style={{ color: "#C9C9C9" }}>LinkedIn</Paragraph>
            <Paragraph style={{ color: "#C9C9C9" }}>Facebook</Paragraph>
            <Paragraph style={{ color: "#C9C9C9" }}>Instagram</Paragraph>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Footeer;

import React from "react";
import { ReactComponent as Arrow } from "../SVG Icons/Arrow.svg";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { PhoneFilled, PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
const { Title } = Typography;

const Container = styled.div``;

function SeeMore() {
  return (
    <Container>
      <Row
        style={{
          marginLeft: "70px",
          marginTop: "60px",
          marginBottom: "100px",
        }}
        className="responsive_text"
        id="portfolio-links-container"
      >
        <Container className="margin_top">
          <Col>
            <Title className="see_more" style={{ color: "#C9C9C9" }} level={3}>
              See more
            </Title>
          </Col>
        </Container>
        <span
          style={{
            marginLeft: "auto",
            display: "flex",
            flexWrap: "wrap",
          }}
          className=" center"
        >
          <Container
            style={{
              marginRight: "50px",
            }}
          >
            <Col>
              <Button
                className="responsive_hire_me_btn2 btn_margin btn"
                style={{
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  background: "#414141",
                  boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                  borderRadius: "6px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "174px",
                }}
                size="large"
              >
                Dribbble
                <Arrow />
              </Button>
            </Col>
          </Container>
          <Container style={{ marginRight: "50px" }}>
            <Col>
              <Button
                className="responsive_hire_me_btn2 btn_margin btn active"
                size="large"
                style={{
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  background: "#414141",
                  boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                  borderRadius: "6px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "174px",
                }}
              >
                Behance
                <Arrow />
              </Button>
            </Col>
          </Container>
          <Container>
            <Col>
              <Button
                className="responsive_hire_me_btn2 btn "
                size="large"
                style={{
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  background: "#414141",
                  boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                  borderRadius: "6px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "190px",
                }}
              >
                Figma files
                <Arrow />
              </Button>
            </Col>
          </Container>
        </span>
      </Row>

      <Row className="margin__top">
        <Title style={{ color: "white", paddingBottom: "20px" }} level={2}>
          Reference
        </Title>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="responsive_text center center2"
      >
        <Card
          className="responsive_card"
          style={{
            color: "#FFFFFF",
            background: "#414141",
            border: "none",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <p style={{ color: "#c9c9c9" }}>CEO of IT2School</p>
          <Title
            style={{
              color: "#ffffff",
              paddingBottom: "10px",
              fontSize: "24px",
            }}
            level={3}
          >
            Valentina Gorodetki
          </Title>
          <Col style={{ display: "flex" }}>
            <Button
              size="large"
              style={{
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                background: "#414141",
                boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                borderRadius: "6px",
                fontSize: "20px",
                width: "204px",
                height: "55px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: "10px",
              }}
              className="btn"
            >
              LinkedIn
              <Arrow />
            </Button>
            <Button
              style={{
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                background: "#7996fc",
                boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                borderRadius: "6px",
                fontSize: "20px",
                marginTop: "3px",
                height: "50px",
                width: "65px",
              }}
            >
              <PhoneFilled style={{ transform: "rotate(90deg)" }} />
            </Button>
          </Col>
        </Card>
        <Card
          className="responsive_card"
          style={{
            color: "#FFFFFF",
            background: "#414141",
            border: "none",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <p style={{ color: "#c9c9c9" }}>CEO and Founder of Atom Space</p>
          <Title
            level={3}
            style={{
              color: "#ffffff",
              paddingBottom: "10px",
              fontSize: "24px",
            }}
          >
            Ann Derevyanko
          </Title>
          <Col style={{ display: "flex" }}>
            <Button
              size="large"
              style={{
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                background: "#414141",
                boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                borderRadius: "6px",
                fontSize: "20px",
                width: "204px",
                height: "55px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginRight: "10px",
              }}
            >
              Telegram
              <Arrow />
            </Button>
            <Button
              style={{
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                background: "#7996fc",
                boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
                borderRadius: "6px",
                fontSize: "20px",
                marginTop: "3px",
                height: "50px",
                width: "65px",
              }}
            >
              <PhoneFilled style={{ transform: "rotate(90deg)" }} />
            </Button>
          </Col>
        </Card>
        <Space>
          <Card
            style={{
              color: "#FFFFFF",
              background: "#414141",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Col
              style={{
                color: "white",
                textAlign: "center",
                height: "150px",
                width: "250px",
                paddingTop: "31px",
              }}
            >
              <PlusOutlined style={{ fontSize: "35px", color: "#C9C9C9" }} />
              <Title style={{ color: "#C9C9C9", paddingTop: "20px" }} level={2}>
                You can be next
              </Title>
            </Col>
          </Card>
        </Space>
      </Row>
    </Container>
  );
}

export default SeeMore;

import React from "react";
import image from "../../images/Group 1.png";
import styled from "styled-components";
import { Col, Row, Space } from "antd";
import ProfileCol from "../ProfileCol";
import Descriptions from "./DescriptionPage.js";
import { changeActiveButton } from "../../Utils/button";
const Container = styled.div``;

function Profile() {
  window.onload = () => changeActiveButton();
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        className="bg_color"
      >
        <Space className="block">
          <Container>
            <Col flex={3} className="responsive_prfile_iamge">
              <img src={image} alt="profile" min-width="100px" />
            </Col>
          </Container>
          <Container>
            <ProfileCol />
          </Container>
        </Space>
      </Row>
      <Descriptions />
    </Container>
  );
}

export default Profile;

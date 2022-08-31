import React from "react";
import { Button, Col, Row } from "antd";
import { ReactComponent as Arrow } from "../Components/SVG Icons/Arrow.svg";
import { ReactComponent as Telegram } from "../Components/SVG Icons/Telegram.svg";

const heirMeBtn = {
  border: "none",
  outline: "none",
  color: "#FFFFFF",
  background: "#414141",
  boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
  borderRadius: "6px",
  marginRight: "46px",
  fontSize: "20px",
  width: "174px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "5px",
  paddingBottom: "5px",
  marginBottom: "20px",
};
function ProfileRow() {
  return (
    <div className="mobile_btn margin left" id="profile-btns">
      <Row>
        <Col>
          <Button
            size="large"
            style={heirMeBtn}
            className="responsive_hire_me_btn btn active"
          >
            Hire me
            <Arrow />
          </Button>
        </Col>
        <Col>
          <Button
            className="responsive_profile_btn btn"
            size="large"
            style={{
              border: "none",
              outline: "none",
              color: "#FFFFFF",
              background: "#414141",
              boxShadow: "0px 0px 15px rgba(121, 150, 252, 0.15)",
              borderRadius: "6px",
              marginRight: "46px",
              fontSize: "20px",
              width: "174px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "5px",
              paddingBottom: "5px",
              marginBottom: "20px",
            }}
          >
            Portfolio
            <Arrow />
          </Button>
        </Col>
      </Row>
      <Row>
        <Button
          className="responsive_main_btn btn"
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
            width: "397px",
          }}
        >
          <Telegram className="responsive_icons" />
          Get in touch by Instagram
          <Arrow className="responsive_icons" />
        </Button>
      </Row>
    </div>
  );
}

export default ProfileRow;

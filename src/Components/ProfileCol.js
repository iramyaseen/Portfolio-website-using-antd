import React from "react";
import { Col, Row, Typography } from "antd";
import ProfileRow from "./ProfileRow";
const { Title } = Typography;

function ProfileCol() {
  return (
    <Col flex={3}>
      <Row className="left">
        <Title level={1} className="textStyle">
          Hello I'm a{" "}
          <span>
            UX/UI Designer <span>Illia Frunza</span>
          </span>{" "}
        </Title>
      </Row>
      <ProfileRow />
    </Col>
  );
}

export default ProfileCol;

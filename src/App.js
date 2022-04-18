import React from "react";
import { List, Divider, Typography, Row, Col, Space, Card } from "antd";
import "./App.less";
import { data } from "./data";
import Layout from "antd/lib/layout/layout";

const { Title } = Typography;
const style = {
  background: "white",
  padding: "8px 0",
};

function SpaceVertical({ data }) {
  const { title, link, summary } = data;
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex", width: "100vh" }}
    >
      <a alt="Card" href={link}>
        <Card type="inner" title={title} size="default" hoverable={true}>
          <p>{summary}</p>
        </Card>
      </a>
    </Space>
  );
}

const App = () => (
  <>
    <Layout>
      <Row>
        <Col xs={0} sm={4}></Col>
        <Col xs={24} sm={16}>
          <Divider orientation="center">
            <Title>Help Desk</Title>
          </Divider>
          <List
            bordered
            style={style}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <SpaceVertical data={item} />
              </List.Item>
            )}
          />
        </Col>
        <Col xs={0} sm={4}></Col>
      </Row>
    </Layout>
  </>
);

export default App;

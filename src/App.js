import React from "react";
import { List, Divider, Typography, Row, Col, Space, Card } from "antd";
import "./App.less";
import { data } from "./data";
import Layout from "antd/lib/layout/layout";

const { Title } = Typography;

function SpaceVertical({ data }) {
  const { title, link, summary } = data;
  return (
    <Space direction="vertical" size="middle" style={{ width: "100vh" }}>
      <a alt="Card" href={link}>
        <Card type="inner" title={title} hoverable={true}>
          {summary}
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
        </Col>
      </Row>
      <Row>
        <Col xs={0} sm={4}></Col>
        <Col xs={24} sm={20}>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <SpaceVertical data={item} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Layout>
  </>
);

export default App;

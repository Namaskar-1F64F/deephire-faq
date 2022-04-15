import React from "react";
import { List, Divider, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./App.less";
import { data } from "./data";
import Layout from "antd/lib/layout/layout";

const { Title } = Typography;
const style = {
  background: "white",
  padding: "8px 0",
};

const App = () => (
  <>
    <Layout>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Divider orientation="center">
            <Title>Help Desk</Title>
          </Divider>
          <List
            bordered
            style={style}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <div>
                  <Title level={3}>{item.title}</Title>
                  <nav
                    style={{
                      borderBottom: "solid 1px",
                      paddingBottom: "1rem",
                    }}
                  >
                    <Link to={item.link}>{item.title}</Link>{" "}
                  </nav>
                </div>
                {item.summary}
              </List.Item>
            )}
          />
        </Col>
        <Col span={4}></Col>
      </Row>
    </Layout>
  </>
);

export default App;

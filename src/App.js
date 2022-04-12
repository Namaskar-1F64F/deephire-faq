import React from "react";
import { Layout, PageHeader, List, Divider, Typography } from "antd";
import { Link } from "react-router-dom";
import "./App.less";
import { data } from "./data";

const { Footer, Content } = Layout;
const { Title } = Typography;
const style = {
  background: "white",
  padding: "8px 0",
};

const App = () => (
  <Layout>
    <PageHeader />
    <Content>
      <Divider orientation="center">
        <Title>Frequently Asked Questions</Title>
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
      />{" "}
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default App;

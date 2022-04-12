import React from "react";
import { Layout, PageHeader, List, Divider } from "antd";
import { Link } from "react-router-dom";
import "./App.less";
import { data } from "./data";

const { Footer, Content } = Layout;
const style = {
  background: "white",
  padding: "8px 0",
};

const App = () => (
  <Layout>
    <PageHeader />
    <Content>
      <Divider orientation="center">Frequently Asked Questions</Divider>
      <List
        bordered
        style={style}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div>
              <h1>{item.title}</h1>
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

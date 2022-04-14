import React from "react";
import { List, Divider, Typography } from "antd";
import { Link } from "react-router-dom";
import "./App.less";
import { data } from "./data";

const { Title } = Typography;
const style = {
  background: "white",
  padding: "8px 0",
};

const App = () => (
  <>
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
  </>
);

export default App;

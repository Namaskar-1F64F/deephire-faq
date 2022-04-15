import React from "react";
import { Layout, Menu } from 'antd';
// import { HomeOutlined, VideoCameraAddOutlined, CopyFilled, DesktopOutlined, IssuesCloseOutlined, CloudOutlined, QuestionCircleOutlined, DatabaseOutlined  } from '@ant-design/icons';

const { Sider } = Layout;


export class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                Home
              </Menu.Item>
              <Menu.Item key="2">
                One Way Video Interview Instructions
              </Menu.Item>
              <Menu.Item key="3">
                Video Interview Cheat Sheet
              </Menu.Item>
              <Menu.Item key="4">
                Supported Browsers
              </Menu.Item>
              <Menu.Item key="5">
                Resolving Interview Errors
              </Menu.Item>
              <Menu.Item key="6">
                How to Get Network Test Results
              </Menu.Item>
              <Menu.Item key="7">
                Frequently Asked Questions
              </Menu.Item>
              <Menu.Item key="8">
                Sample Interview Questions
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
    );
    }
}
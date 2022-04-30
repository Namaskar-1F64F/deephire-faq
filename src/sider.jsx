import React from "react";
import { Layout, Menu } from 'antd';
import { HomeOutlined, VideoCameraAddOutlined, CopyFilled, DesktopOutlined, IssuesCloseOutlined, CloudOutlined, QuestionCircleOutlined, DatabaseOutlined } from '@ant-design/icons';

const { Sider } = Layout;


export class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          style={{
            overflow: 'auto',
            position: 'fixed',
            left: 0,
          }}
          collapsible collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <a target="_blank" rel="noopener noreferrer" href="/">
                Home
              </a>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraAddOutlined />}>
              <a target="_blank" rel="noopener noreferrer" href="/instructionsOneWayInterview">
                One Way Video Interview Instructions
              </a>
            </Menu.Item>
            <Menu.Item key="3" icon={<CopyFilled />}>
              <a target="_blank" rel="noopener noreferrer" href="/videoInterviewCheatSheet">
                Video Interview Cheat Sheet
              </a>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <a target="_blank" rel="noopener noreferrer" href="/supportedBrowsers">
                Supported Browsers
              </a>
            </Menu.Item>
            <Menu.Item key="5" icon={<IssuesCloseOutlined />}>
              <a target="_blank" rel="noopener noreferrer" href="/videoInterviewErrors">
                Resolving Interview Errors
              </a>
            </Menu.Item>
            <Menu.Item key="6" icon={<CloudOutlined />}>
              <a target="_blank" rel="noopener noreferrer" href="/networkTestResults">
                How to Get Network Test Results
              </a>
            </Menu.Item>
            <Menu.Item key="7" icon={<QuestionCircleOutlined />}>
              <a target="_blank" rel="noopener noreferrer" href="/frequentlyAskedQuestions">
                Frequently Asked Questions
              </a>
            </Menu.Item>

          </Menu>
        </Sider>
      </Layout>
    );
  }
}
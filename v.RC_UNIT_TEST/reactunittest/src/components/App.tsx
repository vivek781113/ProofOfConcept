import React from 'react';
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu, Card } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Login from "./Login/Login";
import { useState } from "react";


const { Header, Content, Footer, Sider } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
              </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
              </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
              </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
            </Content>
      </Layout>
    </Layout>
  );
}

export default App;

{/* <Card title="Login" bordered={true} style={{ width: 300 }}>
    <Login />
  </Card> */}
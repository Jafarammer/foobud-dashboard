import React from 'react'
import { Layout } from "antd";
import {Outlet} from 'react-router-dom'
import AppHeader from './AppHeader';
const { Content } = Layout;

function MainLayout() {
    
  return (
    <Layout>
        <AppHeader/>
        <Content
        style={{
          padding: '0px',
          backgroundColor: 'white',
          minHeight: '93vh'
        }}
        >
        <Outlet/>
      </Content>
    </Layout>
  )
}

export default MainLayout
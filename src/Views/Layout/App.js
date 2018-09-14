import React, { Component } from 'react'
import './App.css'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import BlogHeader from './NavBar'

const { Header, Content, Footer, Sider } = Layout
class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <Layout>
          <Header className="App-header">
            <BlogHeader />
          </Header>
          <Content className="App-Content" style={{ height: '100%', minHeight: '1000px' }}>
            {renderRoutes(this.props.route.routes)}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Personal Blog ©2018 Created by Paul Chou</Footer>
        </Layout>
      </div>
    )
  }
}

export default App

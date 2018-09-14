import React, { Component } from 'react'
import { Icon, Menu, Row, Col } from 'antd'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'

const SubMenu = Menu.SubMenu

class BlogHeader extends React.Component {
  state = {
    current: 'home'
  }
  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <Row>
        <Col span={4} className="header-col-4">
          <span className="header-title">周昂的博客</span>
        </Col>
        <Col span={16} className="header-col-18">
          <Menu
            className="header-menu"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Link to="/">
                <Icon type="home" />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="archive">
							<Link to="/resume">
                <Icon type="folder" />
                归档
              </Link>
            </Menu.Item>
            <Menu.Item key="collection">
              <Link to="/blogs">
								<Icon type="star-o" />
                收藏
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">
                <Icon type="user" />
                关于
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4} className="header-col-4">
          <Login />
        </Col>
      </Row>
    )
  }
}

export default BlogHeader

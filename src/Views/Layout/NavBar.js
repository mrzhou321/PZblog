import React, { Component } from 'react'
import { Icon, Menu, Row, Col } from 'antd'
import './NavBar.css'

const SubMenu = Menu.SubMenu;

class BlogHeader extends React.Component {
	state = {
		current: 'home'
	}
	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	}
	render () {
		return (
		<Row>
      <Col span={6}>周昂的博客</Col>
      <Col span={12}>
			   	<Menu
					 className="header-menu"
					onClick={this.handleClick}
					selectedKeys={[this.state.current]}
					mode="horizontal"
				>
					<Menu.Item key="home">
						<Icon type="home" />首页
					</Menu.Item>
					<Menu.Item key="archive">
						<Icon type="folder" />归档
						</Menu.Item>
					<Menu.Item key="collection">
						<Icon type="star-o" />收藏
						</Menu.Item>
					<Menu.Item key="about">
						<Icon type="user" />关于
						</Menu.Item>
				</Menu>
			</Col>
			<Col span={6}>col-12</Col>
    </Row>
		)
	}
}

export default BlogHeader

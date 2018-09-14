import React from 'react'
import { List, Avatar, Icon, Row, Col, Card } from 'antd'

const { Meta } = Card
const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: 'http://ant.design',
		title: `ant design part ${i}`,
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	});
}

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
)
class Home extends React.Component {
  render() {
	return (
		<Row>
			<Col span={18}>
				<List
					className='home-list'
					itemLayout="vertical"
					size="large"
					bordered
					pagination={{
						onChange: (page) => {
							console.log(page);
						},
						pageSize: 3,
					}}
					dataSource={listData}
					footer={<div><b>ant design</b> footer part</div>}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
							extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
						>
							<List.Item.Meta
								avatar={<Avatar src={item.avatar} />}
								title={<a href={item.href}>{item.title}</a>}
								description={item.description}
							/>
							{item.content}
						</List.Item>
					)}
				/>
			</Col>
			<Col span={2}></Col>
			<Col span={4}>
				<Card
					hoverable
					cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				>
					<Meta
						title="Europe Street beat"
						description="www.instagram.com"
					/>
				</Card>
			</Col>
		</Row>
	)
  }
}

export default Home

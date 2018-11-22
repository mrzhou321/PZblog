import React from 'react'
import {List, Avatar, Icon, Row, Col, Card, Tag} from 'antd'
import {Link} from 'react-router-dom'
import './index.css'

const {Meta} = Card
const listData = []
for (let i = 0; i < 23; i++) {
    listData.push({
        id: 100 + i,
        createdAt: '2018-09-18',
        title: `ant design part ${i}`,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        comCount: 20,
        tags: ['笔试', 'JavaScript'],
        ArchiveName: 'react'
    })
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
)
const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9']

function TagsView(data) {
    console.log(data)
    const tags = data.data.tags
    const Views = tags.map((tag, index) => (
        <Tag color={colors[index]} key={index}>
            {tag}
        </Tag>
    ))
    return
        ;
    <div>
        <Views/>
    </div>
}

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col span={18}>
                    <List
                        className="home-list"
                        itemLayout="vertical"
                        size="large"
                        bordered
                        pagination={{
                            onChange: page => {
                                console.log(page)
                            },
                            pageSize: 3
                        }}
                        dataSource={listData}
                        footer={
                            <div>
                                <b>ant design</b> footer part
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText type="star-o" text={item.comCount}/>,
                                    <div>
                                        {item.tags.map((tag, index) => (
                                            <Tag color={colors[index]} key={index}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </div>,
                                    <IconText type="message" text={item.ArchiveName}/>
                                ]}
                                extra={<span>{item.createdAt}</span>}
                            >
                                <List.Item.Meta avatar={<Avatar src={item.avatar}/>} title={<span>{item.title}</span>}/>
                                <Link to={'/article/' + item.id}>{item.description}</Link>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={2}/>
                <Col span={4} className="home-sider">
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Home

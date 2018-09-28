import React from 'react'
import ReactMarkDown from 'react-markdown'
import './Detail.css'

const input = '# This is a header\n\nAnd this is a paragraph'
class Blog extends React.Component {
  render() {
    return (
      <div className="article-detail-container">
        <p>测试文章详情</p>
        <ReactMarkDown source={input} />
      </div>
    )
  }
}

export default Blog

import React from 'react'
import { Form, Icon, Input, Button, Modal, Checkbox } from 'antd'
import './login.css'

const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
class HorizontalLoginForm extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible })
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }
    return (
      <div className="login-view">
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          登录
        </Button>
        <Modal
          title="登录"
          centered
          okText="登录"
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <Form layout="horizontal" onSubmit={this.handleSubmit} className="login-form">
            <FormItem
              label="用户名"
              {...formItemLayout}
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
            </FormItem>
            <FormItem
              label="密码"
              {...formItemLayout}
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Button style={{ marginLeft: '10px' }} onClick={() => this.setModal2Visible(true)}>
          注册
        </Button>
        <Modal
          title="注册"
          centered
          okText="注册"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <Form layout="horizontal" onSubmit={this.handleSubmit} className="login-form">
            <FormItem
              label="用户名"
              {...formItemLayout}
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
            </FormItem>
            <FormItem
              label="密码"
              {...formItemLayout}
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                placeholder="请输入密码"
                />
              )}
            </FormItem>
            <FormItem
              label="确认密码"
              {...formItemLayout}
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请再次输入密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                placeholder="请再次输入密码"
                />
              )}
            </FormItem>
            <FormItem
              label="邮箱"
              {...formItemLayout}
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入邮箱!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                placeholder="请输入邮箱"
                />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm)
export default WrappedHorizontalLoginForm


import React from 'react'
import { Form, Icon, Input, Button, Modal } from 'antd'
import './login.css'

const FormItem = Form.Item;

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  }

  setModal1Visible (modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible (modal2Visible) {
    this.setState({ modal2Visible });
  }
  componentDidMount () {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className='login-view'>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
            登录
        </Button>
        <Modal
          title="登录"
          centered
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Button style={{marginLeft: '10px'}} onClick={() => this.setModal2Visible(true)}>
          注册
        </Button>
        <Modal
          title="注册"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm)
export default WrappedHorizontalLoginForm


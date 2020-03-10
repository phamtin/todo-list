import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../redux/auth/auth.action';
import { Form, Input, Button, Row } from 'antd';
import './login.scss';

const Login = ({ onSignin }) => {
  const layout = {
    wrapperCol: {
      span: 24,
    },
  };

  const onFinish = values => onSignin(values.username, values.password);

  return (
    <div className="login">
      <h2>Welcome</h2>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Input your username!',
            },
          ]}
        >
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Input your password!',
            },
          ]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Row type="flex" style={{ justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignin: (email, pasword) => dispatch(auth(email, pasword)),
});

export default connect(null, mapDispatchToProps)(Login);

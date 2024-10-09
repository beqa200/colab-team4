import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const onFinish = (values: LoginFormValues) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {" "}
      {/* Full height container */}
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{
          maxWidth: 360,
          width: "100%",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            {
              type: "email",
              message: "The input is not a valid Email!",
            },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|co|io|info|biz)$/, // Adjust allowed TLDs
              message: "Please input a valid email format!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password must be at least 6 characters!" }, // Minimum length
            { max: 20, message: "Password cannot exceed 20 characters!" }, // Maximum length
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

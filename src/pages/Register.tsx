import React, { useState } from "react";
// import type { CascaderProps } from "antd";
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface RegisterFormValues {
  email: string;
  password: string;
  confirm: string;
  username: string;
  phone: string; // This will include the prefix
  website: string;
  gender: string;
  agreement: boolean; // Checkbox
}

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (
    values: RegisterFormValues
  ) => {
    console.log(
      "Received values of form: ",
      values
    );
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="995">995</Option>{" "}
        {/* Georgia */}
        <Option value="86">+86</Option>{" "}
        {/* China */}
        <Option value="1">+1</Option>{" "}
        {/* USA/Canada */}
        <Option value="44">+44</Option> {/* UK */}
        <Option value="49">+49</Option>{" "}
        {/* Germany */}
        <Option value="91">+91</Option>{" "}
        {/* India */}
      </Select>
    </Form.Item>
  );

  const [
    autoCompleteResult,
    setAutoCompleteResult,
  ] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map(
          (domain) => `${value}${domain}`
        )
      );
    }
  };

  const websiteOptions = autoCompleteResult.map(
    (website) => ({
      label: website,
      value: website,
    })
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }} // Add this line
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message:
              "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message:
              "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message:
              "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (
                !value ||
                getFieldValue("password") ===
                  value
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(
                  "The new password that you entered do not match!"
                )
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message:
              "Please input your username!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message:
              "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: "Please input website!",
          },
        ]}
      >
        <AutoComplete
          options={websiteOptions}
          onChange={onWebsiteChange}
          placeholder="website"
        >
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "Should accept agreement"
                    )
                  ),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;

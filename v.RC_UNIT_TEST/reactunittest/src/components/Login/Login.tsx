import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
// import axios from "axios";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

interface LoginVM {
  userName: string;
  password: string;
}

const Login: React.FC = () => {
  const defaultLoginVM: LoginVM = {
    userName: "",
    password: "",
  };
  const [loginVm, setLoginVm] = useState<LoginVM>(defaultLoginVM);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

//   const f = async () => {
//     const res = await fetch("https://reqres.in/api/login");
//     const json = await res.json();
//     setUsers(json.data);
//   };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          value={loginVm.userName}
          onChange={(e) => setLoginVm({ ...loginVm, userName: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          value={loginVm.password}
          onChange={(e) => setLoginVm({ ...loginVm, password: e.target.value })}
        />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          disabled={Object.values(loginVm).some(
            (vm) => vm === null || vm === ""
          )}
          type="primary"
          htmlType="submit"
          onClick={() => {
            console.log(loginVm);
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

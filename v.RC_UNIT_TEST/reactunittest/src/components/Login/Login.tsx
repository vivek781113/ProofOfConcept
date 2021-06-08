import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { http } from "../../services/http";

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
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const defaultLoginVM: LoginVM = {
    email: "",
    password: "",
  };
  const [loginVm, setLoginVm] = useState<LoginVM>(defaultLoginVM);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onLogin = async () => {
    const loginResponse = await http.post("login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    console.log(loginResponse);
  };
  // useEffect(() => {
  //   onLogin();
  // }, []);

  return (
    <Form
      {...layout}
      name="loginform"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          value={loginVm.email}
          onChange={(e) => setLoginVm({ ...loginVm, email: e.target.value })}
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
            onLogin();
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

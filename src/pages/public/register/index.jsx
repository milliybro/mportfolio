import { Form, Input, message } from "antd";
import { request } from "../../../server";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const RegisterPage = () => {
  const navigate = useNavigate();
  const login = async (values) => {
    try {
      const { data } = await request.post("/auth/register", values);
      console.log(data);
      message.success("You have successfully registered")
      navigate("/dashboard");
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  return (
    <section className="register">
      <div className="container">
        <Form
          className="register-form"
          name="register"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={login}
          autoComplete="off"
        >
          <Form.Item>
            <h2 className="register__title">Sign Up</h2>
          </Form.Item>
          <Form.Item
            label="First name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please fill!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please fill!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please fill!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please fill!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please fill!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className="btn-container"
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <button className="submit-btn" type="submit">
              Sign Up
            </button>
          </Form.Item>
          <div>
            <div className="register__subinfo">
              <p>Have an account ? </p>
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default RegisterPage;
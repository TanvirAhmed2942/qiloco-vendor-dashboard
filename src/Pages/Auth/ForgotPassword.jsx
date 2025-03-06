import { Button, Form, Input, ConfigProvider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    navigate(`/auth/verify-otp?email=${values?.email}`);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-[25px] text-white font-semibold mb-6">
          Forgot Password
        </h1>
        <p className="w-[90%] text-[#C0C7CA] mx-auto text-base">
          Enter your email below to reset your password
        </p>
      </div>

      <ConfigProvider
        theme={{
          token: {
            colorText: "white",
          },
        }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<p className="text-base text-white font-normal">Email</p>}
            name="email"
            id="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              style={{
                height: 45,
                // border: "1px solid #d9d9d9",
                border: "none",
                outline: "none",
                boxShadow: "none",
                background: "#18191b",
              }}
            />
          </Form.Item>

          <Form.Item>
            <button
              htmlType="submit"
              type="submit"
              style={{
                width: "100%",
                height: 45,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",

                marginTop: 20,
              }}
              className="flex items-center justify-center bg-quilocoD hover:bg-quilocoD/90 rounded-lg"
            >
              Send Code
            </button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default ForgotPassword;

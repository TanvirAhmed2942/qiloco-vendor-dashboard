import React from "react";
import man from "../../../assets/quiloco/man.png";
import { FaFeather } from "react-icons/fa6";
import { Button, ConfigProvider, Form, Input } from "antd";
import { HiMiniPencil } from "react-icons/hi2";
function Profile() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultActiveColor: "#ffffff",
              defaultActiveBorderColor: "#a11d26 ",
              defaultActiveBg: "#a11d26 ",
              defaultHoverBg: "#a11d26 ",
              defaultHoverColor: "#ffffff",
            },
          },
        }}
      >
        <div className="bg-quilocoP w-[50%] min-h-72 flex flex-col justify-start items-center px-4 rounded-lg">
          <div className="relative mt-6 flex flex-col items-center justify-center">
            <img
              src={man}
              width={120}
              height={120}
              className="border border-slate-500 rounded-full "
            />
            <button>
              <FaFeather
                size={30}
                className="text-quilocoD absolute top-16 left-28 rounded-full bg-black p-1"
              />
            </button>
            <h3 className="text-slate-50 text-xl mt-3">Samuel Jackson</h3>
          </div>
          <div className="w-full flex justify-end">
            <Button
              icon={<HiMiniPencil size={20} className="text-white" />}
              className="bg-quilocoD/80 border-none text-white min-w-20 min-h-8 text-xs rounded-lg"
            >
              Edit Profile
            </Button>
          </div>
          <ProfileDetails />
        </div>
      </ConfigProvider>
    </>
  );
}

export default Profile;

const ProfileDetails = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultActiveColor: "#ffffff",
            defaultActiveBorderColor: "#a11d26 ",
            defaultActiveBg: "#a11d26 ",
            defaultHoverBg: "#a11d26 ",
            defaultHoverColor: "#ffffff",
          },
          Form: {
            labelColor: "#efefef",
          },
          Select: {
            selectorBg: "black",
            activeOutlineColor: "grey",
            optionSelectedBg: "grey",
            multipleItemBorderColor: "grey",
            activeBorderColor: "grey",
            hoverBorderColor: "grey",
          },
          Input: {
            hoverBg: "black",
          },
        },
      }}
    >
      <Form layout="vertical" className="w-full">
        <div className="flex justify-between gap-2 w-full ">
          <Form.Item label="Name" className="w-full">
            <Input
              placeholder="Enter your name"
              className="bg-black border-none h-12"
            />
          </Form.Item>
          <Form.Item label="Email" className="w-full">
            <Input
              placeholder="Enter your email"
              className="bg-black border-none h-12"
            />
          </Form.Item>
        </div>
        <div className="flex justify-between gap-2 w-full 0">
          <Form.Item label="Phone" className="w-full">
            <Input
              placeholder="Enter your phone number"
              className="bg-black border-none h-12"
            />
          </Form.Item>
          <Form.Item label="Password" className="w-full">
            <Input.Password
              placeholder="Enter Password"
              className="bg-black border-none h-12"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            block
            className="bg-quilocoD/80 border-none text-white min-w-20 min-h-10 text-xs rounded-lg"
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

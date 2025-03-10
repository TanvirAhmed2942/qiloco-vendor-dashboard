import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, ConfigProvider } from "antd";
import UploadComponent from "./UploadComponent";

function AddProductModal({ isModalOpen, setIsModalOpen }) {
  const [form] = Form.useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store uploaded images

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Form Data:", { ...values, images: uploadedFiles }); // Include images in form data
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#232323",
            headerBg: "#232323",
            titleColor: "#ffffff",
            titleFontSize: 24,
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
            colorBgBase: "black",
            colorBgContainer: "black",
            colorBgBaseHover: "black",
            activeBg: "black",
            colorBorder: "transparent",
            colorPrimaryBorder: "transparent",
            boxShadow: "none",
          },
        },
      }}
    >
      <Modal
        title="Add Product Details"
        open={isModalOpen}
        onOk={handleOk}
        width={1000}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col"
          style={{ padding: 5, marginBlockStart: 15 }}
          onFinish={onFinish}
        >
          {/* Two Sections Side by Side */}
          <div className="flex gap-4">
            {/* Left Section */}
            <div className="w-1/2 bg-transparent  rounded-md">
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: "Product Name required!" }]}
              >
                <Input
                  placeholder="Enter your product Name"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>

              {/* <Form.Item
                label="Filter"
                name="filter"
                rules={[{ required: true, message: "Filter required!" }]}
              >
                <Input
                  placeholder="High"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item> */}

              <Form.Item
                label="Potency"
                name="productPotency"
                rules={[{ required: true, message: "Potency required!" }]}
              >
                <Input
                  placeholder="Enter Product Potency"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>

              <Form.Item
                label="Genetics"
                name="productGenetics"
                rules={[{ required: true, message: "Genetics required!" }]}
              >
                <Input
                  placeholder="Enter Product Genetics"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>

              {/* <Form.Item
                name="filterMood"
                label="Filter by mood [Tag]"
                rules={[
                  {
                    required: true,
                    message: "Please select Tags",
                    type: "array",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="[Tag]">
                  <Select.Option value="Chill">Chill</Select.Option>
                  <Select.Option value="Soothing">Soothing</Select.Option>
                  <Select.Option value="Euphoric">Euphoric</Select.Option>
                  <Select.Option value="Creative">Creative</Select.Option>
                  <Select.Option value="Happy">Happy</Select.Option>
                  <Select.Option value="Sad">Sad</Select.Option>
                  <Select.Option value="Medium">Medium</Select.Option>
                </Select>
              </Form.Item> */}

              <Form.Item
                label="Origin"
                name="productOrigin"
                rules={[
                  { required: true, message: "Product Origin required!" },
                ]}
              >
                <Input
                  placeholder="Enter your product Origin"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>

              <Form.Item
                label="Type"
                name="productType"
                rules={[{ required: true, message: "Product Type required!" }]}
              >
                <Input
                  placeholder="Enter your product Type"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>

              <Form.Item label="Scent" name="productScent">
                <Input
                  placeholder="Enter your product Scent"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>
            </div>

            {/* Right Section (Upload) */}
            <div className="w-1/2 flex flex-col ">
              <Form.Item
                label="Product Price"
                name="productPrice"
                rules={[{ required: true, message: "Product Price required!" }]}
              >
                <Input
                  placeholder="Enter your product Price"
                  className="bg-black border-none h-12 text-slate-300"
                />
              </Form.Item>
              <Form.Item
                label="Product Descriptions"
                name="productDescription"
                rules={[
                  {
                    required: true,
                    message: "Product Description required!",
                  },
                ]}
              >
                <Input.TextArea
                  style={{
                    resize: "none",
                    height: "175px",
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                  }} // Ensures it is non-resizable
                  placeholder="Write your product Description"
                  className="border-none text-slate-300"
                />
              </Form.Item>

              <Form.Item
                label="Product Gallery"
                name="productImage"
                rules={[
                  {
                    required: true,
                    message: "Product Image required!",
                  },
                ]}
              >
                <UploadComponent onFileUpload={setUploadedFiles} />
              </Form.Item>
            </div>

            {/* Receive uploaded images */}
          </div>

          {/* Full-Width Submit Button */}
          <Form.Item className="">
            <button
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-quilocoD hover:bg-quilocoD/90 text-white text-[18px] font-medium rounded-lg "
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

export default AddProductModal;

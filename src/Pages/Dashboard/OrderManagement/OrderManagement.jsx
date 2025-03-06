import React, { useState } from "react";
import { Table, Avatar, ConfigProvider } from "antd";
import { FiPlusCircle } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import AddProductModal from "./ConfirmDeliveryModal";
function OrderManagement() {
  const dataSource = rawData.map((item) => ({
    ...item,
    serial: `#${item.serial}`,
  }));
  const [selected, setSelected] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = rawData
    .filter((item) => selected === "All" || item.filter === selected)
    .map((item) => ({
      ...item,
      serial: `#${item.serial}`,
    }));

  const showModal = () => {
    setIsModalOpen(true);
  };
  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Avatar shape="square" size="default" src={record.pic} />
          <span>{record.productname}</span>
        </div>
      ),
    },
    {
      title: "Filter",
      dataIndex: "filter",
      key: "filter",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Filter by mood",
      dataIndex: "filtermood",
      key: "filtermood",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <button className="hover:text-[#a11d26]" onClick={showModal}>
          <IoEye size={24} />
        </button>
      ),
    },
  ];

  return (
    <div className="px-3 py-4">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#575858",
              headerSplitColor: "none",
              headerColor: "white",
              borderColor: "#A3A3A3",
              colorBgContainer: "#3a3a3a",
              rowHoverBg: "#4a4a4a",
              colorText: "white",
            },
          },
        }}
      >
        <div className="custom-table">
          <Table
            dataSource={filteredData}
            columns={columns}
            pagination={true}

            // rowClassName={() => "bg-gray-700 text-white"}
          />
        </div>
        <AddProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </ConfigProvider>
    </div>
  );
}

export default OrderManagement;

const rawData = [
  {
    key: "1",
    serial: "001",
    productname: "Wireless Mouse",
    useremail: "mike@example.com",
    filter: "Vice City",
    size: "Medium",
    filtermood: "Work",
    price: "$25.99",
    description: "A high-precision wireless mouse with ergonomic design.",
  },
  {
    key: "2",
    serial: "002",
    productname: "Mechanical Keyboard",
    useremail: "john@example.com",
    filter: "Zkittles",
    size: "Full-size",
    filtermood: "Gaming",
    price: "$79.99",
    description: "A mechanical keyboard with RGB backlight and fast response.",
  },
  {
    key: "3",
    serial: "003",
    productname: "Mechanical Keyboard",
    useremail: "john@example.com",
    filter: "Zkittles",
    size: "Full-size",
    filtermood: "Gaming",
    price: "$79.99",
    description: "A mechanical keyboard with RGB backlight and fast response.",
  },
  {
    key: "4",
    serial: "004",
    productname: "Mechanical Keyboard",
    useremail: "john@example.com",
    filter: "Vice City",
    size: "Full-size",
    filtermood: "Gaming",
    price: "$79.99",
    description: "A mechanical keyboard with RGB backlight and fast response.",
  },
];

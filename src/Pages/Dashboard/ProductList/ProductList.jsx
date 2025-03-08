import React, { useState } from "react";
import { Table, Avatar, ConfigProvider, Input } from "antd";
import { FiPlusCircle } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import AddProductModal from "./AddProductModal";
import { SearchOutlined } from "@ant-design/icons";

function ProductList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  // Extract searchable fields from columns
  const searchableFields = columns.map((col) => col.dataIndex);

  // Function to filter data based on searchTerm across table columns only
  const filteredData = rawData.filter((item) =>
    searchableFields.some((field) => {
      if (!item[field]) return false; // Skip if field is empty

      const fieldValue = item[field].toString().toLowerCase();
      const query = searchTerm.toLowerCase();

      // Special case for serial number (since we prefix with #)
      if (field === "serial") {
        return fieldValue.includes(query.replace("#", "")); // Match even if user types without #
      }

      return fieldValue.includes(query);
    })
  );

  const dataSource = filteredData.map((item) => ({
    ...item,
    serial: `#${item.serial}`, // Ensure consistent formatting
  }));

  return (
    <div className="px-3 py-4">
      <div className="text-white flex justify-between mb-4">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorBgBase: "black",
                colorBgContainer: "black",
                colorBgBaseHover: "black",
                activeBg: "black",
                colorBorder: "transparent",
                colorPrimaryBorder: "transparent",
                boxShadow: "none",
              },
              Button: {
                defaultHoverBorderColor: "#a01d25",
              },
            },
          }}
        >
          <Input
            placeholder="Search here..."
            className="w-1/3 bg-black border-none outline-none text-sm text-slate-300"
            prefix={<SearchOutlined className="text-[#5e5e5e] text-lg pl-4" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </ConfigProvider>
        <button
          className="h-12 flex items-center justify-center gap-4 px-10 bg-quilocoP rounded-lg"
          onClick={showModal}
        >
          <FiPlusCircle size={22} />
          Add New Product
        </button>
      </div>
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
            Button: {
              defaultBg: "#a01d25",
            },
          },
        }}
      >
        <div className="custom-table">
          <Table dataSource={dataSource} columns={columns} pagination={true} />
        </div>
        <AddProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </ConfigProvider>
    </div>
  );
}

export default ProductList;

const rawData = [
  {
    key: "1",
    serial: "001",
    productname: "Vice City",
    filter: "Low",
    ammount: "$25.99",
    date: "11 oct 24, 11.10PM",
    description: "THCa, Legal, Uplifting, High",
  },
  {
    key: "2",
    serial: "002",
    productname: "Zkittles",
    filter: "Medium",
    ammount: "$79.99",
    date: "11 oct 24, 11.10PM",
    description: "THCa, Legal, Uplifting, High",
  },
  {
    key: "3",
    serial: "003",
    productname: "Zkittles",
    filter: "High",
    ammount: "$79.99",
    date: "11 oct 24, 11.10PM",
    description: "THCa, Legal, Uplifting, High",
  },
  {
    key: "4",
    serial: "004",
    productname: "Vice City",
    filter: "High",
    ammount: "$79.99",
    date: "11 oct 24, 11.10PM",
    description: "THCa, Legal, Uplifting, High",
  },
];
const columns = [
  {
    title: "Sl#",
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
    filters: [
      { text: "Low", value: "Low" },
      { text: "Medium", value: "Medium" },
      { text: "High", value: "High" },
    ],
    onFilter: (value, record) => record.filter === value, // Filtering logic
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Ammount",
    dataIndex: "ammount",
    key: "ammount",
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
      <a href="#" className="hover:text-[#a11d26]">
        <IoEye size={24} />
      </a>
    ),
  },
];

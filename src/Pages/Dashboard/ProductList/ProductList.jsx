import React, { useState } from "react";
import { Table, Avatar, ConfigProvider, Input } from "antd";
import { FiPlusCircle } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import AddProductModal from "./AddProductModal";
import { SearchOutlined } from "@ant-design/icons";
import ProdductDetailsModal from "./ProdductDetailsModal";

function ProductList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showDetailsModal = (product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const searchableFields = columns(showDetailsModal).map(
    (col) => col.dataIndex
  );

  const filteredData = rawData.filter((item) =>
    searchableFields.some((field) => {
      if (!item[field]) return false;
      const fieldValue = item[field].toString().toLowerCase();
      const query = searchTerm.toLowerCase();
      if (field === "serial") {
        return fieldValue.includes(query.replace("#", ""));
      }
      return fieldValue.includes(query);
    })
  );

  const dataSource = filteredData.map((item) => ({
    ...item,
    serial: `#${item.serial}`,
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
          <Table
            dataSource={dataSource}
            columns={columns(showDetailsModal)}
            pagination={true}
          />
        </div>
        <AddProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <ProdductDetailsModal
          isModalOpen={isDetailsModalOpen}
          setIsModalOpen={setIsDetailsModalOpen}
          record={selectedProduct}
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
    productname: "Vice City OG",
    filter: "Low",
    ammount: "$29.99",
    date: "12 Mar 25, 10:30 AM",
    description: "THCa, Citrus, Relaxing, Euphoric",
    productimg:
      "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2018/04/medical-marijuana.jpg",
  },
  {
    key: "2",
    serial: "002",
    productname: "Purple Haze",
    filter: "Medium",
    ammount: "$65.50",
    date: "10 Mar 25, 08:15 PM",
    description: "Sativa, Energizing, Berry Aroma",
    productimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tCHsL3YYsC9qQSZhrqRBfecifG1lVu8x9g&s",
  },
  {
    key: "3",
    serial: "003",
    productname: "Zkittlez Kush",
    filter: "High",
    ammount: "$85.99",
    date: "09 Mar 25, 04:45 PM",
    description: "Indica, Relaxing, Fruity, THC 22%",
    productimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfAsm7W7szz1BK17clO2ulWMaohk06eJDcw&s",
  },
  {
    key: "4",
    serial: "004",
    productname: "Blue Dream",
    filter: "Medium",
    ammount: "$72.00",
    date: "11 Mar 25, 02:00 PM",
    description: "Hybrid, Creative, Mildly Sedative",
    productimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbX1mfPAINkcuYCG7HcNZfWvnAXCs6d8vFZw&s",
  },
  {
    key: "5",
    serial: "005",
    productname: "Sour Diesel",
    filter: "High",
    ammount: "$99.99",
    date: "08 Mar 25, 06:30 PM",
    description: "Sativa, Uplifting, Strong Aroma",
    productimg:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Macro_cannabis_bud.jpg",
  },
  {
    key: "6",
    serial: "006",
    productname: "Gelato 33",
    filter: "Low",
    ammount: "$40.00",
    date: "07 Mar 25, 09:00 AM",
    description: "Hybrid, Dessert-like Flavor, THC 19%",
    productimg:
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/1820B/production/_106472889_hi051939557.jpg",
  },
  {
    key: "7",
    serial: "007",
    productname: "Granddaddy Purple",
    filter: "High",
    ammount: "$89.99",
    date: "06 Mar 25, 05:45 PM",
    description: "Indica, Deep Relaxation, Grape Aroma",
    productimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntfv0JVxRPpJHoLJfQMvw1Sxfdb0xTJtDFw&s",
  },
  {
    key: "8",
    serial: "008",
    productname: "Lemon Skunk",
    filter: "Medium",
    ammount: "$59.50",
    date: "05 Mar 25, 01:10 PM",
    description: "Sativa, Citrus, Uplifting High",
    productimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwUxhkASQTeYfvjWKfzycjxZuVY3fgvHxcg&s",
  },
];

const columns = (showDetailsModal) => [
  {
    title: "Sl#",
    dataIndex: "serial",
    key: "serial",
  },
  {
    title: "Product Name",
    dataIndex: "productname",
    key: "productname",
    render: (_, record) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar
            shape="square"
            size="default"
            src={record.productimg}
            alt={record.productname}
            onError={(e) => {
              console.error("Image failed to load:", record.productimg);
              e.target.src = "https://via.placeholder.com/50";
            }}
          />
          <span>{record.productname}</span>
        </div>
      );
    },
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
    onFilter: (value, record) => record.filter === value,
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
    title: "Details",
    key: "action",
    render: (_, record) => (
      <button
        className="hover:text-[#a11d26]"
        onClick={() => showDetailsModal(record)}
      >
        <IoEye size={24} />
      </button>
    ),
  },
];

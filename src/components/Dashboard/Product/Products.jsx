import useIcons from "../../../hooks/useIcons";
import { Table } from "antd";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  getProducts,
} from "../../../rtk/slices/product/product";
import { toast } from "react-toastify";

const Products = () => {
  const { BiEdit, AiFillDelete } = useIcons();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const { products, deleted } = state;

  useEffect(() => {
    dispatch(getProducts());
  }, [deleted]);

  async function handleDeleteProduct(id) {
    const result = await dispatch(deleteProduct(id));
    toast.success(result.payload.msg);
    getProducts();
  }

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [];
  for (let i = 0; i < products.products?.length; i++) {
    data.push({
      key: i + 1,
      title: products.products[i].title,
      brand: (
        <span className="uppercase font-semibold">
          {products.products[i].brand}
        </span>
      ),
      category: products.products[i].category,
      color: products.products[i].color,
      price: (
        <span className="text-green-500">${products.products[i].price}</span>
      ),
      action: (
        <div className="flex gap-2 items-center">
          <Link
            to={`/dashboard/edit-product/${products.products[i]._id}`}
            className="text-green-500"
          >
            <BiEdit />
          </Link>
          <button
            className="text-red-500"
            onClick={() => handleDeleteProduct(products.products[i]._id)}
          >
            <AiFillDelete />
          </button>
        </div>
      ),
    });
  }
  return (
    <div className="flex flex-col gap-5">
      <h3 className="capitalize text-2xl font-semibold text-[#3d464d]">
        Products
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default memo(Products);

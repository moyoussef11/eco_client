import { Table } from "antd";
import useIcons from "../../../hooks/useIcons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProductsCategory,
  getProductsCategory,
} from "../../../rtk/slices/productCategory/productCategory";
import { toast } from "react-toastify";

const Categories = () => {
  const { BiEdit, AiFillDelete } = useIcons();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsCategory);
  const { productsCategory } = state;
  const { categories } = productsCategory;

  const deleteCatProduct = async (id) => {
    const result = await dispatch(deleteProductsCategory(id));
    if (result) {
      toast.success(`${result.payload.msg}`);
      dispatch(getProductsCategory());
    }
  };

  useEffect(() => {
    dispatch(getProductsCategory());
  }, []);

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < categories?.length; i++) {
    data.push({
      key: i + 1,
      name: categories[i].title,
      action: (
        <div className="flex gap-2 items-center">
          <Link
            to={`/dashboard/edit-product-Cat/${categories[i]._id}`}
            className="text-green-500"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => deleteCatProduct(categories[i]._id)}
            className="text-red-500"
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
        Categories
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Categories;

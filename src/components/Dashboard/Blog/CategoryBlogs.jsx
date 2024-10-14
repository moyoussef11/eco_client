import { Link } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlogCategory,
  getBlogsCategory,
  resetBlogCategory,
} from "../../../rtk/slices/blogCategory/blogCategory";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CategoryBlogs = () => {
  const { BiEdit, AiFillDelete } = useIcons();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogsCategory);
  const { blogsCategory, msg } = state;
  const { categories } = blogsCategory;

  async function deleteABlogCat(id) {
    await dispatch(deleteBlogCategory(id));
    toast.success("deleted successfully");
    await dispatch(resetBlogCategory());
  }

  useEffect(() => {
    dispatch(getBlogsCategory());
  }, [msg]);

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
        <div className="flex items-center gap-3">
          <Link
            to={`/dashboard/edit-category-blog/${categories[i]._id}`}
            className="text-green-500"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => deleteABlogCat(categories[i]._id)}
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
        Category-Blogs
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default CategoryBlogs;

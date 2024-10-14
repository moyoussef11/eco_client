import { Link } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteBlog, getBlogs, resetBlog } from "../../../rtk/slices/blog/blog";
import { toast } from "react-toastify";

const Blogs = () => {
  const { BiEdit, AiFillDelete } = useIcons();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogs);
  const { blogs, msg } = state;
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch, msg]);

  const deleteABlog = async (id) => {
    try {
      await dispatch(deleteBlog(id));
      await dispatch(resetBlog());
      toast.success("deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

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
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [];
  for (let i = 0; i < blogs.blogs?.length; i++) {
    data.push({
      key: i + 1,
      title: blogs.blogs[i].title,
      category: blogs.blogs[i].category,
      action: (
        <div className="flex items-center gap-3">
          <Link
            to={`/dashboard/edit-blog/${blogs.blogs[i]._id}`}
            className="text-green-500"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => deleteABlog(blogs.blogs[i]._id)}
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
        Blogs
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Blogs;

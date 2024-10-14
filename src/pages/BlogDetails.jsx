import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../rtk/slices/blog/blog";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const { blog } = state;

  const fetchBlog = async (id) => {
    try {
      const result = await dispatch(getBlog(id));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlog(id);
  }, [id]);

  return (
    <>
      <BreadCrumb title={`${blog.title}`} />
      {blog ? (
        <div className="paddingX py-5 bg-slate-100">
          <div className="blog w-full flex flex-col items-center sm:items-start gap-5 bg-white p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="w-full sm:w-1/2 flex flex-col gap-5">
                <h2 className="sm:text-3xl font-bold capitalize">
                  {blog.title}
                </h2>
                <img className="w-full rounded" src={blog.image} alt="alt" />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col gap-5">
                <span className="text-sm text-green-500">
                  {blog.createdAt?.split("T")[0]}
                </span>{" "}
                <span className="text-sm">views:{blog.numViews}</span>
                <p className=" text-sm text-gray-500">{blog.description}</p>
                <div>likes</div>
              </div>
            </div>
            <Link className="capitalize font-semibold" to="/blogs">
              back to blogs
            </Link>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default BlogDetails;

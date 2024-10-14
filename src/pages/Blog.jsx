import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import CardBlog from "../components/Blog/CardBlog";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../rtk/slices/blog/blog";
import { useEffect } from "react";

const Blog = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogs);
  const { blogs } = state;
  const fetchBlogs = async () => {
    try {
      await dispatch(getBlogs());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);

  return (
    <>
      <BreadCrumb title={"blogs"} />
      <div className="paddingX py-5 bg-slate-100 grid grid-flow-col gap-4">
        <div className="hidden sm:flex flex-col gap-4 col-span-1">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="capitalize font-bold">show by categories</h3>
            <nav className="mt-5">
              <ul className="flex flex-col gap-2 capitalize text-gray-400">
                <li>
                  <Link to={"/"}>watch</Link>
                </li>
                <li>
                  <Link to={"/"}>tv</Link>
                </li>
                <li>
                  <Link to={"/"}>camera</Link>
                </li>
                <li>
                  <Link to={"/"}>laptop</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-span-11 rounded">
          <div className="contant flex flex-col">
            <div className={`blogs p-2 grid grid-cols-1 md:grid-cols-2 gap-4`}>
              {blogs.blogs?.map((blog) => (
                <CardBlog
                  key={blog._id}
                  title={blog.title}
                  id={blog._id}
                  date={blog.createdAt}
                  src={blog.image}
                  alt={blog.title}
                  details={blog.description.substring(1, 30)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

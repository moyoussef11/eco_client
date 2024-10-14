import { Link, useLocation } from "react-router-dom";
import useIcons from "../../hooks/useIcons";
import { useState } from "react";

const SideBar = () => {
  const {
    MdDashboard,
    FaUsers,
    CiShoppingCart,
    IoIosArrowDown,
    IoIosArrowUp,
    MdOutlineAddShoppingCart,
    TiShoppingCart,
    TbBrandSuperhuman,
    MdOutlineLibraryAdd,
    BiSolidCategory,
    CgExtensionAdd,
    TiMediaRecord,
    FaBlogger,
    ImBlog,
    FaBlog,
    GrContact,
  } = useIcons();
  const [show, setShow] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  return (
    <aside>
      <Link t0='/'>
        <h4 className="bg-[#ffd333] text-sm p-2 text-[#3d464d] font-bold md:py-2 md:px-5 md:text-4xl">
          I_BOX
        </h4>
      </Link>
      <nav className="my-10">
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 capitalize px-5 py-2 hover:bg-blue-500 duration-300 ${
                pathname == null ? "bg-blue-500" : ""
              }`}
            >
              <MdDashboard size={25} />
              <span className="hidden md:block">dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="customers"
              className={`flex items-center gap-3 capitalize px-5 py-2 hover:bg-blue-500 duration-300 ${
                pathname === "customers" ? "bg-blue-500" : ""
              }`}
            >
              <FaUsers size={25} />
              <span className="hidden md:block">customers</span>
            </Link>
          </li>
          <li>
            <div className="px-5 capitalize">
              <div
                onClick={() => setShow(!show)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <CiShoppingCart size={25} />
                <span className="hidden md:block">catalog</span>
                {!show ? (
                  <IoIosArrowDown
                    size={25}
                    className="flex-1 ml-16 hidden md:block"
                  />
                ) : (
                  <IoIosArrowUp
                    size={25}
                    className="flex-1 ml-16 hidden md:block"
                  />
                )}
              </div>
              <div className="overflow-hidden">
                <ul
                  className={`my-5 flex flex-col gap-5 ${
                    show ? "mt-5" : "-mt-[450px]"
                  } duration-500`}
                >
                  <li>
                    <Link
                      to="add-product"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname == "add-product" ? "bg-blue-500" : ""
                      }`}
                    >
                      <MdOutlineAddShoppingCart size={25} />
                      <span className="hidden md:block">add product</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="products"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname == "products" ? "bg-blue-500" : ""
                      }`}
                    >
                      <TiShoppingCart size={25} />
                      <span className="hidden md:block">products</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="coupons"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "coupons" ? "bg-blue-500" : ""
                      }`}
                    >
                      <TbBrandSuperhuman size={25} />
                      <span className="hidden md:block">coupons</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="add-coupon"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "add-coupon" ? "bg-blue-500" : ""
                      }`}
                    >
                      <MdOutlineLibraryAdd size={25} />
                      <span className="hidden md:block">add coupon</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="categories"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "categories" ? "bg-blue-500" : ""
                      }`}
                    >
                      <BiSolidCategory size={25} />
                      <span className="hidden md:block">categories</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="add-category"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "add-category" ? "bg-blue-500" : ""
                      }`}
                    >
                      <CgExtensionAdd size={25} />
                      <span className="hidden md:block">add category</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="orders"
              className={`flex items-center gap-3 capitalize px-5 py-2 hover:bg-blue-500 duration-300 rounded ${
                pathname === "orders" ? "bg-blue-500" : ""
              }`}
            >
              <TiMediaRecord size={25} />
              <span className="hidden md:block">orders</span>
            </Link>
          </li>

          <li>
            <div className="px-5 capitalize">
              <div
                onClick={() => setShowBlog(!showBlog)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FaBlogger size={25} />
                <span className="hidden md:block">blogs</span>
                {!showBlog ? (
                  <IoIosArrowDown
                    size={25}
                    className="flex-1 ml-20 hidden md:block"
                  />
                ) : (
                  <IoIosArrowUp
                    size={25}
                    className="flex-1 ml-20 hidden md:block"
                  />
                )}
              </div>
              <div className="overflow-hidden">
                <ul
                  className={`my-5 flex flex-col gap-5 ${
                    showBlog ? "mt-5" : "-mt-96"
                  } duration-500`}
                >
                  <li>
                    <Link
                      to="add-blog"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "add-blog" ? "bg-blue-500" : ""
                      }`}
                    >
                      <ImBlog size={25} />
                      <span className="hidden md:block">add blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="blogs"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "blogs" ? "bg-blue-500" : ""
                      }`}
                    >
                      <FaBlog size={25} />
                      <span className="hidden md:block">blogs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="category-blogs"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "category-blogs" ? "bg-blue-500" : ""
                      }`}
                    >
                      <BiSolidCategory size={25} />
                      <span className="hidden md:block">category blogs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="add-category-blog"
                      className={`flex items-center gap-3 capitalize md:px-5 md:py-2 hover:bg-blue-500 duration-300 rounded ${
                        pathname === "add-category-blog" ? "bg-blue-500" : ""
                      }`}
                    >
                      <CgExtensionAdd size={25} />
                      <span className="hidden md:block">
                        add category blog{" "}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="contacts"
              className={`flex items-center gap-3 capitalize px-5 py-2 hover:bg-blue-500 duration-300 rounded ${
                pathname === "contacts" ? "bg-blue-500" : ""
              }`}
            >
              <GrContact size={25} />
              <span className="hidden md:block">contacts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;

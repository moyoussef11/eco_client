import { useState } from "react";
import { Link } from "react-router-dom";
import useIcons from "../../hooks/useIcons";
import useUser from "../../hooks/useUser";
import { useCart } from "../../hooks/useCart";

const HeaderCenter = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout, loggedUser } = useUser();
  const {
    CiSearch,
    CiHeart,
    CiMenuBurger,
    LuGitCompare,
    FaUserTie,
    HiOutlineShoppingCart,
    IoMdClose,
  } = useIcons();
  const { state } = useCart();

  return (
    <div className="center paddingX py-2 w-full bg-[#131921] text-white flex flex-row gap-3 items-center justify-between relative">
      <div>
        <Link to="/" className="text-3xl font-bold">
          I_BOX
        </Link>
      </div>
      <div className="w-full md:px-10 relative">
        <form className="w-full flex items-center relative">
          <input
            type="text"
            className="w-full rounded"
            placeholder="search product here..."
          />
          <button
            className="bg-[#ebaf63] p-3 border-none outline-none focus:border-none rounded"
            type="submit"
          >
            <CiSearch />
          </button>
        </form>
      </div>
      <div className="hidden md:flex items-center justify-between gap-5">
        <Link
          to="/compare-products"
          className="flex items-center justify-between gap-2 capitalize text-sm"
        >
          <LuGitCompare size={30} />
          <p>
            compare <br /> products
          </p>
        </Link>
        <Link
          to={`/wishlist/${user?._id}`}
          className="flex items-center justify-between gap-2 capitalize text-sm"
        >
          <CiHeart size={30} />
          <p>
            favourite <br /> wishlist
          </p>
        </Link>

        <Link
          to="/cart"
          className="flex items-center justify-between gap-2 capitalize text-sm"
        >
          <HiOutlineShoppingCart className="text-[#febd69]" size={30} />
          <p>
            <span className=" bg-white p-1 rounded-full text-black">
              {state?.cart?.cart?.length > 0 ? state?.cart?.cart?.length : 0}
            </span>{" "}
            <br /> $
            {state?.cart?.cart?.length > 0
              ? state?.cart?.cart
                  ?.map((car) => car.price * car.quantity)
                  .reduce((acc, cur) => acc + cur, 0)
              : "0"}
          </p>
        </Link>
        {loggedUser ? (
          <div className="flex items-center gap-3">
            <Link className="p-2 capitalize bg-green-500 rounded" to="/profile">
              profile
            </Link>
            <button
              onClick={() => logout()}
              className="p-2 bg-red-500 w-20 rounded"
            >
              log out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center w-32 justify-between gap-2 capitalize text-sm"
          >
            <FaUserTie size={30} />
            <p>
              login <br /> my account
            </p>
          </Link>
        )}
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer z-10 md:hidden"
      >
        {toggle ? (
          <IoMdClose size={30} className="text-white" />
        ) : (
          <CiMenuBurger size={30} className="text-white" />
        )}
      </div>
      {/* mobile responsive */}
      <div
        className={`absolute left-0 ${
          toggle ? "top-[65px]" : "-top-96"
        }  py-2 z-30 w-full flex items-center justify-between flex-col gap-5 bg-[#131921] duration-300 md:hidden`}
      >
        <Link
          to="/compare-products"
          className="flex items-center justify-between gap-2 capitalize text-sm"
        >
          <LuGitCompare size={30} />
          <p>
            compare <br /> products
          </p>
        </Link>
        <Link
          to="/wishlist"
          className="flex items-center justify-between gap-2 capitalize text-sm"
        >
          <CiHeart size={30} />
          <p>
            favourite <br /> wishlist
          </p>
        </Link>
        <Link
          to="/cart"
          className="flex items-center justify-between gap-2 capitalize text-sm"
        >
          <HiOutlineShoppingCart className="text-[#febd69]" size={30} />
          <p>
            <span className=" bg-white p-1 rounded-full text-black">
              {state?.cart?.cart?.length > 0 ? state?.cart?.cart?.length : 0}
            </span>
            <br /> $
            {state?.cart?.cart?.length > 0
              ? state?.cart?.cart
                  ?.map((car) => car.price * car.quantity)
                  .reduce((acc, cur) => acc + cur, 0)
              : "0"}
          </p>
        </Link>
        {loggedUser ? (
          <div className="flex flex-col items-center gap-5">
            <Link className="p-2 capitalize bg-green-500 rounded" to="/profile">
              profile
            </Link>
            <button
              onClick={() => logout()}
              className="p-2 bg-red-500 w-20 rounded"
            >
              log out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center w-32 justify-between gap-2 capitalize text-sm"
          >
            <FaUserTie size={30} />
            <p>
              login <br /> my account
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderCenter;

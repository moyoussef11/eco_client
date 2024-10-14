import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import CardWishlist from "../components/Product/CardWishlist";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import useIcons from "../hooks/useIcons";
const Wishlist = () => {
  const { users, token, removeToWishlist } = useWishlist();
  const { CiHeart } = useIcons();

  return (
    <>
      <BreadCrumb title={"wishlist"} />
      {token &&
      users?.status === "Success" &&
      users?.user?.wishlist?.length > 0 ? (
        <div className="products paddingX py-5 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {users?.user.wishlist.map((wish) => (
            <CardWishlist
              key={wish._id}
              id={wish._id}
              src={wish.images[0]}
              alt={wish.slug}
              title={wish.title}
              price={wish.price}
              removeToWishlist={removeToWishlist}
            />
          ))}
        </div>
      ) : !token ? (
        <div className="paddingX flex items-center justify-center min-h-96">
          <Link to="/login" className="bg-[#ebaf63] p-2 rounded text-white">
            log in
          </Link>
        </div>
      ) : (
        <div className="paddingX flex items-center justify-center min-h-96 bg-slate-100">
          <div className="bg-white max-w-lg p-2 flex flex-col items-center justify-center gap-5">
            <CiHeart className="text-[#ebaf63]" size={40} />
            <h4 className="font-bold capitalize sm:text-2xl">
              Your wishlist Is Currently Empty!
            </h4>
            <p>
              Looks like you have not made your choice yet. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              to="/store"
              className="bg-black text-white p-2 rounded capitalize"
            >
              go shopping now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Wishlist);

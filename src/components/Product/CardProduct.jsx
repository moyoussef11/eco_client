import propTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import useIcons from "../../hooks/useIcons";
import { useHandelAddToWishlist } from "../../hooks/useHandelAddToWishlist";
import ReactStars from "react-rating-stars-component";

const CardProduct = ({ src1, src2, brand, details, price, stars, id }) => {
  const { CiHeart, LuGitCompare, FaEye, IoBagAddOutline } = useIcons();
  const { handelAddToWishlist } = useHandelAddToWishlist();
  return (
    <div className="card group shadow-lg overflow-hidden bg-slate-50 flex flex-col relative rounded hover:scale-105 duration-300">
      <div>
        <img
          src={src1}
          loading="lazy"
          className="h-72 w-full object-contain group-hover:hidden"
          alt="product title"
        />
        <img
          src={src2}
          loading="lazy"
          className="h-72 w-full object-contain hidden group-hover:block"
          alt="product title"
        />
      </div>
      <div className="flex flex-col gap-3 px-3">
        <span className="text-red-500 capitalize font-bold">{brand}</span>
        <p className="font-bold">{details + " ..."}</p>
        <ReactStars
          count={5}
          size={24}
          edit={false}
          value={stars ? stars : 0}
          activeColor="#ffd700"
        />
        <strong className="mb-3">${price}</strong>
      </div>
      <div
        onClick={() => handelAddToWishlist(id)}
        className={`cursor-pointer w-fit absolute right-3 top-2`}
      >
        <CiHeart size={20} />
      </div>
      <div className="w-fit absolute -right-6 group-hover:right-3 duration-300 top-10 flex flex-col gap-3">
        <Link to={`/compare-products`}>
          <LuGitCompare size={20} className="cursor-pointer" />
        </Link>
        <Link
          to={`/product-details/${id}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <FaEye size={20} className="cursor-pointer" />
        </Link>
        <Link to={`/cart`}>
          <IoBagAddOutline size={20} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};
CardProduct.propTypes = {
  id: propTypes.string,
  src1: propTypes.string,
  src2: propTypes.string,
  price: propTypes.oneOfType([propTypes.number, propTypes.string]),
  details: propTypes.string,
  stars: propTypes.number,
  brand: propTypes.string,
};

export default memo(CardProduct);

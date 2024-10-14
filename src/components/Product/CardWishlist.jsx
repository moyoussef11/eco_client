import propTypes from "prop-types";
import useIcons from "../../hooks/useIcons";
import { Link } from "react-router-dom";

const CardWishlist = ({ id, title, src, price, alt, removeToWishlist }) => {
  const { IoMdClose } = useIcons();
  return (
    <div className="product bg-white rounded p-2 relative">
      <span className="absolute right-4 cursor-pointer">
        <IoMdClose onClick={() => removeToWishlist(id)} />
      </span>
      <div>
        <img
          loading="lazy"
          className="w-52 h-52 object-contain mx-auto"
          src={src}
          alt={alt}
        />
      </div>
      <div className="font-bold capitalize flex flex-col gap-4">
        <h2>{title}</h2>
        <span className="text-red-500">${price}</span>
        <Link to={`/product-details/${id}`} className="bg-black text-white p-2 rounded text-center" >details</Link>
      </div>
    </div>
  );
};
CardWishlist.propTypes = {
  id: propTypes.string,
  src: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  removeToWishlist: propTypes.func,
  price: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

export default CardWishlist;

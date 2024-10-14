import propTypes from "prop-types";
import useIcons from "../../hooks/useIcons";

const CardProductCompare = ({
  src,
  alt,
  title,
  price,
  brand,
  type,
  sku,
  avaliability,
  size,
}) => {
  const { IoMdClose } = useIcons();
  return (
    <div className="product bg-white rounded p-2 relative">
      <span className="absolute right-4 cursor-pointer">
        <IoMdClose />
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
      </div>
      <ul className="flex flex-col gap-4 my-4">
        <li className="flex items-center justify-between capitalize">
          <strong>brand:</strong>
          <p>{brand}</p>
        </li>
        <li className="flex items-center justify-between capitalize">
          <strong>type:</strong>
          <p>{type}</p>
        </li>
        <li className="flex items-center justify-between capitalize">
          <strong>SKU:</strong>
          <p>{sku}</p>
        </li>
        <li className="flex items-center justify-between capitalize">
          <strong>avaliability:</strong>
          <p>{avaliability}</p>
        </li>
        <li className="flex items-center justify-between capitalize">
          <strong>size:</strong>
          <p>{size}</p>
        </li>
      </ul>
    </div>
  );
};

CardProductCompare.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  price: propTypes.string,
  brand: propTypes.string,
  type: propTypes.string,
  sku: propTypes.string,
  size: propTypes.string,
  avaliability: propTypes.string,
};

export default CardProductCompare;

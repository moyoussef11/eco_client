import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import CardProduct from "../components/Product/CardProduct";
import { useProductDetails } from "../hooks/useProductDetails";
import { useAddToCart } from "../hooks/useAddToCart";

const Product = () => {
  const { product, totalRate, ratingChanged, doneRate, rate, products } =
    useProductDetails();
  const { quantity, setQuantity, state, addToACart, user } = useAddToCart();

  return (
    <div className="paddingX py-5 bg-slate-100">
      <BreadCrumb title={`Product-details / ${product?.title}`} />
      <div className="flex gap-5 rounded flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-white shadow">
          <img
            src={
              product && product.images && product.images.length > 0
                ? product.images[0]
                : ""
            }
            className="w-1/2 h-60 object-cover mx-auto"
            alt={product.title}
          />
          <div className="pics flex items-center justify-center gap-5 py-5 flex-wrap">
            {product?.images?.map((img, index) => (
              <img
                className="h-36 w-36"
                key={index}
                src={img}
                alt={product.title}
              />
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2 bg-white shadow flex flex-col gap-5 p-5">
          <h3 className="sm:text-2xl capitalize font-bold">{product?.title}</h3>
          <span className="text-red-500 font-semibold">${product?.price}</span>
          <div className="flex items-center capitalize gap-4">
            <span>reviews</span>
            {totalRate > 0 ? (
              <ReactStars
                value={totalRate}
                edit={false}
                count={5}
                size={24}
                activeColor="#ffd700"
              />
            ) : (
              <small>not found rate</small>
            )}
          </div>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <strong className="capitalize">brand: </strong>
              <span className="text-gray-500">{product?.brand}</span>
            </li>
            <li className="flex items-center gap-3">
              <strong className="capitalize">categories: </strong>
              <span className="text-gray-500">{product?.category}</span>
            </li>
            <li className="flex items-center gap-3">
              <strong className="capitalize">sold: </strong>
              <span className="text-gray-500">{product?.sold}</span>
            </li>
            <li className="flex items-center gap-3">
              <strong className="capitalize">availability: </strong>
              <span className="text-gray-500">
                in stock {product?.quantity}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <strong className="capitalize">color: </strong>
              <span
                className={`bg-blue-${product.color} p-2 rounded-full`}
              ></span>
            </li>
          </ul>
          <div className="w-full flex items-center justify-between">
            <label htmlFor="quantity">
              Quantity: <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              name="quantity"
              id="quantity"
              min={1}
              max={10}
            />
            <div className="w-full sm:w-1/2 flex items-center flex-col gap-5 sm:flex-row">
              {state?.cart?.msg === "added to cart" ? (
                <span className="capitalize text-green-500 font-semibold">
                  done added
                </span>
              ) : (
                <button
                  onClick={() =>
                    addToACart(user._id, product._id, quantity, product.price)
                  }
                  className=" w-full sm:w-1/2 p-2 bg-[#ebaf63] text-white rounded capitalize"
                >
                  add to cart
                </button>
              )}

              <button className=" w-full sm:w-1/2 p-2 bg-black text-white rounded capitalize">
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h3 className="sm:text-2xl capitalize font-semibold py-5">
          description
        </h3>
        <div className="bg-white p-3 rounded capitalize shadow">
          <p>{product?.description}</p>
        </div>
      </div>
      <div className="py-5">
        <h3 className="sm:text-2xl capitalize font-semibold mb-5">ratings</h3>
        <div className="bg-white p-3 rounded capitalize shadow flex items-center gap-3">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            value={doneRate ? rate : 0}
            edit={!doneRate ? true : false}
          />
          <span
            className={`${
              rate > 2 ? "text-green-500" : "text-red-500"
            } font-bold`}
          >
            {rate}
          </span>
        </div>
      </div>
      <div className="py-5">
        <h3 className="sm:text-2xl capitalize font-semibold mb-5">
          you may also like
        </h3>
        <div className="bg-white p-3 rounded capitalize shadow flex items-center gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto py-2">
            {products.length > 0
              ? products
                  .slice(0, 4)
                  .map((prod, index) => (
                    <CardProduct
                      src1={prod.images[0]}
                      src2={prod.images[1]}
                      brand={prod.brand}
                      details={prod.description.substring(1, 30)}
                      price={prod.price}
                      stars={4}
                      id={prod._id}
                      key={index}
                    />
                  ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { Table } from "antd";
import useIcons from "../hooks/useIcons";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export const Cart = () => {
  const { AiFillDelete } = useIcons();
  const { state, deleteFromCart } = useCart();

  const data = [];
  for (let i = 0; i < state?.cart?.cart?.length; i++) {
    data.push({
      key: i + 1,
      product: (
        <div className="flex gap-5 sm:items-center flex-col sm:flex-row">
          <img
            className="h-20 w-20 rounded"
            src={state?.cart?.cart[i].productId.images[0]}
            alt={state?.cart?.cart[i].productId.title}
            loading="lazy"
          />
          <span>{state?.cart?.cart[i].productId.title}</span>
        </div>
      ),
      price: state?.cart?.cart[i].price,
      quantity: state?.cart?.cart[i].quantity,
      total: state?.cart?.cart[i].price * state?.cart?.cart[i].quantity,
      action: (
        <div className="flex items-center gap-3">
          <button
            onClick={() => deleteFromCart(state?.cart?.cart[i]._id)}
            className="text-red-500"
          >
            <AiFillDelete />
          </button>
        </div>
      ),
    });
  }

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <>
      <BreadCrumb title={"cart"} />
      <div className="paddingX py-5 bg-slate-100">
        <Table dataSource={data} columns={columns} />;
        <div className="py-5 flex justify-between items-center flex-col sm:flex-row gap-5">
          <div>
            <Link
              className="bg-black text-white p-2 rounded capitalize"
              to="/store"
            >
              continue to shopping
            </Link>
          </div>
          <div className="bg-white rounded p-3 flex flex-col items-center gap-5 capitalize">
            <strong className="capitalize text-green-500">
              subTotal: $
              {state?.cart?.cart?.length > 0
                ? state?.cart?.cart
                    ?.map((car) => car.price * car.quantity)
                    .reduce((acc, cur) => acc + cur, 0)
                : "0"}
            </strong>
            <p>taxes and shipping calculated at checkout</p>
            <button className="bg-black text-white p-2 rounded-full">
              checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

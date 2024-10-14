import { Link } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";
import { Table } from "antd";

const Orders = () => {
  const { BiEdit, AiFillDelete } = useIcons();
  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < 1; i++) {
    data.push({
      key: i + 1,
      name: "firstname",
      product: <Link to={`/`}>View Orders</Link>,
      amount: "amount",
      date: "date",
      action: (
        <div className="flex items-center gap-3">
          <Link to="/" className="text-green-500">
            <BiEdit />
          </Link>
          <Link className="text-red-500" to="/">
            <AiFillDelete />
          </Link>
        </div>
      ),
    });
  }
  return (
    <div className="flex flex-col gap-5">
      <h3 className="capitalize text-2xl font-semibold text-[#3d464d]">
        Orders
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Orders;

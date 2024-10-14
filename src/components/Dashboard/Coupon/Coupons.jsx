import { Link } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";
import { Table } from "antd";
import { deleteCoupon, getCoupons } from "../../../rtk/slices/coupon/coupon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Coupons = () => {
  const { BiEdit, AiFillDelete } = useIcons();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.coupons);
  const { coupons } = state;

  async function deleteCoup(id) {
    const result = await dispatch(deleteCoupon(id));
    if (result) {
      toast.success("deleted successfully");
      dispatch(getCoupons());
    }
  }

  useEffect(() => {
    dispatch(getCoupons());
  }, []);

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Expiry",
      dataIndex: "expiry",
    },
    {
      title: "Discount",
      dataIndex: "discount",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [];
  for (let i = 0; i < coupons.coupons?.length; i++) {
    data.push({
      key: i + 1,
      name: coupons.coupons[i].name,
      expiry: coupons.coupons[i]?.expiry?.split("T")[0],
      discount: coupons.coupons[i].discount,
      action: (
        <div className="flex items-center gap-3">
          <Link
            to={`/dashboard/edit-coupon/${coupons.coupons[i]._id}`}
            className="text-green-500"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => deleteCoup(coupons.coupons[i]._id)}
            className="text-red-500"
          >
            <AiFillDelete />
          </button>
        </div>
      ),
    });
  }
  return (
    <div className="flex flex-col gap-5">
      <h3 className="capitalize text-2xl font-semibold text-[#3d464d]">
        Coupons
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Coupons;

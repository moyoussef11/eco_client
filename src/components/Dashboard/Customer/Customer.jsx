import { Table } from "antd";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../rtk/slices/customer/customer";
import useUser from "../../../hooks/useUser";

const Customer = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers);
  const { users } = customer;
  const { loggedUser, token } = useUser();

  useEffect(() => {
    if (loggedUser || token) {
      dispatch(getUsers());
    }
  }, [loggedUser, token]);

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  const data = [];
  for (let i = 0; i < users.users?.length; i++) {
    data.push({
      key: i + 1,
      username: users.users[i].username,
      email: users.users[i].email,
      role: users.users[i].role,
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="capitalize text-2xl font-semibold text-[#3d464d]">
        Customers
      </h3>
      <div>{token ? <Table columns={columns} dataSource={data} /> : ""}</div>
    </div>
  );
};

export default memo(Customer);

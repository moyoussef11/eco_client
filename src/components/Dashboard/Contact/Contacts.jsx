import useIcons from "../../../hooks/useIcons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteContact,
  getContacts,
} from "../../../rtk/slices/contact/contact";
import { toast } from "react-toastify";

const Contacts = () => {
  const { AiFillDelete } = useIcons();

  const contactState = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const deleteAContact = async (id) => {
    const result = await dispatch(deleteContact(id));
    if (result?.payload?.msg) {
      toast.success(`${result?.payload?.msg}`);
      await dispatch(getContacts());
    }
  };

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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < contactState?.contacts?.length; i++) {
    data.push({
      key: i + 1,
      name: contactState.contacts[i].name,
      email: contactState.contacts[i].email,
      phone: contactState.contacts[i].phone,
      message: contactState.contacts[i].message,
      action: (
        <button
          onClick={() => deleteAContact(contactState.contacts[i]._id)}
          className="text-red-500"
          to="/"
        >
          <AiFillDelete />
        </button>
      ),
    });
  }
  return (
    <div className="flex flex-col gap-5">
      <h3 className="capitalize text-2xl font-semibold text-[#3d464d]">
        contacts
      </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Contacts;

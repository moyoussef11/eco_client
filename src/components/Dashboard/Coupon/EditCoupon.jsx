import useEditCoupon from "../../../hooks/useEditCoupon";
import Input from "../../Input/Input";

const EditCoupon = () => {
  const { submit, title, setTitle, expiry, setExpiry, discount, setDiscount } =
    useEditCoupon();
  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Edit-Coupon
      </h2>
      <form
        onSubmit={submit}
        className="my-10 flex flex-col gap-10 max-w-4xl mx-auto"
      >
        <Input
          type={"text"}
          label={"name"}
          name={"name"}
          value={title}
          onchange={(e) => setTitle(e.target.value)}
        />
        <Input
          type={"date"}
          label={"date"}
          name={"expiry"}
          value={expiry}
          onchange={(e) => setExpiry(e.target.value)}
        />
        <Input
          type={"number"}
          label={"discount"}
          name={"discount"}
          value={discount}
          onchange={(e) => setDiscount(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-[#3d464d] p-2 rounded text-white capitalize"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditCoupon;

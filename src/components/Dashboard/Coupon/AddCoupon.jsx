import useAddCoupon from "../../../hooks/useAddCoupon";
import Input from "../../Input/Input";

const AddCoupon = () => {
  const {
    submit,
    title,
    setTitle,
    error,
    expiry,
    setExpiry,
    discount,
    setDiscount,
    loading,
  } = useAddCoupon();
  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Add-Coupon{" "}
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
        {error == "" ? (
          <span className="text-sm text-red-500 capitalize">
            name already exists
          </span>
        ) : (
          ""
        )}
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
          className={`w-full p-2 rounded text-white capitalize ${
            loading == "pending" ? "bg-gray-300" : "bg-[#3d464d]"
          }`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCoupon;

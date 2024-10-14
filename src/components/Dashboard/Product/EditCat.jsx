import { Input } from "antd";
import useEditProductCat from "../../../hooks/useEditProductCat";

const EditCat = () => {
  const { submit, title, setTitle, loading } = useEditProductCat();
  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        edit-category
      </h2>
      <form
        onSubmit={submit}
        className="my-10 flex flex-col gap-10 max-w-4xl mx-auto"
      >
        <Input
          type={"text"}
          label={"name category"}
          name={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className={`w-full ${
            loading == "pending"
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#3d464d]"
          } p-2 rounded text-white capitalize`}
        >
          edit
        </button>
      </form>
    </div>
  );
};

export default EditCat;

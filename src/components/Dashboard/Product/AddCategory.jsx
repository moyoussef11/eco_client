import Input from "../../Input/Input";
import useAddProdCat from "../../../hooks/useAddProdCat";

const AddCategory = () => {
  const { addProdCat, title, error, loading, setTitle } = useAddProdCat();
  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Add-category{" "}
      </h2>
      <form
        onSubmit={addProdCat}
        className="my-10 flex flex-col gap-10 max-w-4xl mx-auto"
      >
        <Input
          type={"text"}
          label={"name category"}
          name={"title"}
          value={title}
          onchange={(e) => setTitle(e.target.value)}
        />
        {error == "" ? (
          <span className="text-red-500 capitalize">name is already exit </span>
        ) : (
          ""
        )}
        <button
          type="submit"
          className={`w-full ${
            loading == "pending"
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#3d464d]"
          } p-2 rounded text-white capitalize`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategory;

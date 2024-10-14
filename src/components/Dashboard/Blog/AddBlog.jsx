import { Select } from "antd";
import useAddBlog from "../../../hooks/useAddBlog";
import Input from "../../Input/Input";

const AddBlog = () => {
  const {
    submit,
    title,
    setTitle,
    description,
    setDescription,
    loading,
    blogsCategory,
    setSelectedCategory,
  } = useAddBlog();

  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Add-Blog
      </h2>
      <form
        onSubmit={submit}
        className="my-10 flex flex-col gap-10 max-w-4xl mx-auto"
      >
        <Input
          type={"text"}
          label={"title"}
          name={"title"}
          value={title}
          onchange={(e) => setTitle(e.target.value)}
        />
        <Input
          type={"text"}
          label={"description"}
          name={"description"}
          value={description}
          onchange={(e) => setDescription(e.target.value)}
        />
        {/* <Input
          type={"text"}
          label={"category"}
          name={"category"}
          value={category}
          onchange={(e) => setCategory(e.target.value)}
        /> */}
        <Select
          className="h-10"
          placeholder="Select a category"
          optionFilterProp="label"
          onChange={(value) => setSelectedCategory(value)}
          options={blogsCategory?.categories?.map((cat) => ({
            value: cat.title,
          }))}
        />
        <button
          type="submit"
          className={`w-full ${
            loading == "pending" ? "bg-gray-300" : "bg-[#3d464d]"
          } p-2 rounded text-white capitalize`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

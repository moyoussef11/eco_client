import useEditCategoryBlog from "../../../hooks/useEditCategoryBlog";
import Input from "../../Input/Input";

const EditCategoryBlog = () => {
  const { submit, title, setTitle } = useEditCategoryBlog();
  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Edit-category-blog
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
          onchange={(e) => setTitle(e.target.value)}
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

export default EditCategoryBlog;

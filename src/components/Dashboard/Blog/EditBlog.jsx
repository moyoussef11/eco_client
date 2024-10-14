import useEditBlog from "../../../hooks/useEditBlog";
import FileInput from "../../Input/FileInput";
import Input from "../../Input/Input";

const EditBlog = () => {
  const {
    submit,
    title,
    setTitle,
    setImage,
    setCategory,
    setDescription,
    description,
    category,
  } = useEditBlog();
  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Edit-Blog
      </h2>
      <form
        onSubmit={submit}
        className="my-10 flex flex-col gap-10 max-w-4xl mx-auto"
      >
        <Input
          type={"text"}
          label={"title"}
          value={title}
          name={"title"}
          onchange={(e) => setTitle(e.target.value)}
        />
        <FileInput
          name={"image"}
          onchange={(e) => setImage(e.target.files[0])}
        />
        <Input
          type={"text"}
          label={"description"}
          value={description}
          name={"description"}
          onchange={(e) => setDescription(e.target.value)}
        />
        <Input
          type={"text"}
          label={"category"}
          value={category}
          name={"category"}
          onchange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-[#3d464d] p-2 rounded text-white capitalize"
        >
          edit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

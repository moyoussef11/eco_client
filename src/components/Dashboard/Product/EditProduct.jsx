import Input from "../../Input/Input";
import FileInput from "../../Input/FileInput";
import useEditProduct from "../../../hooks/useEditProduct";

const EditProduct = () => {
  const { submit, handleForm, data, images, setImages } = useEditProduct();

  return (
    <div>
      <h2 className="capitalize text-[#3d464d] font-semibold border-b w-fit border-gray-600 py-1">
        Edit-Product
      </h2>
      <form
        onSubmit={submit}
        className="my-10 flex flex-col gap-10 max-w-4xl mx-auto"
      >
        <Input
          type={"text"}
          label={"title"}
          value={data.title}
          name={"title"}
          onchange={handleForm}
        />
        <Input
          type={"text"}
          label={"price"}
          value={data.price}
          name={"price"}
          onchange={handleForm}
        />
        <FileInput
          name={"images"}
          onchange={(e) => setImages([...e.target.files])}
        />
        {images?.length > 0 ? (
          <div className="grid grid-cols-5 gap-3">
            {images.map((img, index) => (
              <img
                key={index}
                className="w-20 h-20 object-contain"
                src={URL.createObjectURL(img)}
                alt={img.name}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        <Input
          type={"text"}
          label={"description"}
          value={data.description}
          name={"description"}
          onchange={handleForm}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Input
            type={"text"}
            label={"quantity"}
            value={data.quantity}
            name={"quantity"}
            onchange={handleForm}
          />
          <Input
            type={"text"}
            label={"category"}
            name={"category"}
            value={data.category}
            onchange={handleForm}
          />
          
          <Input
            type={"text"}
            label={"brand"}
            value={data.brand}
            name={"brand"}
            onchange={handleForm}
          />
          <Input
            type={"text"}
            label={"color"}
            name={"color"}
            value={data.color}
            onchange={handleForm}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded text-white capitalize bg-[#3d464d]"
        >
          edit
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import CardProductCompare from "../components/Product/CardProductCompare";
import useImages from "../hooks/useImages";

const CompareProduct = () => {
  const { laptop ,headphone,speaker,phones} = useImages();
  return (
    <>
      <BreadCrumb title={"compare products"} />
      <div className="products paddingX py-5 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <CardProductCompare
          src={laptop}
          alt={"laptop"}
          title={"laptop pro max"}
          price={"100000"}
          brand={"nike"}
          avaliability={"in stock"}
          type={"pc"}
          sku={"sku033"}
          size={"s m l"}
        />
        <CardProductCompare
          src={headphone}
          alt={"laptop"}
          title={"laptop pro max"}
          price={"100000"}
          brand={"nike"}
          avaliability={"in stock"}
          type={"pc"}
          sku={"sku033"}
          size={"s m l"}
        />
        <CardProductCompare
          src={speaker}
          alt={"laptop"}
          title={"laptop pro max"}
          price={"100000"}
          brand={"nike"}
          avaliability={"in stock"}
          type={"pc"}
          sku={"sku033"}
          size={"s m l"}
        />
        <CardProductCompare
          src={phones}
          alt={"laptop"}
          title={"laptop pro max"}
          price={"100000"}
          brand={"nike"}
          avaliability={"in stock"}
          type={"pc"}
          sku={"sku033"}
          size={"s m l"}
        />
      </div>
    </>
  );
};

export default CompareProduct;

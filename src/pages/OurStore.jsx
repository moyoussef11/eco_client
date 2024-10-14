import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useImages from "../hooks/useImages";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import CardProduct from "../components/Product/CardProduct";
import ColorPicker from "react-pick-color";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../rtk/slices/product/product";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [color, setColor] = useState("#fff");
  const { gr, gr2, gr3, gr4 } = useImages();

  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { products } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, []);

  const showProducts = products?.products?.map((product) => (
    <CardProduct
      key={product._id}
      id={product._id}
      src1={product.images[0]}
      src2={product.images[1]}
      stars={product.totalRate}
      brand={product.brand}
      details={product?.description?.substring(1, 60)}
      price={product.price}
    />
  ));

  return (
    <>
      <BreadCrumb title={"our store"} />
      <div className="paddingX py-5 bg-slate-100 grid grid-flow-col gap-4">
        <div className="hidden sm:flex flex-col gap-4 col-span-1">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="capitalize font-bold">shop by categories</h3>
            <nav className="mt-5">
              <ul className="flex flex-col gap-2 capitalize text-gray-400">
                <li>
                  <Link to={"/"}>watch</Link>
                </li>
                <li>
                  <Link to={"/"}>tv</Link>
                </li>
                <li>
                  <Link to={"/"}>camera</Link>
                </li>
                <li>
                  <Link to={"/"}>laptop</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="capitalize font-bold">filter by</h3>
            <div className="mt-5">
              <h5 className="capitalize font-bold">availability</h5>
              <div className="checkboxs mt-5 flex flex-col gap-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="checkbox-1"
                    className="ms-2 text-sm font-medium text-gray-900 capitalize"
                  >
                    in stock (10)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="checkbox-2"
                    className="ms-2 text-sm font-medium text-gray-900 capitalize"
                  >
                    out of stock (1)
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="capitalize font-bold">color</h5>
              <div className="colors mt-5">
                <ColorPicker
                  color={color}
                  onChange={(color) => setColor(color.hex)}
                />
              </div>
            </div>
            <div className="mt-5">
              <h5 className="capitalize font-bold">size</h5>
              <div className="checkboxs mt-5 flex flex-col gap-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="checkbox-1"
                    className="ms-2 text-sm font-medium text-gray-900 capitalize"
                  >
                    s (6)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="checkbox-2"
                    className="ms-2 text-sm font-medium text-gray-900 capitalize"
                  >
                    m (12)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-11 rounded">
          <div className="contant flex flex-col">
            <div className="p-2 mb-5 flex items-center justify-between bg-white rounded shadow-lg">
              <div>
                <form className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="sortby"
                    className="block mb-2 text-sm w-full font-medium text-gray-900 capitalize"
                  >
                    sort by
                  </label>
                  <select
                    id="sortby"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none border-none block w-full"
                  >
                    <option value="best">best</option>
                    <option value="high to low">high to low</option>
                    <option value="low to high">low to high</option>
                    <option value="low price">low price</option>
                    <option value="high price">high price</option>
                  </select>
                </form>
              </div>
              <div className="grids flex items-center justify-between gap-2">
                <img
                  src={gr}
                  className="w-5 h-5 object-contain cursor-pointer bg-slate-200 p-1 rounded hover:bg-slate-300 duration-200"
                  alt="grid"
                  onClick={() => setGrid(1)}
                />
                <img
                  src={gr2}
                  className="w-5 h-5 object-contain cursor-pointer bg-slate-200 p-1 rounded hover:bg-slate-300 duration-200"
                  alt="grid"
                  onClick={() => setGrid(2)}
                />
                <img
                  src={gr3}
                  className="w-5 h-5 object-contain cursor-pointer bg-slate-200 p-1 rounded hover:bg-slate-300 duration-200"
                  alt="grid"
                  onClick={() => setGrid(3)}
                />
                <img
                  src={gr4}
                  className="w-5 h-5 object-contain cursor-pointer bg-slate-200 p-1 rounded hover:bg-slate-300 duration-200"
                  alt="grid"
                  onClick={() => setGrid(4)}
                />
              </div>
            </div>
            <div className={`products p-2 grid grid-cols-${grid} gap-4`}>
              {showProducts}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;

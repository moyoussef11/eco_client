import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ImgMarquee from "../components/Images/ImgMarquee";
import CardBlog from "../components/Blog/CardBlog";
import CardProduct from "../components/Product/CardProduct";
import useIcons from "../hooks/useIcons";
import useSwiper from "../hooks/useSwiper";
import useImages from "../hooks/useImages";
import { useProductsAndBlogs } from "../hooks/useProductsAndBlogs";

const Home = () => {
  const { IoMdArrowDropleft, IoMdArrowDropright } = useIcons();
  const {
    mainBanner,
    mainBanner1,
    catBanner1,
    catBanner2,
    catBanner3,
    catBanner4,
    service1,
    service2,
    service3,
    service4,
    service5,
    acc,
    speaker,
    laptop,
    homeApp,
    tv,
    watch,
    headphone,
    camera,
    ps4,
    phones,
    CatHome,
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
  } = useImages();
  const { Swiper, SwiperSlide, Navigation } = useSwiper();
  const { productsState, blogsState } = useProductsAndBlogs();
  return (
    <>
      <section className="sec-1 paddingX py-5 bg-slate-100 flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-1/2">
          <div
            id="default-carousel"
            className="relative w-full z-0"
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-[445px]">
              {/* Item 1 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={mainBanner}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="mainBanner"
                />
                <div className="absolute top-1/4 left-[8%] font-bold flex flex-col gap-3 sm:gap-5">
                  <h5 className="uppercase text-xs sm:text-sm md:text-xl text-red-500">
                    subscriber for pros
                  </h5>
                  <h2 className="text-lg sm:text-2xl md:text-4xl capitalize">
                    special sale
                  </h2>
                  <p className="text-xs sm:text-sm">
                    from $999.0 or <br /> $41.62/mo
                  </p>
                  <Link
                    className="px-3 py-2 w-fit text-xs sm:text-sm text-white bg-black rounded-full"
                    to="/"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={mainBanner1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="mainBanner"
                />
                <div className="absolute top-1/4 left-[8%] font-bold flex flex-col gap-3 sm:gap-5">
                  <h5 className="uppercase text-xs sm:text-sm md:text-xl text-red-500">
                    Sign up for a free trial
                  </h5>
                  <h2 className="text-lg sm:text-2xl md:text-4xl capitalize">
                    very special
                  </h2>
                  <p className="text-xs sm:text-sm">
                    Make sales and have <br /> Shopify pay for itself!
                  </p>
                  <Link
                    className="px-3 py-2 w-fit text-xs sm:text-sm text-white bg-black rounded-full"
                    to="/"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
          <div className="w-full">
            <div className="w-full h-full relative">
              <img
                className="h-full w-full rounded object-cover"
                src={catBanner1}
                alt="CatBanner"
              />
              <div className="absolute top-[15%] left-[8%] flex flex-col font-bold gap-1 md:gap-3 sm:gap-5">
                <h5 className="uppercase text-xs text-red-500">best sale</h5>
                <h2 className="text-sm capitalize">laptops max</h2>
                <p className="text-xs sm:text-sm">
                  from $1699.0 or <br /> $78.62/mo
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full relative">
              <img
                className="h-full w-full rounded object-cover"
                src={catBanner3}
                alt="CatBanner"
              />
              <div className="absolute top-[15%] left-[8%] flex flex-col font-bold gap-1 md:gap-3 sm:gap-5">
                <h5 className="uppercase text-xs text-red-500">new arrival</h5>
                <h2 className="text-sm capitalize">ipad air</h2>
                <p className="text-xs sm:text-sm">
                  from $599.0 or <br /> $50.62/mo
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full relative">
              <img
                className="h-full w-full rounded object-cover"
                src={catBanner2}
                alt="CatBanner"
              />
              <div className="absolute top-[15%] left-[8%] flex flex-col font-bold gap-1 md:gap-3 sm:gap-5">
                <h5 className="uppercase text-xs text-red-500">15% off</h5>
                <h2 className="text-sm capitalize">smartwatch 7</h2>
                <p className="text-xs sm:text-sm">
                  shop the latest <br />
                  band styles and colors
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full relative">
              <img
                className="h-full w-full rounded object-cover"
                src={catBanner4}
                alt="CatBanner"
              />
              <div className="absolute top-[15%] left-[8%] flex flex-col font-bold gap-1 md:gap-3 sm:gap-5">
                <h5 className="uppercase text-xs text-red-500">
                  free engrying
                </h5>
                <h2 className="text-sm capitalize">airPods max</h2>
                <p className="text-xs sm:text-sm">
                  high-fidelity <br />
                  playbacks & ultra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2 paddingX py-5 bg-slate-200">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2xl:grid-cols-5 gap-6">
          <div className="flex items-center gap-5">
            <img src={service1} alt="service" />
            <div className="flex flex-col gap-2 capitalize">
              <h5 className="font-bold">free shipping</h5>
              <p className="text-sm">from all order over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={service2} alt="service" />
            <div className="flex flex-col gap-2 capitalize">
              <h5 className="font-bold">daily surprise offers</h5>
              <p className="text-sm">save up to 25% off</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={service3} alt="service" />
            <div className="flex flex-col gap-2 capitalize">
              <h5 className="font-bold">support 24/7</h5>
              <p className="text-sm">shop with an expert</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={service4} alt="service" />
            <div className="flex flex-col gap-2 capitalize">
              <h5 className="font-bold">affordable prices</h5>
              <p className="text-sm">get factory direct price</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={service5} alt="service" />
            <div className="flex flex-col gap-2 capitalize">
              <h5 className="font-bold">secure payments</h5>
              <p className="text-sm">100% protected payments</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-3 paddingX py-5 bg-slate-100">
        <div className="cats w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5">
          <CatHome
            title={"computers & laptops"}
            item={"18 item"}
            src={laptop}
            alt={"laptop"}
          />
          <CatHome
            title={"cameras & videos"}
            item={"10 item"}
            src={camera}
            alt={"cameras"}
          />
          <CatHome
            title={"smart television"}
            item={"30 item"}
            src={tv}
            alt={"tv"}
          />

          <CatHome
            title={"smartwatches"}
            item={"90 item"}
            src={watch}
            alt={"watch"}
          />

          <CatHome
            title={"music & gaming"}
            item={"100 item"}
            src={ps4}
            alt={"ps4"}
          />
          <CatHome
            title={"mobiles & tablets"}
            item={"70 item"}
            src={phones}
            alt={"phones"}
          />
          <CatHome
            title={"headphones"}
            item={"40 item"}
            src={headphone}
            alt={"headphone"}
          />
          <CatHome
            title={"accessories"}
            item={"7 item"}
            src={acc}
            alt={"accessories"}
          />

          <CatHome
            title={"portable speakers"}
            item={"700 item"}
            src={speaker}
            alt={"speaker"}
          />

          <CatHome
            title={"home appliances"}
            item={"250 item"}
            src={homeApp}
            alt={"homeApp"}
          />
        </div>
      </section>
      <section className="sec-4 paddingX py-5 bg-white">
        <Marquee>
          <ImgMarquee src={brand1} />
          <ImgMarquee src={brand2} />
          <ImgMarquee src={brand3} />
          <ImgMarquee src={brand4} />
          <ImgMarquee src={brand5} />
          <ImgMarquee src={brand6} />
          <ImgMarquee src={brand7} />
          <ImgMarquee src={brand8} />
        </Marquee>
      </section>
      <section className="sec-5 paddingX py-5 bg-slate-100">
        <div className="flex flex-col gap-5 relative">
          <div className="head flex items-center justify-between relative">
            <h3 className="md:text-3xl font-bold capitalize">
              featured collection
            </h3>
            <div className="flex items-center md:mr-0 gap-1 relative">
              <IoMdArrowDropleft
                className="bg-black text-white h-8 mx-0 rounded cursor-pointer swiper-button-next-product"
                size={25}
              />
              <IoMdArrowDropright
                className="bg-black text-white h-8 mx-0 rounded cursor-pointer swiper-button-prev-product"
                size={25}
              />
            </div>
          </div>
          <div className="cards">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={{
                prevEl: ".swiper-button-prev-product",
                nextEl: ".swiper-button-next-product",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              className="mySwiper w-full"
            >
              {productsState && productsState?.length > 0
                ? productsState.slice(4).map((product) => (
                    <SwiperSlide key={product._id}>
                      <CardProduct
                        id={product._id}
                        src1={product.images[0]}
                        src2={product.images[1]}
                        stars={product.totalRate}
                        brand={product.brand}
                        details={product.description.substring(0, 50)}
                        price={product.price}
                      />
                    </SwiperSlide>
                  ))
                : "loading"}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="sec-5 paddingX py-5 bg-slate-100">
        <div className="flex flex-col gap-5">
          <div className="head flex items-center justify-between">
            <h3 className="md:text-3xl font-bold capitalize">
              our latest news
            </h3>
            <div className="flex items-center md:mr-0 gap-1 relative">
              <IoMdArrowDropleft
                className="bg-black text-white h-8 mx-0 rounded cursor-pointer swiper-button-next-blog"
                size={25}
              />
              <IoMdArrowDropright
                className="bg-black text-white h-8 mx-0 rounded cursor-pointer swiper-button-prev-blog"
                size={25}
              />
            </div>
          </div>
          <div className="cards">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={{
                prevEl: ".swiper-button-prev-blog",
                nextEl: ".swiper-button-next-blog",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              className="mySwiper w-full"
            >
              {blogsState && blogsState?.length > 0
                ? blogsState.map((blog) => (
                    <SwiperSlide key={blog._id}>
                      <CardBlog
                        title={blog.title}
                        id={blog._id}
                        date={blog.createdAt.split("T")[0]}
                        src={blog.image}
                        alt={blog.title}
                        details={blog.description.substring(0, 30)}
                      />
                    </SwiperSlide>
                  ))
                : "loading"}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

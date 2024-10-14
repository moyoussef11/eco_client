import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CardBlog = ({ src, date, title, alt, details, id }) => {
  return (
    <div className="card bg-slate-100 rounded flex flex-col gap-5 shadow-lg">
      <img
        loading="lazy"
        className="rounded w-full object-contain h-52"
        src={src}
        alt={alt}
      />
      <div className="px-3 flex flex-col gap-3">
        <span className="text-sm text-gray-400">{date}</span>
        <h2 className="md:text-2xl font-bold capitalize">{title.substring(0,15)}...</h2>
        <p className="text-gray-500 capitalize">{details}...</p>
        <Link
          className="bg-black text-white w-fit p-2 rounded-md capitalize mb-4"
          to={`/blogs/${id}`}
        >
          read more
        </Link>
      </div>
    </div>
  );
};

CardBlog.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  id: propTypes.string,
  date: propTypes.string,
  title: propTypes.string,
  details: propTypes.string,
};

export default CardBlog;

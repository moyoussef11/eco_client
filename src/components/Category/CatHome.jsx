import PropTypes from "prop-types";
const CatHome = ({ title, item, src, alt }) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-400">
      <div className="flex flex-col">
        <h6 className="capitalize font-bold">{title}</h6>
        <span className="text-gray-400">{item}</span>
      </div>
      <img className="h-24 w-24 object-contain" src={src} alt={alt} />
    </div>
  );
};

CatHome.propTypes = {
  title: PropTypes.string,
  item: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CatHome;

import propTypes from "prop-types";

const ImgMarquee = ({ src }) => {
  return (
    <div className="mx-10">
      <img className="w-24" src={src} alt="brand" />
    </div>
  );
};
ImgMarquee.propTypes = {
  src: propTypes.string,
};

export default ImgMarquee;

import propTypes from "prop-types";

const Input = ({ type, label, onchange, value, name }) => {
  return (
    <div className="relative z-0 bg-white rounded">
      <input
        type={type}
        id={label}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-[#ffd333] peer`}
        placeholder=""
        value={value}
        name={name}
        onChange={onchange}
      />
      <label
        htmlFor={label}
        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 capitalize font-bold top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
      >
        {label}
      </label>
    </div>
  );
};
Input.propTypes = {
  type: propTypes.string,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  name: propTypes.string,
  label: propTypes.string,
  onchange: propTypes.func,
};

export default Input;

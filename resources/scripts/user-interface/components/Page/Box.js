import { __ } from '../../utils/wp';

/**
 * Box
 *
 * @param {object} props
 */
const Box = ({ title, children }) => {
  return (
    <div
      className="
        relative
        border
        border-gray-5
        bg-white
      "
    >
      <div
        className="
          py-12
          px-16
          flex
          flex-wrap
          items-center
          border-b
          border-gray-5
        "
      >
        <h2
          className="
            w-full
            m-0
            text-14
            font-600
            text-gray-100
          "
        >
          {__(title)}
        </h2>
      </div>

      {children}
    </div>
  );
};

export default Box;

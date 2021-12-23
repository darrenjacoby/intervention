// import { ExternalLink } from '@wordpress/components';

const Outbound = ({ href, children }) => {
  return (
    <a
      href={href}
      className="
        flex
        items-center
        mx-4
        h-full
        no-underline
        text-14
        text-gray-50"
    >
      {children}
    </a>
  );
};

export default Outbound;

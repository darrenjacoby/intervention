import { ExternalLink } from '@wordpress/components';

const Outbound = ({ href, children }) => {
  return (
    <ExternalLink
      href={href}
      className="
        flex
        items-center
        mx-4
        h-full
        no-underline
        text-14
        text-gray-40"
    >
      {children}
    </ExternalLink>
  );
};

export default Outbound;

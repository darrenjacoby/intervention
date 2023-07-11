// import { ExternalLink } from '@wordpress/components';

const OutboundLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
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

export { OutboundLink };

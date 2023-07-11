/**
 * Main
 *
 * @param {object} props
 */
const Main = ({ children }) => {
	return (
		<div
			className="
				w-full
				lg:w-[240px]
				xl:w-[360px]
				2xl:w-[480px]
				flex
				flex-col
				lg:border-l
				border-gray-5
				lg:order-1"
		>
			{children}
		</div>
	);
};

export { Main };

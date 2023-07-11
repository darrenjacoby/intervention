const Header = ({ children }) => {
	return (
		<div
			className="
				h-[60px]
				py-0
				px-16
				flex
				justify-between
				z-30
				bg-white
				border-b
				border-gray-5"
		>
			{children}
		</div>
	);
};

export { Header };

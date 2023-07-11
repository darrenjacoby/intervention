import { more } from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Use Window Dimensions
 *
 * @description get window dimensions to collapse panels on mobile.
 *
 * @returns {function} useWindowDimensions
 */
const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({ width: window.innerWidth });
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

/**
 * Sidebar
 *
 * @description layout for page sidebar.
 *
 * @param {object} props
 * @returns <Sidebar />
 */
const Sidebar = ({ children }) => {
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

/**
 * Sidebar Group
 *
 * @description layout for sidebar group.
 *
 * @param {object} props
 * @returns <SidebarGroup />
 */
const SidebarGroup = ({ children, title }) => {
	const { width } = useWindowDimensions();

	return (
		<Panel
			className="
				border-0
				border-b
				border-gray-5
			"
		>
			<PanelBody
				title={title}
				icon={more}
				initialOpen={width >= 960 ? true : false}
				className="w-full"
			>
				<PanelRow>{children}</PanelRow>
			</PanelBody>
		</Panel>
	);
};

/**
 * Sidebar Checkbox Flex
 *
 * @description layout for sidebar checkbox flex.
 *
 * @param {object} props
 * @returns <SidebarCheckboxFlex />
 */
const SidebarCheckboxFlex = ({ children }) => {
	return <div className="w-full flex flex-wrap">{children}</div>;
};

/**
 * Sidebar Checkbox Item
 *
 * @description layout for sidebar checkbox item.
 *
 * @param {object} props
 * @returns <SidebarCheckboxItem />
 */
const SidebarCheckboxItem = ({ children }) => {
	return (
		<div className="w-1/2 md:w-1/4 lg:w-full xl:w-1/2 mb-8">{children}</div>
	);
};

export { Sidebar, SidebarGroup, SidebarCheckboxFlex, SidebarCheckboxItem };

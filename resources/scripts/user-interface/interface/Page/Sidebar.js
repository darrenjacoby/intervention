import { more } from '@wordpress/element';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

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
        initialOpen={true}
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

import { Icon } from '@wordpress/components';

const IconUndo = () => {
  return (
    <>
      <span className="hidden lg:inline">{__('Undo')}</span>
      <Icon
        className="
          w-12
          flex
          items-center
          justify-center
          text-16
          lg:hidden
        "
        icon="undo"
      />
    </>
  );
};

export { IconUndo };

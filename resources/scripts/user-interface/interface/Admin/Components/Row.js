import { Disabled, Icon } from '@wordpress/components';
import { PseudoFade } from '../../Page/PseudoFade';
import { __ } from '../../../utils/wp';

/**
 * Row
 *
 * @description layout for row.
 *
 * @param {object} param
 * @returns <Row />
 */
const Row = ({ immutable, children, isButton = false }) => {
  const disabled = <Disabled className="w-full flex">{children}</Disabled>;

  return (
    <div
      className={`
        row
        relative
        min-h-[44px]
        px-1
        flex-1
        flex
        text-14
        text-gray-50
        leading-none
        border-t
        border-gray-2
        first:border-0
        ${isButton ? 'focus-within:text-primary-10 row-button' : ''}
      `}
    >
      {immutable ? disabled : <>{children}</>}
    </div>
  );
};

/**
 * Row In
 *
 * @description layout for application row in when key and value are not required.
 *
 * @param {object} props
 * @returns <RowIn />
 */
const RowIn = ({ children, isHierachical = false }) => {
  return (
    <div
      className="
        relative
        w-full
        h-full
        truncate"
    >
      <div
        className={`
          absolute
          inset-0
          pr-8
          flex
          items-center
          ${isHierachical ? 'pl-16' : 'pl-8'}
        `}
      >
        <span className="leading-none">{children}</span>
        <PseudoFade />
      </div>
    </div>
  );
};

/**
 * Row Key
 *
 * @description layout for row key.
 *
 * @params {object} props
 * @returns <RowKey />
 */
const RowKey = ({ children }) => {
  return (
    <div
      className="
        relative
        w-[35%]
        h-[44px]
        px-8
        pt-1
        flex
        items-center
        truncate
        lg:w-1/2"
    >
      {children}
      <PseudoFade />
    </div>
  );
};

/**
 * Row Inset
 *
 * @description layout for row inset used on boolean groups.
 *
 * @params {object} props
 * @returns <RowInset />
 */
const RowInset = ({ children }) => {
  return (
    <div className="ml-48 border-l border-t border-gray-2">{children}</div>
  );
};

/**
 * Row Value
 *
 * @description layout for row value.
 *
 * @params {object} props
 * @returns <RowValue />
 */
const RowValue = ({ children }) => {
  return (
    <div
      className="
        row-value
        relative
        flex-1
        px-12
        flex
        items-center
        border-l
        border-gray-2"
    >
      {children}
    </div>
  );
};

/**
 * Row Value Undo
 *
 * @returns <RowValueUndo>
 */
const RowValueUndo = ({ children }) => {
  return (
    <div className="pl-6 h-[44px] flex items-center self-start">{children}</div>
  );
};

/**
 * Row Value Undo In
 *
 * @returns <RowValueUndoContent>
 */
const RowValueUndoIn = () => {
  return (
    <>
      <span className="hidden lg:block">{__('Undo')}</span>
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

/**
 * Row State
 *
 * @description layout for row state.
 *
 * @param {object} param
 * @returns <RowState />
 */
const RowState = ({ state = false }) => {
  /**
   * Tasks
   */
  const removed = () => {
    return state === true;
  };

  const edited = () => {
    return typeof state !== 'boolean' && state !== '';
  };

  /**
   * Render
   */
  return (
    <Disabled.Consumer>
      {(isDisabled) => (
        <div
          className="
            min-w-[48px]
            border-r
            border-gray-2
            z-0"
        >
          <div className="h-[44px] flex items-center justify-center">
            {!isDisabled && (
              <>
                {removed() && <Icon icon="saved" />}
                {edited() && <Icon icon="editor-textcolor" />}
              </>
            )}

            {isDisabled && <Icon icon="editor-code" />}
          </div>
        </div>
      )}
    </Disabled.Consumer>
  );
};

/**
 * Row Disabled
 *
 * @returns <RowDisabled />
 */
/*
const RowDisabled = ({ state, children }) => {
  const immutable = <Disabled className="w-full flex">{children}</Disabled>;
  return state ? immutable : <></>;
};
*/

export {
  Row,
  RowIn,
  RowInset,
  RowKey,
  RowValue,
  RowValueUndo,
  RowValueUndoIn,
  RowState,
};

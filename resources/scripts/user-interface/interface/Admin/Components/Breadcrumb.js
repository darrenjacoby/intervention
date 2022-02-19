import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
// import { ToolbarTitle } from '../../Page/Toolbar';
import { pathAtom, selectedIndexPathAtom } from '../../../atoms/admin';
import { getInterventionKey } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Breadcrumb
 *
 * @returns <Breadcrumb />
 */
const Breadcrumb = () => {
  const [, setPath] = useAtom(pathAtom);
  const [path] = useAtom(selectedIndexPathAtom);
  const paths = path.split('/');

  /**
   * Is Path
   *
   * @returns {boolean}
   */
  const isPath = () => paths[0] !== '';

  /**
   * Handler
   *
   * @param {string} k
   */
  const handler = (k) => {
    const pos = path.indexOf(k) + k.length;
    setPath(path.substring(0, pos));
  };

  /**
   * Render
   */
  return (
    <div
      className="
        relative
        w-full
        h-[50px]
        flex
        border-b
        border-gray-5
        pl-16"
    >
      {/*<ToolbarTitle>Browse</ToolbarTitle>*/}
      <div className="flex border-r border-gray-2">
        <div
          className="
            h-full
            flex
            items-center
            pr-[8px]"
        >
          <Button className="text-14  is-blank" onClick={() => handler('')}>
            {__('admin')}
          </Button>
        </div>

        {isPath() &&
          paths.map((item) => (
            <div key={item} className="relative pr-[8px] pl-[10px]">
              <div className="breadcrumb-divider"></div>
              <div className="h-full flex items-center">
                <Button
                  key={item}
                  className="text-14 is-blank"
                  onClick={() => handler(item)}
                >
                  {getInterventionKey(item)}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Breadcrumb };

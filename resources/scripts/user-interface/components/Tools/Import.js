import { useState, useEffect, more } from '@wordpress/element';
import {
  RadioControl,
  Panel,
  PanelBody,
  PanelRow,
} from '@wordpress/components';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import Box from '../Page/Box';
import Sidebar from '../Page/Sidebar';
import Toolbar from '../Page/Toolbar';
import ToolbarFromTo from '../Page/ToolbarFromTo';
import Loader from '../Page/Loader';
import ImportNotice from '../Page/ImportNotice';
import ImportRow from '../Page/ImportRow';
import ImportRowEmpty from '../Page/ImportRowEmpty';
import { __ } from '../../utils/wp';

apiFetch.use(apiFetch.createNonceMiddleware(intervention.nonce));

const Import = () => {
  const storage = sessionStorage.getItem('intervention-tools-import-radio');
  const [init, setInit] = useState(false);
  const [radio, setRadio] = useState(storage ? storage : 'all');
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [diff, setDiff] = useState(0);
  const [imported, setImported] = useState({ completed: [], skipped: [] });
  const [buttonText, setButtonText] = useState(__('Import'));

  /**
   * Init
   */
  useEffect(() => {
    /**
     * Fetch the data from `Import.php`.
     */
    apiFetch({
      method: 'POST',
      url: intervention.route.import.url,
    }).then((res) => {
      setData(res.items);
      setDiff(res.diff);
      setInit(true);
    });
  }, []);

  /**
   * Radio Filter
   */
  useEffect(() => {
    setList(filterList(radio));
    sessionStorage.setItem('intervention-tools-import-radio', radio);
  }, [data, radio]);

  /**
   * Filter List
   */
  const filterList = (filter) => {
    return data.filter(({ intervention, database }) => {
      if (filter === 'match') {
        return intervention.value === database.value;
      }
      if (filter === 'mismatch') {
        return intervention.value !== database.value;
      }
      return true;
    });
  };

  /**
   * Handle Import
   */
  const handleImport = () => {
    setButtonText(__('Importing'));

    apiFetch({
      url: intervention.route.import.url,
      method: 'POST',
      data: { import: true },
    }).then((res) => {
      setData(res.items);
      setDiff(res.diff);
      setImported(res.imported);
      setButtonText(__('Import'));
    });
  };

  /**
   * Render
   */
  return (
    <Box title={__('Import')}>
      <div className="flex flex-wrap w-full">
        <Sidebar>
          <Panel className="border-0 border-b border-gray-5">
            <PanelBody
              title={__('Show')}
              icon={more}
              initialOpen={true}
              className="w-full"
            >
              <PanelRow>
                <RadioControl
                  selected={radio}
                  options={[
                    { label: __('All'), value: 'all' },
                    { label: __('Mismatch'), value: 'mismatch' },
                    { label: __('Match'), value: 'match' },
                  ]}
                  onChange={(value) => setRadio(value)}
                />
              </PanelRow>
            </PanelBody>
          </Panel>
        </Sidebar>

        <div className="w-full flex-1">
          <Toolbar className="flex">
            <ToolbarFromTo from="Intervention" to={__('Database')} />

            <Button
              className="is-primary"
              onClick={() => handleImport()}
              disabled={diff === 0}
            >
              {buttonText}
            </Button>
          </Toolbar>

          {!init && <Loader />}

          {init && (
            <ImportNotice imported={imported} diff={diff} setRadio={setRadio} />
          )}

          {init && list.length === 0 && <ImportRowEmpty />}

          <div>
            {list.map(({ intervention, database }) => (
              <ImportRow
                key={database.key}
                intervention={intervention}
                database={database}
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Import;

import { render } from '@wordpress/element';
import App from './user-interface/components/App';

window.addEventListener('load', () => {
  render(<App />, document.getElementById('intervention'));
});

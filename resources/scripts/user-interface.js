import { render } from '@wordpress/element';
import { App } from './user-interface/interface/App';

window.addEventListener('load', () => {
	render(<App />, document.getElementById('intervention'));
});

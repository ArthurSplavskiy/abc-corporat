import * as functions from './core/utils/functions.js';
import * as forms from './core/forms/forms.js';
import './core/modules/animation.js';
import './core/modules/sliders.js';
import './core/forms/select.js';
import './core/modules/hoverTabs.js';
import '../scss/style.scss';
import {documentClick} from './core/events/click.js';

const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

	forms.formFieldsInit();
	forms.formSubmit(true);
	forms.formViewpass();
	functions.setPhoneMask();
	functions.spollers();
	functions.tabs();

	document.addEventListener('click', documentClick);
};

window.addEventListener('load', init);
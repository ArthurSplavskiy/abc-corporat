import * as functions from './core/utils/functions.js';
import * as forms from './core/forms/forms.js';
import './core/modules/animation.js';
import './core/modules/sliders.js';
import './core/forms/select.js';
import './core/modules/hoverTabs.js';
import './core/modules/map.js';
import '../scss/style.scss';
import { documentClick } from './core/events/click.js';
import ScrollObserver from './core/utils/observer.js';

const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

	forms.formFieldsInit();
	forms.formSubmit(true);
	functions.setPhoneMask();
	functions.spollers();
	functions.tabs();

	functions.addLottieAnimation('[data-lottie="preloader-a"]', 'others/lottie/a.json');
	functions.addLottieAnimation('[data-lottie="preloader-b"]', 'others/lottie/b.json');
	functions.addLottieAnimation('[data-lottie="preloader-c"]', 'others/lottie/c.json');
	setTimeout(() => {
		functions.addLottieAnimation('[data-lottie="a"]', 'others/lottie/a.json');
		functions.addLottieAnimation('[data-lottie="b"]', 'others/lottie/b.json');
		functions.addLottieAnimation('[data-lottie="c"]', 'others/lottie/c.json');
		functions.addLottieAnimation(
			'[data-lottie="menu-btn-decor"]',
			'others/lottie/menu-btn-decor.json'
		);
		functions.addLottieAnimation('[data-lottie="hero-anchor"]', 'others/lottie/anchor.json');
	}, 4000)

	functions.addLottieAnimation('[data-lottie="s-media-decor"]', 'others/lottie/2.json', true);

	functions.addLottieAnimation(
		'[data-lottie="s-decor-lottie-left"]',
		'others/lottie/s-decor-lottie-left.json',
		true
	);
	functions.addLottieAnimation(
		'[data-lottie="s-decor-lottie-right"]',
		'others/lottie/s-decor-lottie-right.json',
		true
	);
	functions.addLottieAnimation(
		'[data-lottie="advantage-decor"]',
		'others/lottie/advantage-decor.json',
		true
	);

	new ScrollObserver({
		element: '[data-lottie="anchor"]',
		animationIn: () =>
			functions.addLottieAnimation('[data-lottie="anchor"]', 'others/lottie/anchor.json'),
		observerOptions: {
			threshold: 1.0
		}
	});

	document.addEventListener('click', documentClick);
};

window.addEventListener('load', init);

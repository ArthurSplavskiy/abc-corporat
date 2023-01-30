/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 840:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ documentClick)
/* harmony export */ });
/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(994);




const $popupCV = document.querySelector('#popup-cv');
const $menusSecondLvl = document.querySelectorAll('[data-second-lvl]');
const $pageMenu = document.querySelector('[data-menu]');
const $pageMenuBtn = document.querySelector('[data-menu-btn]');

const documentClick = (e) => {
    const targetElement = e.target;

    // POPUP ===================
    const $popupTriggerOpen = _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .isTarget */ .hx(targetElement, '[data-popup-open="cv"]');
    if($popupTriggerOpen) {
        $popupCV && _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__/* .popup.open */ .g.open('#popup-cv');
        if (_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyLockStatus */ .fA) {
            (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyLockToggle */ .BQ)();
        }
    }

    if(targetElement.closest('.popup-close')) {
        _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__/* .popup.close */ .g.close(e, '.popup-close');
        if (_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyLockStatus */ .fA) {
            (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyUnlock */ .xF)();
        }
    }
    if(targetElement.closest('.popup') && !targetElement.closest('.popup-content')) {
        _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__/* .popup.close */ .g.close(e, '.popup');
        if (_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyLockStatus */ .fA) {
            (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyUnlock */ .xF)();
        }
    }
    // ===================

    // SECOND LVL MENU ===================
    const $menuSecondLvlBtn = _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .isTarget */ .hx(targetElement, '[data-second-lvl-btn]');
    if($menuSecondLvlBtn) {
        const btnID = $menuSecondLvlBtn.dataset.secondLvlBtn;
        const btnParent = $menuSecondLvlBtn.parentNode;

        if(!btnParent.classList.contains('js-active')) {
            btnParent.classList.add('js-active');
            (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* ._slideDown */ .zL)($menusSecondLvl[btnID]);
        } else {
            btnParent.classList.remove('js-active');
            (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* ._slideUp */ .Ww)($menusSecondLvl[btnID]);
        }
    }
    // ===================

    // MENU BUTTON ===================
    const $menuBtn = _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .isTarget */ .hx(targetElement, '[data-menu-btn]')
    if ($menuBtn && $pageMenu) {
        if (_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyLockStatus */ .fA) {
            (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .bodyLockToggle */ .BQ)();
            $menuBtn.classList.toggle('js-open');
            $pageMenu.classList.toggle('js-open');
        }
    }
    const $menuOverlay = _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .isTarget */ .hx(targetElement, '[data-menu-overlay]')
    if($menuOverlay) {
        if($pageMenu.classList.contains('js-open')) {
            $pageMenu.classList.remove('js-open');
            $pageMenuBtn.classList.remove('js-open');
        }
    }
    // ===================
};

/***/ }),

/***/ 491:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gz": () => (/* binding */ formSubmit),
/* harmony export */   "MK": () => (/* binding */ formFieldsInit)
/* harmony export */ });
/* unused harmony exports formValidate, formViewpass, formQuantity, formRating, formPricerange */
/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(994);
// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// Вспомогательные функции

// Модуль попапа

// Модуль прокрутки к блоку
// import { gotoBlock } from "../scroll/gotoblock.js";
//==============================================================================================================================================================================================================================================================================================================================

/*
Чтобы поле участвовало в валидации добавляем атрибут data-required
Особые проверки:
data-required="email" - вадидация E-mail

Чтобы поле валидировалось при потере фокуса, 
к атрибуту data-required добавляем атрибут data-validate
*/

// Работа с полями формы. Добавление классов, работа с placeholder
function formFieldsInit() {
	const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');

	//setPhoneMask();
	//formViewpass();
	//setDateMask();
	//setFloatLabels();
	(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .setFileInputs */ .it)();

	if (formFields.length) {
		formFields.forEach(formField => {
			formField.dataset.placeholder = formField.placeholder;
		});
	}
	document.body.addEventListener("focusin", function (e) {
		const targetElement = e.target;
		if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
			if (targetElement.dataset.placeholder) {
				targetElement.placeholder = '';
			}
			targetElement.classList.add('_focus');
			targetElement.parentElement.classList.add('_focus');

			formValidate.removeError(targetElement);
		}

		(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .setPhoneMask */ .Hp)()
	});
	document.body.addEventListener("focusout", function (e) {
		const targetElement = e.target;
		if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
			if (targetElement.dataset.placeholder) {
				targetElement.placeholder = targetElement.dataset.placeholder;
			}
			targetElement.classList.remove('_focus');
			targetElement.parentElement.classList.remove('_focus');

			// Моментальная валидация
			if (targetElement.hasAttribute('data-validate')) {
				formValidate.validateInput(targetElement);
			}
		}
	});
}
// Валидация форм
let formValidate = {
	getErrors(form) {
		let error = 0;
		let formRequiredItems = form.querySelectorAll('*[data-required]');
		if (formRequiredItems.length) {
			formRequiredItems.forEach(formRequiredItem => {
				if (formRequiredItem.offsetParent !== null) {
					error += this.validateInput(formRequiredItem);
				}
				if (formRequiredItem.parentElement.classList.contains('select')) {
					if (formRequiredItem.parentElement.offsetParent !== null) {
						error += this.validateInput(formRequiredItem);
					}
				}
			});
		}
		return error;
	},
	validateInput(formRequiredItem) {
		let error = 0;
		if (formRequiredItem.dataset.required === "email") {
			formRequiredItem.value = formRequiredItem.value.replace(" ", "");
			if (this.emailTest(formRequiredItem)) {
				if(!formRequiredItem.value) {
					this.addError(formRequiredItem);
				} else {
					this.addUncorrectError(formRequiredItem);
				}
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		} else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
			this.addError(formRequiredItem);
			error++;
		} else if (formRequiredItem.dataset.required === "select") {
			let selectDefault = formRequiredItem.nextElementSibling.querySelector('.select__option[hidden]');

			if(+selectDefault.dataset.value === 1) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		}  else if (formRequiredItem.dataset.required === "password") {
			formRequiredItem.value = formRequiredItem.value.replace(" ", "");

			const id = formRequiredItem.dataset.passwordget;
			const initialPassword = document.querySelector(`*[data-passwordset='${id}']`);

			if(!formRequiredItem.value) {
				this.addError(formRequiredItem);
				error++;
			} else if(this.passwordTest(formRequiredItem)) {
				this.addPasswordError(formRequiredItem);
				error++;
			} else if (id) {
				if (formRequiredItem.value !== initialPassword.value) {
					this.addConfirmPasswordError(formRequiredItem);
					error++;
				}
			}
			else {
				this.removeError(formRequiredItem);
			}
		}
		else {
			if (!formRequiredItem.value) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		}
		return error;
	},
	addError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationUnfillError && formRequiredItem.type !== "checkbox") {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationUnfillError + '</div>');
		}
	},
	addUncorrectError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationUncorrectError) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationUncorrectError + '</div>');
		}
	},
	addPasswordError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationShortPassError) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationShortPassError + '</div>');
		}
	},
	addConfirmPasswordError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationUncorrectError) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationConfirmPassError + '</div>');
		}
	},
	removeError(formRequiredItem) {
		formRequiredItem.classList.remove('_error');
		formRequiredItem.parentElement.classList.remove('_error');
		if (formRequiredItem.parentElement.querySelector('.form__error')) {
			formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form__error'));
		}
	},
	formClean(form) {
		let inputs = form.querySelectorAll('input,textarea');
		for (let index = 0; index < inputs.length; index++) {
			const el = inputs[index];
			el.parentElement.classList.remove('_focus');
			el.classList.remove('_focus');
			el.value  = ''; // el.dataset.placeholder
		}
		let checkboxes = form.querySelectorAll('.checkbox__input');
		if (checkboxes.length > 0) {
			for (let index = 0; index < checkboxes.length; index++) {
				const checkbox = checkboxes[index];
				//checkbox.checked = false;
				if(checkbox.hasAttribute('value')) {
					checkbox.removeAttribute('value')
				}
			}
		}
		let selects = form.querySelectorAll('select');
		if (selects.length > 0) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_default_value = select.getAttribute('data-default');
				select.value = select_default_value;
				select_item(select);
			}
		}
		// float label
		let floatLabels = form.querySelectorAll('.content-name');
		if (floatLabels.length > 0) {
			for (let index = 0; index < floatLabels.length; index++) {
				const label = floatLabels[index];
				label.classList.remove('_active')
			}
		}
		// file input
		let fileInputs = form.querySelectorAll('.file__input');
		let previewFileText = form.querySelectorAll('.message-text');
		if (fileInputs.length > 0) {
			for (let index = 0; index < fileInputs.length; index++) {
				const fileInput = fileInputs[index];
				fileInput.classList.remove('full')
			}
			for (let index = 0; index < previewFileText.length; index++) {
				const text = previewFileText[index];
				text.innerText = fileInputs[0].getAttribute('data-placeholder') || ''
			}
		}
	},
	emailTest(formRequiredItem) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
	},
	passwordTest(formRequiredItem) {
		if(formRequiredItem.value.length < 8) {
			return true
		} else {
			return false
		}
	}
}
/* Отправка форм */
function formSubmit(validate) {
	const forms = document.forms;
	if (forms.length) {
		for (const form of forms) {
			form.addEventListener('submit', formSubmit);
		}
	}
	async function formSubmit(e) {
		const form = e.target;
		const error = validate ? formValidate.getErrors(form) : 0;
		if (error === 0) {
			const message = form.getAttribute('data-message');
			const ajax = form.hasAttribute('data-ajax');
			//SendForm
			if (ajax) {
				e.preventDefault();
				const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
				const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
				const formData = new FormData(form);

				form.classList.add('_sending');
				const response = await fetch(formAction, {
					method: formMethod,
					body: formData
				});
				if (response.ok) {
					let responseResult = await response.json();
					form.classList.remove('_sending');
					if (message) {
						// Нужно подключить зависимость
						_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__/* .popup.open */ .g.open(`${message}`);
					}
					formValidate.formClean(form);
				} else {
					alert("Ошибка");
					form.classList.remove('_sending');
				}
			}
			// If test
			if (form.hasAttribute('data-test')) {
				e.preventDefault();
				if (message) {
					// Нужно подключить зависимость
					_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__/* .popup.open */ .g.open(`${message}`);
				}
				formValidate.formClean(form);
			}
		} else {
			const formError = form.querySelector('._error');
			if (formError && form.hasAttribute('data-goto-error')) {
				// Нужно подключить зависимость
				gotoBlock(formError, 1000, 50);
			}
			e.preventDefault();
		}
	}
}
/* Модуь формы "показать пароль" */
function formViewpass() {
	document.addEventListener("click", function (e) {
		let targetElement = e.target;
		if (targetElement.closest('[class*="__viewpass"]')) {
			let inputType = targetElement.classList.contains('active') ? "password" : "text";
			targetElement.parentElement.querySelector('input').setAttribute("type", inputType);
			targetElement.classList.toggle('active');
		}
	});
}
/* Модуь формы "колличество" */
function formQuantity() {
	document.addEventListener("click", function (e) {
		let targetElement = e.target;
		if (targetElement.closest('.quantity__button')) {
			let value = parseInt(targetElement.closest('.quantity').querySelector('input').value);
			if (targetElement.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				--value;
				if (value < 1) value = 1;
			}
			targetElement.closest('.quantity').querySelector('input').value = value;
		}
	});
}
/* Модуь звездного рейтинга */
function formRating() {
	const ratings = document.querySelectorAll('.rating');
	if (ratings.length > 0) {
		initRatings();
	}
	// Основная функция
	function initRatings() {
		let ratingActive, ratingValue;
		// "Бегаем" по всем рейтингам на странице
		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
		}
		// Инициализируем конкретный рейтинг
		function initRating(rating) {
			initRatingVars(rating);

			setRatingActiveWidth();

			if (rating.classList.contains('rating_set')) {
				setRating(rating);
			}
		}
		// Инициализайция переменных
		function initRatingVars(rating) {
			ratingActive = rating.querySelector('.rating__active');
			ratingValue = rating.querySelector('.rating__value');
		}
		// Изменяем ширину активных звезд
		function setRatingActiveWidth(index = ratingValue.innerHTML) {
			const ratingActiveWidth = index / 0.05;
			ratingActive.style.width = `${ratingActiveWidth}%`;
		}
		// Возможность указать оценку 
		function setRating(rating) {
			const ratingItems = rating.querySelectorAll('.rating__item');
			for (let index = 0; index < ratingItems.length; index++) {
				const ratingItem = ratingItems[index];
				ratingItem.addEventListener("mouseenter", function (e) {
					// Обновление переменных
					initRatingVars(rating);
					// Обновление активных звезд
					setRatingActiveWidth(ratingItem.value);
				});
				ratingItem.addEventListener("mouseleave", function (e) {
					// Обновление активных звезд
					setRatingActiveWidth();
				});
				ratingItem.addEventListener("click", function (e) {
					// Обновление переменных
					initRatingVars(rating);

					if (rating.dataset.ajax) {
						// "Отправить" на сервер
						setRatingValue(ratingItem.value, rating);
					} else {
						// Отобразить указанную оцнку
						ratingValue.innerHTML = index + 1;
						setRatingActiveWidth();
					}
				});
			}
		}
		async function setRatingValue(value, rating) {
			if (!rating.classList.contains('rating_sending')) {
				rating.classList.add('rating_sending');

				// Отправика данных (value) на сервер
				let response = await fetch('rating.json', {
					method: 'GET',

					//body: JSON.stringify({
					//	userRating: value
					//}),
					//headers: {
					//	'content-type': 'application/json'
					//}

				});
				if (response.ok) {
					const result = await response.json();

					// Получаем новый рейтинг
					const newRating = result.newRating;

					// Вывод нового среднего результата
					ratingValue.innerHTML = newRating;

					// Обновление активных звезд
					setRatingActiveWidth();

					rating.classList.remove('rating_sending');
				} else {
					alert("Ошибка");

					rating.classList.remove('rating_sending');
				}
			}
		}
	}
}
function formPricerange() {
	
const priceSlider = document.querySelector('.price-filter');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1500, 15500],
			connect: true,
			tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
			range: {
				'min': [1500],
				'max': [15500]
			}
		});

		// const priceStart = document.getElementById('price-start');
		// const priceEnd = document.getElementById('price-end');
		// priceStart.addEventListener('change', setPriceValues);
		// priceEnd.addEventListener('change', setPriceValues);

		// function setPriceValues() {
		// 	let priceStartValue;
		// 	let priceEndValue;
		// 	if (priceStart.value != '') {
		// 		priceStartValue = priceStart.value;
		// 	}
		// 	if (priceEnd.value != '') {
		// 		priceEndValue = priceEnd.value;
		// 	}
		// 	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		// }
	}
}



/***/ }),

/***/ 796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export selectModule */
/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
//----- Импорт зависимостей ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Подключение файла стилей
// Базовые стили поключаются в src/scss/forms.scss
// Файл базовых стилей src/scss/forms/select.scss

/*
Документация:
Снипет (HTML): sel
*/
/*
// Настройки
Для селекта (select):
class="имя класса" - модификатор к конкретному селекту
multiple - мультивыбор
data-tags - режим тегов, только для (только для multiple)
data-scroll - включит прокрутку для выпадающего списка, дополнительно можно подключить кастомный скролл simplebar в app.js. Указанное число для атрибута ограничит высоту
data-checkbox - стилизация элементов по checkbox (только для multiple)
data-show-selected - отключает скрытие выбранного элемента
data-search - позволяет искать по выпадающему списку
data-open - селект открыт сразу

Для плейсхолдера (Плейсхолдер - это option с value=""):
data-label для плейсхолдера, добавляет label к селекту
data-show для плейсхолдера, показывает его в списке (только для единичного выбора)

Для элемента (option):
data-class="имя класса" - добавляет класс
data-asset="путь к картинке или текст" - добавляет структуру 2х колонок и данными
*/

/*
// Возможные доработки:
попап на мобилке
*/

// Получение всех select на странице
const selectItems = document.querySelectorAll('select');
// Объект построения Select
const selectModule = {
	// CSS классы модуля
	selectClasses: {
		classSelect: "select", // Главный блок
		classSelectBody: "select__body", // Тело селекта
		classSelectTitle: "select__title", // Заголовок
		classSelectValue: "select__value", // Значение в заголовке
		classSelectLabel: "select__label", // Лабел
		classSelectInput: "select__input", // Поле ввода
		classSelectText: "select__text", // Оболочка текстовых данных
		classSelectOptions: "select__options", // Выпадающий список
		classSelectPlaceholder: "select__placeholder", // Выпадающий список
		classSelectOptionsScroll: "select__scroll", // Оболочка при скролле
		classSelectOption: "select__option", // Пункт
		classSelectContent: "select__content", // Оболочка контента в заголовке
		classSelectRow: "select__row", // Ряд
		classSelectData: "select__asset", // Дополнительные данные
		classSelectDisabled: "_select-disabled", // Запрешен
		classSelectTag: "_select-tag", // Класс тега
		classSelectOpen: "_select-open", // Список открыт
		classSelectActive: "_select-active", // Список выбран
		classSelectFocus: "_select-focus", // Список в фокусе
		classSelectMultiple: "_select-multiple", // Мультивыбор
		classSelectCheckBox: "_select-checkbox", // Стиль чекбокса
		classSelectOptionSelected: "_select-selected", // Выбранный пункт
	},
	// Конструктор CSS класса
	getSelectClass(className) {
		return `.${className}`;
	},
	// Геттер элементов псевдоселекта
	getSelectElement(selectItem, className) {
		return {
			originalSelect: selectItem.querySelector('select'),
			selectElement: selectItem.querySelector(selectModule.getSelectClass(className)),
		}
	},
	// Функция инициализации всех селектов
	selectsInit(selectItems) {
		selectItems.forEach((originalSelect, index) => {
			originalSelect.dataset.id = index;
			selectModule.selectInit(originalSelect);
		});
		// Обработчики событий...
		// ...при клике
		document.addEventListener('click', selectModule.selectsActions);
		// ...при нажатии клавиши
		document.addEventListener('keydown', selectModule.selectsActions);
		// ...при фокусе
		document.addEventListener('focusin', selectModule.selectsActions);
		// ...при потере фокуса
		document.addEventListener('focusout', selectModule.selectsActions);
	},
	// Функция инициализации конкретного селекта
	selectInit(originalSelect) {
		// Создаем оболочку
		let selectItem = document.createElement("div");
		selectItem.classList.add(selectModule.selectClasses.classSelect);
		// Выводим оболочку перед оригинальным селектом
		originalSelect.parentNode.insertBefore(selectItem, originalSelect);
		// Помещаем оригинальный селект в оболочку
		selectItem.appendChild(originalSelect);
		// Скрываем оригинальный селект
		originalSelect.hidden = true;

		// Конструктор косновных элементов
		selectItem.insertAdjacentHTML('beforeend', `<div class="${selectModule.selectClasses.classSelectBody}"><div hidden class="${selectModule.selectClasses.classSelectOptions}"></div></div>`);
		// Запускаем конструктор псевдоселекта
		selectModule.selectBuild(originalSelect);

		// Работа с плейсхолдером
		if (selectModule.getSelectPlaceholder(originalSelect)) {
			// Запоминаем плейсхолдер
			originalSelect.dataset.placeholder = selectModule.getSelectPlaceholder(originalSelect).value;
			// Если включен режим label
			if (selectModule.getSelectPlaceholder(originalSelect).label.show) {
				const selectItemTitle = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement;
				selectItemTitle.insertAdjacentHTML('afterbegin', `<span class="${selectModule.selectClasses.classSelectLabel}">${selectModule.getSelectPlaceholder(originalSelect).label.text ? selectModule.getSelectPlaceholder(originalSelect).label.text : selectModule.getSelectPlaceholder(originalSelect).value}</span>`);
			}
		}
		// Запоминаем скорость
		originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
		// Событие при изменении оригинального select
		originalSelect.addEventListener('change', selectModule.selectChange);
	},
	// Конструктор псевдоселекта
	selectBuild(originalSelect) {
		const selectItem = originalSelect.parentElement;
		// Добавляем ID селекта
		selectItem.dataset.id = originalSelect.dataset.id;
		// Получаем класс оригинального селекта, создаем модификатор и добавляем его
		selectItem.classList.add(originalSelect.getAttribute('class') ? `select_${originalSelect.getAttribute('class')}` : "");
		// Если множественный выбор, добавляем класс
		originalSelect.multiple ? selectItem.classList.add(selectModule.selectClasses.classSelectMultiple) : selectItem.classList.remove(selectModule.selectClasses.classSelectMultiple);
		// Cтилизация элементов под checkbox (только для multiple)
		originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple ? selectItem.classList.add(selectModule.selectClasses.classSelectCheckBox) : selectItem.classList.remove(selectModule.selectClasses.classSelectCheckBox);
		// Сеттер значения заголовка селекта
		selectModule.setSelectTitleValue(selectItem, originalSelect);
		// Сеттер элементов списка (options)
		selectModule.setOptions(selectItem, originalSelect);
		// Если включена опция поиска data-search, запускаем обработчик
		originalSelect.hasAttribute('data-search') ? selectModule.searchActions(selectItem) : null;
		// Если указана настройка data-open, открываем селект
		originalSelect.hasAttribute('data-open') ? selectModule.selectAction(selectItem) : null;
		// Обработчик disabled
		selectModule.selectDisabled(selectItem, originalSelect);
	},
	// Функция реакций на события
	selectsActions(e) {
		const targetElement = e.target;
		const targetType = e.type;
		if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelect)) || targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag))) {
			const selectItem = targetElement.closest('.select') ? targetElement.closest('.select') : document.querySelector(`.${selectModule.selectClasses.classSelect}[data-id="${targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag)).dataset.selectId}"]`);
			const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
			if (targetType === 'click') {
				if (!originalSelect.disabled) {
					if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag))) {
						// Обработка клика на тег
						const targetTag = targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag));
						const optionItem = document.querySelector(`.${selectModule.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
						selectModule.optionAction(selectItem, originalSelect, optionItem);
					} else if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTitle))) {
						// Обработка клика на заголовок селекта
						selectModule.selectAction(selectItem);
					} else if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectOption))) {
						// Обработка клика на элемент селекта
						const optionItem = targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectOption));
						selectModule.optionAction(selectItem, originalSelect, optionItem);
					}
				}
			} else if (targetType === 'focusin' || targetType === 'focusout') {
				if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelect))) {
					targetType === 'focusin' ? selectItem.classList.add(selectModule.selectClasses.classSelectFocus) : selectItem.classList.remove(selectModule.selectClasses.classSelectFocus);
				}
			} else if (targetType === 'keydown' && e.code === 'Escape') {
				selectModule.selectsСlose();
			}
		} else {
			selectModule.selectsСlose();
		}
	},
	// Функция закрытия всех селектов
	selectsСlose() {
		const selectActiveItems = document.querySelectorAll(`${selectModule.getSelectClass(selectModule.selectClasses.classSelect)}${selectModule.getSelectClass(selectModule.selectClasses.classSelectOpen)}`);
		if (selectActiveItems.length) {
			selectActiveItems.forEach(selectActiveItem => {
				selectModule.selectAction(selectActiveItem);
			});
		}
	},
	// Функция открытия/закрытия конкретного селекта
	selectAction(selectItem) {
		const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
		const selectOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
		if (!selectOptions.classList.contains('_slide')) {
			selectItem.classList.toggle(selectModule.selectClasses.classSelectOpen);
			(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* ._slideToggle */ ._y)(selectOptions, originalSelect.dataset.speed);
		}
	},
	// Сеттер значения заголовка селекта
	setSelectTitleValue(selectItem, originalSelect) {
		const selectItemBody = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectBody).selectElement;
		const selectItemTitle = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement;
		if (selectItemTitle) selectItemTitle.remove();
		selectItemBody.insertAdjacentHTML("afterbegin", selectModule.getSelectTitleValue(selectItem, originalSelect));
	},
	// Конструктор значения заголовка
	getSelectTitleValue(selectItem, originalSelect) {
		// Получаем выбранные текстовые значения
		let selectTitleValue = selectModule.getSelectedOptionsData(originalSelect, 2).html;
		// Обработка значений мультивыбора
		// Если включен режим тегов (указана настройка data-tags)
		if (originalSelect.multiple && originalSelect.hasAttribute('data-tags')) {
			selectTitleValue = selectModule.getSelectedOptionsData(originalSelect).elements.map(option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${selectModule.getSelectElementContent(option)}</span>`).join('');
			// Если вывод тегов во внешний блок
			if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
				document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
				if (originalSelect.hasAttribute('data-search')) selectTitleValue = false;
			}
		}
		// Значение(я) или плейсхолдер
		selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder;
		// Если есть значение, добавляем класс
		selectModule.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(selectModule.selectClasses.classSelectActive) : selectItem.classList.remove(selectModule.selectClasses.classSelectActive);
		// Возвращаем поле ввода для поиска или текст
		if (originalSelect.hasAttribute('data-search')) {
			// Выводим поле ввода для поиска

			return `<div class="${selectModule.selectClasses.classSelectTitle}"><span class="${selectModule.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${selectModule.selectClasses.classSelectInput}"></span></div>`;
		} else {
			// Если выбран элемент со своим классом
			const customClass = selectModule.getSelectedOptionsData(originalSelect).elements.length && selectModule.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${selectModule.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : '';
			// Выводим текстовое значение
			return `<button type="button" class="${selectModule.selectClasses.classSelectTitle}"><span class="${selectModule.selectClasses.classSelectValue}"><span class="${selectModule.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
		}
	},
	// Конструктор данных для значения заголовка
	getSelectElementContent(selectOption) {
		// Если для элемента указан вывод картинки или текста, перестраиваем конструкцию
		const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : '';
		const selectOptionDataHTML = selectOptionData.indexOf('img') >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
		let selectOptionContentHTML = ``;
		selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectRow}">` : '';
		selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectData}">` : '';
		selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : '';
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectText}">` : '';
		selectOptionContentHTML += selectOption.textContent;
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		return selectOptionContentHTML;
	},
	// Получение данных плейсхолдера
	getSelectPlaceholder(originalSelect) {
		const selectPlaceholder = Array.from(originalSelect.options).find(option => !option.value);
		if (selectPlaceholder) {
			return {
				value: selectPlaceholder.textContent,
				show: selectPlaceholder.hasAttribute("data-show"),
				label: {
					show: selectPlaceholder.hasAttribute("data-label"),
					text: selectPlaceholder.dataset.label
				}
			}
		}
	},
	// Получение данных из выбранных элементов
	getSelectedOptionsData(originalSelect, type) {
		// Получаем все выбранные объекты из select
		let selectedOptions = [];
		if (originalSelect.multiple) {
			// Если мультивыбор
			// Убираем плейсхолдер, получаем остальные выбранные элементы
			selectedOptions = Array.from(originalSelect.options).filter(option => option.value).filter(option => option.selected);
		} else {
			// Если единичный выбор
			selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
		}
		return {
			elements: selectedOptions.map(option => option),
			values: selectedOptions.filter(option => option.value).map(option => option.value),
			html: selectedOptions.map(option => selectModule.getSelectElementContent(option))
		}
	},
	// Конструктор элементов списка
	getOptions(originalSelect) {
		// Настрока скролла элементов
		let selectOptionsScroll = originalSelect.hasAttribute('data-scroll') ? `data-simplebar` : '';
		let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : '';
		// Получаем элементы списка
		let selectOptions = Array.from(originalSelect.options);
		if (selectOptions.length > 0) {
			let selectOptionsHTML = ``;
			// Если указана настройка data-show, показываем плейсхолдер в списке
			if ((selectModule.getSelectPlaceholder(originalSelect) && !selectModule.getSelectPlaceholder(originalSelect).show) || originalSelect.multiple) {
				selectOptions = selectOptions.filter(option => option.value);
			}
			// Строим и выводим основную конструкцию
			selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${selectModule.selectClasses.classSelectOptionsScroll}">` : '';
			selectOptions.forEach(selectOption => {
				// Получаем конструкцию конкретного элемента списка
				selectOptionsHTML += selectModule.getOption(selectOption, originalSelect);
			});
			selectOptionsHTML += selectOptionsScroll ? `</div>` : '';
			return selectOptionsHTML;
		}
	},
	// Конструктор конкретного элемента списка
	getOption(selectOption, originalSelect) {
		// Если элемент выбран и включен режим мультивыбора, добавляем класс
		const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${selectModule.selectClasses.classSelectOptionSelected}` : '';
		// Если элемент выбрани нет настройки data-show-selected, скрываем элемент
		const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute('data-show-selected') ? `hidden` : ``;
		// Если для элемента указан класс добавляем
		const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : '';
		// Строим и возвращаем конструкцию элемента
		let selectOptionHTML = ``;
		selectOptionHTML += `<button ${selectOptionHide} class="${selectModule.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
		selectOptionHTML += selectModule.getSelectElementContent(selectOption);
		selectOptionHTML += `</button>`;
		return selectOptionHTML;
	},
	// Сеттер элементов списка (options)
	setOptions(selectItem, originalSelect) {
		// Получаем объект тела псевдоселекта
		const selectItemOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
		// Запускаем конструктор элементов списка (options) и добавляем в тело псевдоселекта
		selectItemOptions.innerHTML = selectModule.getOptions(originalSelect);
	},
	// Обработчик клика на элемент списка
	optionAction(selectItem, originalSelect, optionItem) {
		if (originalSelect.multiple) { // Если мультивыбор
			// Выделяем классом элемент
			optionItem.classList.toggle(selectModule.selectClasses.classSelectOptionSelected);
			// Очищаем выбранные элементы 
			const originalSelectSelectedItems = selectModule.getSelectedOptionsData(originalSelect).elements;
			originalSelectSelectedItems.forEach(originalSelectSelectedItem => {
				originalSelectSelectedItem.removeAttribute('selected');
			});
			// Выбираем элементы 
			const selectSelectedItems = selectItem.querySelectorAll(selectModule.getSelectClass(selectModule.selectClasses.classSelectOptionSelected));
			selectSelectedItems.forEach(selectSelectedItems => {
				originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute('selected', 'selected');
			});
		} else { // Если единичный выбор
			// Если не указана настройка data-show-selected, скрываем выбранный элемент
			if (!originalSelect.hasAttribute('data-show-selected')) {
				// Сначала все показать
				if (selectItem.querySelector(`${selectModule.getSelectClass(selectModule.selectClasses.classSelectOption)}[hidden]`)) {
					selectItem.querySelector(`${selectModule.getSelectClass(selectModule.selectClasses.classSelectOption)}[hidden]`).hidden = false;
				}
				// Скрываем выбранную
				optionItem.hidden = true;
			}
			originalSelect.value = optionItem.hasAttribute('data-value') ? optionItem.dataset.value : optionItem.textContent;
			selectModule.selectAction(selectItem);
		}
		// Обновляем заголовок селекта
		selectModule.setSelectTitleValue(selectItem, originalSelect);
		// Вызываем реакцию на изменение селекта
		selectModule.setSelectChange(originalSelect);
	},
	// Реакция на измененение оригинального select
	selectChange(e) {
		selectModule.selectBuild(e.target);
		selectModule.setSelectChange(e.target);
	},
	// Обработчик изменения в селекте
	setSelectChange(originalSelect) {
		const selectItem = originalSelect.parentElement;
		// Вызов коллбэк функции
		selectModule.selectCallback(selectItem, originalSelect);
	},
	// Обработчик disabled
	selectDisabled(selectItem, originalSelect) {
		if (originalSelect.disabled) {
			selectItem.classList.add(selectModule.selectClasses.classSelectDisabled);
			selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement.disabled = true;
		} else {
			selectItem.classList.remove(selectModule.selectClasses.classSelectDisabled);
			selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement.disabled = false;
		}
	},
	// Обработчик поиска по элементам списка
	searchActions(selectItem) {
		const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
		const selectInput = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectInput).selectElement;
		const selectOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
		const selectOptionsItems = selectOptions.querySelectorAll(`.${selectModule.selectClasses.classSelectOption}`);
		selectInput.addEventListener("input", function (e) {
			selectOptionsItems.forEach(selectOptionsItem => {
				if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) {
					selectOptionsItem.hidden = false;
				} else {
					selectOptionsItem.hidden = true;
				}
			});
			// Если список закрыт открываем
			selectOptions.hidden === true ? selectModule.selectAction(selectItem) : null;
		});
	},
	// Коллбэк функция
	selectCallback(selectItem, originalSelect) { },
	// Логгинг в консоль
	setLogging(message) {
		console.log(`[select - info] ${message} `);
	}
}
// Запуск инициализации
selectItems.length ? selectModule.selectsInit(selectItems) : selectModule.setLogging('Нет ни одного select, модуль можно отключить');

/***/ }),

/***/ 158:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
//common uses selectors


let el = {
	header: $('header'),
	preloader: $('.preloader'),
	preloaderCl: 'preloader_hide',
	nav: $('.nav'),
	navToggle: $('[data-toggleNav]'),
	body: $('body'),
	window: $(window),
	document: $(document)
};
let skrollAn;

// sizes window
function sizeWindow() {
	el.windowW = window.innerWidth;
	el.windowtH = window.innerHeight;
	el.documentH = Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
	el.pageScroll = Math.round(pageYOffset);
}

sizeWindow();
window.addEventListener('resize', function () {
	setTimeout(function () {
		sizeWindow();
	}, 1000);
});
window.addEventListener('load', sizeWindow);

// ajax script cache
function ajaxCacheScript(a, b) {
	$.get(a)
		.done(function () {
			$.ajax({
				url: a,
				type: 'GET',
				dataType: 'script',
				cache: true,
				success: b
			});
		})
		.fail(function () {
			console.log('file not exists on link ' + a);
		});
}

// coords
function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return {
		top: box.top,
		left: box.left,
		height: box.height,
		topPage: box.top + pageYOffset,
		leftPage: box.left + pageXOffset
	};
}

function getCoordsJq(elem) {
	let box = elem[0].getBoundingClientRect();
	return {
		top: box.top,
		left: box.left,
		height: box.height,
		topPage: box.top + pageYOffset,
		leftPage: box.left + pageXOffset
	};
}

//scroll animate
let $ease = 'swing';
ajaxCacheScript(dir + 'libs/easing.min.js', function () {
	$ease = 'easeOutCubic';
});

function funScroll(par1) {
	$('html, body').stop().animate(
		{
			scrollTop: par1
		},
		1500,
		$ease
	);
}

let scrollWidth;

function funScrollWidth() {
	let _divCreate = document.createElement('div');
	_divCreate.style.overflowY = 'scroll';
	_divCreate.style.width = '50px';
	_divCreate.style.height = '50px';
	_divCreate.style.visibility = 'hidden';
	document.body.appendChild(_divCreate);
	scrollWidth = _divCreate.offsetWidth - _divCreate.clientWidth;
	document.body.removeChild(_divCreate);
}

funScrollWidth();
window.addEventListener('resize', funScrollWidth);

function funPadding(a) {
	a.css('padding-right', +scrollWidth + 'px');
}

function funPaddingDef(a) {
	a.css('padding-right', 0);
}

function funMargin(a) {
	a.css('margin-right', +scrollWidth + 'px');
}

function funMarginDef(a) {
	a.css('margin-right', 0);
}

// detection Browser
function funBrowser() {
	$.browser = {};
	$.browser.mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
	$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
	$.browser.safari = /safari/.test(navigator.userAgent.toLowerCase());
	$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	$.browser.ie =
		/msie/.test(navigator.userAgent.toLowerCase()) || /rv/.test(navigator.userAgent.toLowerCase());
	switch (true) {
		case $.browser.mozilla:
			return 'firefox';
		case $.browser.chrome:
			return 'chrome';
		case $.browser.safari:
			return 'safari';
		case $.browser.opera:
			return 'opera';
		case $.browser.ie:
			return 'ie';
	}
}

el.body.addClass(funBrowser);

/*
 * Replace all SVG images with inline SVG
 */
function svgInline() {
	$('img[src*="svg"]')
		.not('.preloader__img, .it__itImg')
		.each(function () {
			let $img = $(this),
				imgID = $img.attr('id'),
				imgClass = $img.attr('class'),
				imgURL = $img.attr('src'),
				imgDataAn = $img.attr('data-an'),
				imgDataDur = $img.attr('data-dur'),
				imgDataDel = $img.attr('data-del');

			$.get(
				imgURL,
				function (data) {
					// Get the SVG tag, ignore the rest
					let $svg = $(data).find('svg');
					if ($svg) {
						$svg.find('path').removeAttr('style');
						// Remove any invalid XML tags as per http://validator.w3.org
						$svg.removeAttr('id x y version xmlns xml:space xmlns:a');
						$svg.find('style').detach();
						// Add replaced image ID to the new SVG
						if (imgID !== undefined) $svg.attr('id', imgID);
						// Add replaced image classes to the new SVG
						if (imgClass !== undefined) $svg.attr('class', 'replaced__svg ' + imgClass);
						else $svg.attr('class', 'replaced__svg');
						if (imgDataAn !== undefined) $svg.attr('data-an', imgDataAn);
						if (imgDataDur !== undefined) $svg.attr('data-dur', imgDataDur);
						if (imgDataDel !== undefined) $svg.attr('data-del', imgDataDel);

						// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
						/*if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
         $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
         }*/
						// Replace image with new SVG
						$img.replaceWith($svg);
					}
				},
				'xml'
			);
		});
}

svgInline();

//elements show
function animateEl(elements) {
	let scroll = window.pageYOffset ? window.pageYOffset : 0;
	elements.each(function () {
		let _this = $(this);
		if (_this.hasClass('showEl')) return;
		let cord = getCoordsJq(_this);
		if (cord.top < el.windowtH || cord.top + cord.height < 1) {
			el.elAnimateScroll = el.elAnimateScroll.not(_this);

			if (_this.is('[data-videoAutoplay]')) _this[0].play();
			if (_this.is('[data-del]')) _this.css('animation-delay', _this.data('del') + 's');
			if (_this.is('[data-dur]')) {
				_this.css('animation-duration', _this.data('dur') + 's');

				setTimeout(function () {
					_this.addClass('_pointer');
				}, _this.data('dur') * 1000 + 100);
			} else {
				setTimeout(function () {
					_this.addClass('_pointer');
				}, 1600);
			}
			_this.addClass('_animated ' + _this.data('an'));

			function numCount(el) {
				let sec = 2,
					stepSec = 40,
					frames = 1000 / stepSec,
					i = 0,
					num = parseInt(el.data('num').toString().replace(' ', '')),
					step = parseFloat(num / sec / frames);
				let int = setInterval(function () {
					i += step;
					if (i <= num) _this.html(parseInt(i).toLocaleString('ru'));
					else {
						_this.html(num.toLocaleString('ru'));
						clearInterval(int);
					}
				}, stepSec);
			}

			if (_this.is("[data-an='_num']")) {
				numCount(_this);
				/*setTimeout(function () {
         numCount(_this);
         }, 1000);*/
			}

			/*setTimeout(function () {
       _this.removeClass("_showEl _animated _pointer");
       }, 10000);*/
		}
	});
}

function animateStart() {
	requestAnimationFrame(function () {
		el.elAnimateScroll = $('[data-an]');
		if (el.elAnimateScroll.length) {
			animateEl(el.elAnimateScroll);
			el.window.scroll(function animateElScroll() {
				if (!el.elAnimateScroll.length) el.window.unbind('scroll', animateElScroll);
				animateEl(el.elAnimateScroll);
			});
		}
	});
}

//preloader
function funPreloader() {
	el.preloader.addClass(el.preloaderCl);
	setTimeout(function () {
		animateStart();
	}, 400);
	setTimeout(function () {
		el.preloader.remove();
	}, 1000);
}

$(window).on('load', function () {
	//after full load
	//hide preloader after load
	if (!el.preloader.hasClass(el.preloaderCl)) {
		setTimeout(funPreloader, 6000);
	}

	const firstLoad = document.cookie
		.split(';')
		.filter((c) => c.includes('firstLoad'))?.[0]
		?.split('=')?.[1];

	if (!Boolean(firstLoad) && !el.preloader.hasClass(el.preloaderCl)) {
		setTimeout(funPreloader, 6000);
		setTimeout(() => {
			(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="a"]', 'others/lottie/a.json');
			(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="b"]', 'others/lottie/b.json');
			(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="c"]', 'others/lottie/c.json');
			(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="menu-btn-decor"]', 'others/lottie/menu-btn-decor.json');
		}, 6000);
	} else {
		funPreloader();
		(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="a"]', 'others/lottie/a.json');
		(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="b"]', 'others/lottie/b.json');
		(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="c"]', 'others/lottie/c.json');
		(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="menu-btn-decor"]', 'others/lottie/menu-btn-decor.json');
	}

	if (!Boolean(firstLoad)) {
		(0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS)('[data-lottie="preloader"]', 'others/lottie/preloader.json');
	}

	document.cookie = 'firstLoad=false; max-age=60*60*12';
});

el.document.ready(function () {
	'use strict';

	//preloader show time limit after document ready
	// setTimeout(function () {
	//   if (!el.preloader.hasClass(el.preloaderCl)) funPreloader();
	// }, 3000);

	document.body.classList.add('ontouchstart' in document.documentElement ? 'touch' : 'no-touch');

	//anchors
	$("a[href^='#'], [data-anchor]").click(function (e) {
		e.preventDefault();

		let _this = $(this),
			elDta;

		if (_this.is('[data-anchor]')) elDta = $('#' + _this.data('anchor'));
		else if (_this.is('[href]') && _this.attr('href').length > 1) {
			let _href = _this.attr('href');
			elDta = $(_href);

			if (_href === '#bCont') {
				setTimeout(function () {
					$(_href + ' .form__input')
						.first()
						.focus();
				}, 1000);
			}
		} else return;

		if (elDta.length) {
			let nav = el.header,
				top,
				navHeight;

			top = elDta.offset().top;

			if (
				(nav.length && nav.css('position') === 'fixed') ||
				( true && el.documentH > el.windowtH)
			) {
				navHeight = el.header.outerHeight();
				top -= navHeight + 50;
			}
			funScroll(top);

			if (el.navToggle.hasClass('active')) {
				el.navToggle.trigger('click');
			}
		}
	});

	el.navToggle.click(function () {
		el.navToggle.toggleClass('active');
		el.nav.toggleClass('active');
		el.header.toggleClass('active');
		if (el.nav.hasClass('active') && el.documentH > el.windowtH) {
			el.body.toggleClass('dropdown');
			funPadding(el.header);
			// funPadding(el.nav);
			funPadding(el.body);
			// funMargin(el.body);
		} else {
			setTimeout(function () {
				el.body.toggleClass('dropdown');
				funPaddingDef(el.header);
				// funPaddingDef(el.nav);
				funPaddingDef(el.body);
				// funMarginDef(el.body);
			}, 400);
		}
	});

	//toggle sub menu
	$('.nav__toggleSub, .footer__it-t').click(function () {
		let _this = $(this);
		_this.toggleClass('_active');
		_this.next().slideToggle();
	});

	function setAnimationOnMenuButtonCircle() {
		window.removeEventListener('scroll', onScroll);

		let circle;

		if (window.innerWidth < 768) {
			circle = document.querySelector('.progress-circle-mobile');
		} else {
			circle = document.querySelector('.progress-circle');
		}

		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;

		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = circumference;

		function setProgress(percent) {
			const offset = circumference - (percent / 100) * circumference;
			circle.style.strokeDashoffset = offset;
		}

		setProgress(0);

		function onScroll() {
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrolled = (winScroll / height) * 100;
			setProgress(scrolled);
		}

		window.addEventListener('scroll', onScroll);
	}

	setAnimationOnMenuButtonCircle = (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .debounce */ .Ds)(setAnimationOnMenuButtonCircle, 250);
	setAnimationOnMenuButtonCircle();
	window.addEventListener('resize', setAnimationOnMenuButtonCircle);

	function menuFix() {
		if (pageYOffset > 0) el.header.addClass('_down');
		else el.header.removeClass('_down');
	}

	window.addEventListener('resize', function () {
		if (window.innerWidth >= 1024 && el.navToggle.hasClass('active')) {
			el.navToggle.trigger('click');
		}
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth >= 1024 && el.navToggle.hasClass('active')) {
			el.navToggle.trigger('click');
		}
	});

	window.addEventListener('scroll', menuFix);
	menuFix();

	// titers duration
	let titers = $('.titers');
	if (titers.length) {
		titers.each(titersSpeed);
		window.addEventListener('resize', function () {
			titers.each(titersSpeed);
		});
	}

	function titersSpeed() {
		let _this = $(this);
		let list = _this.find('.titers__list');
		let speed = list.is('[data-speed]') ? +list.data('speed') : 25;
		let res = parseInt(list.width() / speed);
		list.css('animation-duration', res + 's');
	}

	// init event scroll
	let scrollEvent = new UIEvent('scroll');
	window.dispatchEvent(scrollEvent);
});


/***/ }),

/***/ 365:
/***/ (() => {

function setHoverTabs(event) {
    const tabID = event.target.dataset.tabLink;
    let tabContents = document.querySelectorAll('[data-tab-content]');
    let tabLinks = document.querySelectorAll('[data-tab-link]');

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.add("js-hide");
        setTimeout(() => {
            tabContents[i].style.display = 'none';
            tabLinks[i].classList.remove("js-active");
        }, 400)
        tabContents[i].classList.remove("js-show");
        tabLinks[i].classList.remove("js-active");
    }

    setTimeout(() => {
        document.querySelector(`[data-tab-link='${tabID}']`).classList.add("js-active");
        document.querySelector(`[data-tab-content='${tabID}']`).classList.add("js-show");
        document.querySelector(`[data-tab-content='${tabID}']`).style.display = 'block';
        document.querySelector(`[data-tab-content='${tabID}']`).classList.remove("js-hide");
    }, 400)

}

let tabLinks = document.querySelectorAll('[data-tab-link]');
tabLinks.forEach(link => link.addEventListener('mouseenter', setHoverTabs));

/***/ }),

/***/ 371:
/***/ (() => {

const API_KEY = 'AIzaSyBiQ_-A9znDY05FsF5AOhio-367qwSKQDM';
const LAT = 50.3965621;
const LNG = 30.5312652;
const ZOOM = 17.65;

function initMap(n = 1) {
    google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
        var map = this;
        var ov = new google.maps.OverlayView();
        ov.onAdd = function () {
            var proj = this.getProjection();
            var aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x + offsetX;
            aPoint.y = aPoint.y + offsetY;
            map.panTo(proj.fromContainerPixelToLatLng(aPoint));
            //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
        }
        ov.draw = function () { };
        ov.setMap(this);
    };
    var markers = new Array();
    var infowindow = new google.maps.InfoWindow({
        //pixelOffset: new google.maps.Size(-230,250)
    });
    var locations = [
        [new google.maps.LatLng(LAT, LNG)],
        // [new google.maps.LatLng(53.700055, 27.5513694)],
        // [new google.maps.LatLng(53.809055, 27.5813694)],
        // [new google.maps.LatLng(53.859055, 27.5013694)],
    ]
    var options = {
        zoom: ZOOM,
        panControl: false,
        mapTypeControl: false,
        center: locations[0][0],
        //styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    var icon = {
        url: '', //img/interface/map-marker.png
        scaledSize: new google.maps.Size(18, 20),
        anchor: new google.maps.Point(9, 10)
    }
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            icon: icon,
            position: locations[i][0],
            map: map,
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                for (var m = 0; m < markers.length; m++) {
                    markers[m].setIcon(icon);
                }
                var cnt = i + 1;
                //infowindow.setContent(document.querySelector('.events-map__item_' + cnt).innerHTML);
                //infowindow.open(map, marker);


                //MARKER
                //marker.setIcon(icon);
                //map.setCenterWithOffset(marker.getPosition(), 0, 0);
                setTimeout(function () {

                }, 10);
            }
        })(marker, i));
        markers.push(marker);
    }
    if (n) {
        var nc = n - 1;
        setTimeout(function () {
            google.maps.event.trigger(markers[nc], 'click');
        }, 500);
    }
}
function mapAdd() {
    let tag = document.createElement('script');
    tag.async = true
    tag.defer = true
    tag.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
    //tag.src = "https://maps.google.com/maps/api/js?sensor=false&amp;key=AIzaSyDXAw45Va1r3T6QDLaPFnL_r2EqdPQ7KW0&callback=mapInit";
    let wrapper = document.querySelector('.wrapper');
    wrapper.insertAdjacentElement('beforeend', tag)
}
if (document.querySelector('#map')) {
    window.initMap = initMap
    mapAdd();
    //setTimeout(() => initMap(), 5000)
}


/* YA
function map(n) {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [43.585525, 39.723062],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10
		});

		let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
		},{
			// Опции.
			//balloonContentHeader: 'Mistoun',
			//balloonContentBody: 'Москва, Николоямская 40с1',
			//balloonContentFooter: '+ 7(495) 507-54 - 90',
			//hasBalloon: true,
			//hideIconOnBalloonOpen: true,

			hasBalloon: false,
			hideIconOnBalloonOpen: false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map.svg',
			// Размеры метки.
			iconImageSize: [40, 40],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -20],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0, 0],
		});
		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
	}
}
*/

/***/ }),

/***/ 994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ popup)
/* harmony export */ });
const popup = {
    open (selector) {
        document.querySelector('.popup').classList.remove('_open');
        document.querySelector(selector).classList.add('_open');
    },
    close (e, selector) {
        e.target.closest(selector).closest('.popup').classList.remove('_open');
    }
};

/***/ }),

/***/ 581:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
// ajaxCacheScript(dir + "libs/swiper.js", function () {
//
//     function sliderRefresh(slider, obj, container) {
//         window.addEventListener('resize', function () {
//             setTimeout(function () {
//                 slider.destroy();
//                 slider = new Swiper(container, obj);
//             }, 500);
//         });
//     }
//
//     $(".swiper-js").each(function () {
//         let _this = $(this), container = _this.find(".swiper-container")[0];
//         //slider
//         if (_this.hasClass('sGal')) {
//
//             let sGalObj = {
//                 grabCursor           : true,
//                 longSwipesRatio      : 0.03,
//                 slidesPerView        : 'auto',
//                 updateOnWindowResize : false,
//                 loop                 : true,
//                 initialSlide         : 3,
//                 spaceBetween         : 20,
//                 arrow                : false,
//                 observer             : true,
//                 observeParents       : true,
//                 observeSlideChildren : true,
//                 centeredSlides       : true,
//                 speed                : 600,
//                 slideToClickedSlide  : true,
//                 navigation           : {
//                     nextEl : _this.find('[data-next]')[0],
//                     prevEl : _this.find('[data-prev]')[0],
//                 },
//                 keyboard             : {
//                     enabled        : true,
//                     onlyInViewport : false,
//                 },
//                 /*mousewheel: {
//                  sensitivity: 0,
//                  eventsTarget: container,
//                  // releaseOnEdges: true,
//                  },*/
//                 /*breakpoints          : {
//                  // when window width is >=  ...
//                  320  : {
//                  spaceBetween  : -25,
//                  slidesPerView : 1,
//                  // mousewheel: false,
//                  },
//                  768  : {
//                  spaceBetween  : -55,
//                  slidesPerView : 1,
//                  // mousewheel: false,
//                  },
//                  1024 : {
//                  spaceBetween  : -80,
//                  slidesPerView : 1,
//                  // mousewheel: false,
//                  },
//                  1280 : {
//                  slidesPerView  : 'auto',
//                  centeredSlides : true,
//                  spaceBetween   : 30,
//                  }
//                  }*/
//                 scrollbar            : {
//                     el        : _this.find('[data-scrollbar]')[0],
//                     draggable : true,
//                 },
//             };
//
//             let sGal = new Swiper(container, sGalObj);
//
//             // sliderRefresh(sGal, sGalObj, container);
//
//             window.addEventListener('resize', function () {
//                 setTimeout(function () {
//                     sGal.destroy();
//                     sGal = new Swiper(container, sGalObj);
//                 }, 1100);
//             });
//         }
//     });
// });



function sliderRefresh(slider, obj, container) {
	window.addEventListener('resize', function () {
		setTimeout(function () {
			slider?.destroy();
			slider = new Swiper(container, obj);
		}, 500);
	});
}

function bildSliders() {
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach((slider) => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

function initSliders() {
	bildSliders();

	if (document.querySelector("[data-swiper='advantage-text-slider']")) {
		const imageSwiper = new Swiper("[data-swiper='advantage-image-slider']", {
			speed: 600,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			spaceBetween: 20,
			parallax: true
		});
		new Swiper("[data-swiper='advantage-text-slider']", {
			speed: 600,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			slidesPerView: 1,
			parallax: true,
			navigation: {
				prevEl: '[data-swiper-control="advantage-slider-prev"]',
				nextEl: '[data-swiper-control="advantage-slider-next"]',
				disabledClass: '_disabled'
			},
			thumbs: {
				swiper: imageSwiper
			}
		});
	}

	if (document.querySelector("[data-swiper='sertificates-slider']")) {
		let slider;
		const container = "[data-swiper='sertificates-slider']";
		const sliderOptions = {
			autoHeight: true,
			slidesPerView: 4,
			spaceBetween: 24,
			speed: 500,
			navigation: {
				prevEl: '[data-swiper-control="sertificates-slider-prev"]',
				nextEl: '[data-swiper-control="sertificates-slider-next"]',
				disabledClass: '_disabled'
			},
			keyboard: {
				enabled: true,
				onlyInViewport: false
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 16
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 16
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 24
				},
				1380: {
					slidesPerView: 4,
					spaceBetween: 24
				}
			}
		};
		slider = new Swiper(container, sliderOptions);
	}

	if (document.querySelector("[data-swiper='partners-slider']")) {
		let slider;
		const container = "[data-swiper='partners-slider']";
		const sliderOptions = {
			speed: 2000,
			slidesPerView: 4,
			loop: true,
			autoplay: {
				delay: 10,
				pauseOnMouseEnter: true,
				disableOnInteraction: false
			},
			spaceBetween: 16,
			keyboard: {
				enabled: true,
				onlyInViewport: false
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 4
				}
			}
		};
		slider = new Swiper(container, sliderOptions);
	}

	if (document.querySelector("[data-swiper='projects-slider']")) {
		let slider;
		const container = "[data-swiper='projects-slider']";
		const sliderOptions = {
			autoHeight: true,
			slidesPerView: 3,
			spaceBetween: 24,
			speed: 500,
			mousewheel: {
				releaseOnEdges: true
			},
			keyboard: {
				enabled: true,
				onlyInViewport: false
			},
			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 16
				},
				768: {
					slidesPerView: 1.6
				},
				992: {
					slidesPerView: 2.2
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 24
				}
			}
		};
		slider = new Swiper(container, sliderOptions);
	}

	if (document.querySelector("[data-swiper='quote-slider']")) {
		let slider;
		const container = "[data-swiper='quote-slider']";
		const sliderOptions = {
			parallax: true,
			autoHeight: false,
			slidesPerView: 1,
			spaceBetween: 24,
			speed: 800,
			navigation: {
				prevEl: '[data-swiper-control="quote-slider-prev"]',
				nextEl: '[data-swiper-control="quote-slider-next"]',
				disabledClass: '_disabled'
			}
		};
		slider = new Swiper(container, sliderOptions);
	}

	if (document.querySelector("[data-swiper='timeline']")) {
		const timelineSwiper = new Swiper("[data-swiper='timeline']", {
			slidesPerView: 3,
			spaceBetween: 24,
			freeMode: true,
			watchSlidesProgress: true,
			observer: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 16
				},
				480: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 24
				},
				1400: {
					slidesPerView: 3
				}
			}
		});
		const s2 = new Swiper("[data-swiper='timeline-head']", {
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				prevEl: '[data-swiper-control="timeline-slider-prev"]',
				nextEl: '[data-swiper-control="timeline-slider-next"]',
				disabledClass: '_disabled'
			},
			thumbs: {
				swiper: timelineSwiper,
				multipleActiveThumbs: false
			}
		});
	}
}

window.addEventListener('load', function (e) {
	initSliders();
});


/***/ }),

/***/ 77:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BQ": () => (/* binding */ bodyLockToggle),
/* harmony export */   "Ds": () => (/* binding */ debounce),
/* harmony export */   "Hp": () => (/* binding */ setPhoneMask),
/* harmony export */   "MS": () => (/* binding */ addLottieAnimation),
/* harmony export */   "Ww": () => (/* binding */ _slideUp),
/* harmony export */   "_y": () => (/* binding */ _slideToggle),
/* harmony export */   "eA": () => (/* binding */ tabs),
/* harmony export */   "fA": () => (/* binding */ bodyLockStatus),
/* harmony export */   "hx": () => (/* binding */ isTarget),
/* harmony export */   "it": () => (/* binding */ setFileInputs),
/* harmony export */   "lq": () => (/* binding */ spollers),
/* harmony export */   "xF": () => (/* binding */ bodyUnlock),
/* harmony export */   "zL": () => (/* binding */ _slideDown)
/* harmony export */ });
/* unused harmony exports isWebp, isMobile, addTouchClass, addLoadedClass, getHash, setHash, fullVHfix, bodyLock, showMore, getDigFromString, getDigFormat, uniqArray, setDateMask, tabsAdaptive, setFloatLabels, removeClasses, domElement */
/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
/* Проверка мобильного браузера */
let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
	window.addEventListener('load', function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}
// Получение хеша в адресе сайта
function getHash() {
	if (location.hash) {
		return location.hash.replace('#', '');
	}
}
// Указание хеша в адресе сайта
function setHash(hash) {
	history.pushState('', '', hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
function fullVHfix() {
	const fullScreens = document.querySelectorAll('[data-fullscreen]');
	if (fullScreens.length && isMobile.any()) {
		window.addEventListener('resize', fixHeight);
		function fixHeight() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
		fixHeight();
	}
}
//==== Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
// export let _slideUp = (target, duration = 500) => {
// 	if (!target.classList.contains('_slide')) {
// 		target.classList.add('_slide');
// 		target.style.transitionProperty = 'height, margin, padding';
// 		target.style.transitionDuration = duration + 'ms';
// 		target.style.height = target.offsetHeight + 'px';
// 		target.offsetHeight;
// 		target.style.overflow = 'hidden';
// 		target.style.height = 0;
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		window.setTimeout(() => {
// 			target.hidden = true;
// 			target.style.removeProperty('height');
// 			target.style.removeProperty('padding-top');
// 			target.style.removeProperty('padding-bottom');
// 			target.style.removeProperty('margin-top');
// 			target.style.removeProperty('margin-bottom');
// 			target.style.removeProperty('overflow');
// 			target.style.removeProperty('transition-duration');
// 			target.style.removeProperty('transition-property');
// 			target.classList.remove('_slide');
// 		}, duration);
// 	}
// }
// export let _slideDown = (target, duration = 500) => {
// 	if (!target.classList.contains('_slide')) {
// 		target.classList.add('_slide');
// 		if (target.hidden) {
// 			target.hidden = false;
// 		}
// 		let height = target.offsetHeight;
// 		target.style.overflow = 'hidden';
// 		target.style.height = 0;
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		target.offsetHeight;
// 		target.style.transitionProperty = "height, margin, padding";
// 		target.style.transitionDuration = duration + 'ms';
// 		target.style.height = height + 'px';
// 		target.style.removeProperty('padding-top');
// 		target.style.removeProperty('padding-bottom');
// 		target.style.removeProperty('margin-top');
// 		target.style.removeProperty('margin-bottom');
// 		window.setTimeout(() => {
// 			target.style.removeProperty('height');
// 			target.style.removeProperty('overflow');
// 			target.style.removeProperty('transition-duration');
// 			target.style.removeProperty('transition-property');
// 			target.classList.remove('_slide');
// 		}, duration);
// 	}
// }
// export let _slideToggle = (target, duration = 500) => {
// 	if (target.hidden) {
// 		return _slideDown(target, duration);
// 	} else {
// 		return _slideUp(target, duration);
// 	}
// }
// SlideToggle ========================================================================================
let _slideUp = (target, duration = 500) => {
	domElement(target, changeState);

	function changeState(target) {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
};
let _slideDown = (target, duration = 500) => {
	domElement(target, changeState);

	function changeState(target) {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;
		if (display === 'none') display = 'block';

		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
};
let _slideToggle = (target, duration = 500) => {
	domElement(target, changeState);

	function changeState(slide) {
		if (!slide.classList.contains('_slide')) {
			slide.classList.add('_slide');
			if (window.getComputedStyle(slide).display === 'none') {
				return _slideDown(slide, duration);
			} else {
				return _slideUp(slide, duration);
			}
		}
	}
};
//==== Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
};
let bodyUnlock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('._lp');
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove('lock');
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
let bodyLock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('._lp');
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight =
				window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight =
			window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add('lock');

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
//==== Модуь работы со спойлерами =======================================================================================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
function spollers() {
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(',')[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}
		// Получение слойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(',')[0];
		});
		// Инициализация слойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach((item) => {
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(',');
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});
			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach((breakpoint) => {
				const paramsArray = breakpoint.split(',');
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addEventListener('change', function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach((spollersBlock) => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener('click', setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener('click', setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach((spollerTitle) => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					_slideToggle(
						spollerTitle.nextElementSibling,
						spollersBlock.dataset.duration ? spollersBlock.dataset.duration : 500
					);
				}
				//e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(
					spollerActiveTitle.nextElementSibling,
					spollersBlock.dataset.duration ? spollersBlock.dataset.duration : 500
				);
			}
		}
	}
}
//==== Модуь работы с табами =======================================================================================================================================================================================================================
/*
Для родителя табов пишем атрибут data-tabs
Для родителя заголовков табов пишем атрибут data-tabs-titles
Для родителя блоков табов пишем атрибут data-tabs-body

Если нужно чтобы табы открывались с анимацией 
добавляем к data-tabs data-tabs-animate
По умолчанию, скорость анимации 500ms, 
указать свою скорость можно так: data-tabs-animate="1000"

Если нужно чтобы табы превращались в "спойлеры" на неком размере экранов пишем параметры ширины.
Например: data-tabs="992" - табы будут превращаться в спойлеры на экранах меньше или равно 992px
*/
function tabs() {
	const tabs = document.querySelectorAll('[data-tabs]');
	//let tabsActiveHash = [];

	if (tabs.length > 0) {
		// const hash = location.hash.replace('#', '');
		// if (hash.startsWith('tab-')) {
		// 	tabsActiveHash = hash.replace('tab-', '').split('-');
		// }
		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener('click', setTabsAction);
			initTabs(tabsBlock);
		});

		// Получение табов с медиа запросами
		const tabsMedia = Array.from(tabs).filter(function (item, index, self) {
			return item.dataset.tabs;
		});
		// Инициализация табов с медиа запросами
		if (tabsMedia.length > 0) {
			initMediaTabs(tabsMedia);
		}
	}
	// Инициализация табов с медиа запросами
	function initMediaTabs(tabsMedia) {
		const breakpointsArray = [];
		tabsMedia.forEach((item) => {
			const breakpointValue = item.dataset.tabs;

			const tabsBreakpointsObject = {};
			tabsBreakpointsObject.value = breakpointValue;
			tabsBreakpointsObject.item = item;

			breakpointsArray.push(tabsBreakpointsObject);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return `(max-width:${item.value}px),${item.value}`;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach((breakpoint) => {
			const paramsArray = breakpoint.split(',');
			const matchMedia = window.matchMedia(paramsArray[0]);
			const mediaBreakpoint = paramsArray[1];

			// Объекты с нужными условиями
			const tabsMediaArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint) {
					return true;
				}
			});

			// Событие
			matchMedia.addEventListener('change', function () {
				setTitlePosition(tabsMediaArray, matchMedia);
			});
			setTitlePosition(tabsMediaArray, matchMedia);
		});
	}
	// Установка позиций заголовков
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach((tabsMediaItem) => {
			tabsMediaItem = tabsMediaItem.item;
			const tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
			const tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
			const tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
			const tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
			tabsContentItems.forEach((tabsContentItem, index) => {
				if (matchMedia.matches) {
					tabsContent.append(tabsTitleItems[index]);
					tabsContent.append(tabsContentItem);
					tabsMediaItem.classList.add('_tab-spoller');
				} else {
					tabsTitles.append(tabsTitleItems[index]);
					tabsMediaItem.classList.remove('_tab-spoller');
				}
			});
		});
	}
	// Работа с контентом
	function initTabs(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		//const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		// if (tabsActiveHashBlock) {
		// 	const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
		// 	tabsActiveTitle.classList.remove('_tab-active');
		// }
		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				tabsTitles[index].setAttribute('data-tabs-title', '');
				tabsContentItem.setAttribute('data-tabs-item', '');

				// if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
				// 	tabsTitles[index].classList.add('_tab-active');
				// }
				tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
			});
		}
	}
	function setTabsStatus(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

		function isTabsAnamate(tabsBlock) {
			if (tabsBlock.hasAttribute('data-tabs-animate')) {
				return tabsBlock.dataset.tabsAnimate > 0 ? tabsBlock.dataset.tabsAnimate : 500;
			}
		}
		const tabsBlockAnimate = isTabsAnamate(tabsBlock);

		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				if (tabsTitles[index].classList.contains('_tab-active')) {
					if (tabsBlockAnimate) {
						_slideDown(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = false;
						tabsContentItem.classList.add('_active');
					}
					//location.hash = `tab-${tabsBlockIndex}-${index}`;
				} else {
					if (tabsBlockAnimate) {
						_slideUp(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = true;
						tabsContentItem.classList.remove('_active');
					}
				}
			});
		}
	}
	function setTabsAction(e) {
		const el = e.target;
		if (el.closest('[data-tabs-title]') || el.hasAttribute('[data-tabs-title]')) {
			const tabTitle = el;
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (
				!tabTitle.classList.contains('_tab-active') &&
				!tabsBlock.querySelectorAll('._slide').length
			) {
				const tabActiveTitle = tabsBlock.querySelector('[data-tabs-title]._tab-active');
				if (tabActiveTitle) {
					tabActiveTitle.classList.remove('_tab-active');
				}

				tabTitle.classList.add('_tab-active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
		}
	}
}
// Модуль "показать еще" (в работе) =======================================================================================================================================================================================================================

/*
Документация по работе в шаблоне:
Документация плагина:
Сниппет (HTML): 
*/
function showMore() {}
//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================

// Получить цифры из строки
function getDigFromString(item) {
	return parseInt(item.replace(/[^\d]/g, ''));
}
// Форматирование цифр типа 100 000 000
function getDigFormat(item) {
	return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
// Уникализация массива
function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}

function setPhoneMask() {
	const phoneInputs = document.querySelectorAll('input[data-phone-mask]');

	if (phoneInputs) {
		phoneInputs.forEach((phoneInput) => {
			if (phoneInput) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				phoneInput.classList.add('_mask');
				Inputmask('+380 999 999 999', {
					showMaskOnHover: false,
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						phoneInput.inputmask.remove();
						phoneInput.value = '';
					}
				}).mask(phoneInput);

				phoneInput.addEventListener('blur', () => {
					phoneInput.placeholder = '';
				});
			}
		});
	}
}

function setDateMask() {
	const phoneInputs = document.querySelectorAll('input[data-date-mask]');

	if (phoneInputs) {
		phoneInputs.forEach((dateInput) => {
			if (dateInput) {
				datepicker(dateInput, {
					customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
					customMonths: [
						'Янв',
						'Фев',
						'Мар',
						'Апр',
						'Май',
						'Июн',
						'Июл',
						'Авг',
						'Сен',
						'Окт',
						'Ноя',
						'Дек'
					],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString();
						input.value = value;
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		});
	}
}
//============================================================================================================================

// Tabs ===============================================================================================
function tabsAdaptive() {
	let tabs = document.querySelectorAll('._tabs');
	for (let index = 0; index < tabs.length; index++) {
		let tab = tabs[index];
		let tabs_items = tab.querySelectorAll('._tabs-item');
		let tabs_blocks = tab.querySelectorAll('._tabs-block');
		for (let index = 0; index < tabs_items.length; index++) {
			let tabs_item = tabs_items[index];
			tabs_item.addEventListener('click', function (e) {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('_active');
					tabs_blocks[index].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[index].classList.add('_active');
				e.preventDefault();
			});
		}
	}

	const matchMedia = window.matchMedia('(max-width: 768px)');

	matchMedia.addListener(function () {
		init(matchMedia);
	});
	init(matchMedia);

	function init(matchMedia = false) {
		if (matchMedia.matches || !matchMedia) {
			tabsMobileBody();
		}
	}

	function tabsMobileBody() {
		let tabsMobile = document.querySelectorAll('._tabs-mobile');
		for (let index = 0; index < tabsMobile.length; index++) {
			let tab = tabsMobile[index];
			let value = tab.querySelector('.tabs-mobile__value');
			let tabs_items = tab.querySelectorAll('._tabs-item');
			let item_active = tab.querySelector('._tabs-item._active');
			let tabs_nav = tab.querySelector('.tabs-block__nav');
			value.innerHTML = item_active.innerHTML;

			value.addEventListener('click', () => {
				value.classList.toggle('_active');
				_slideToggle(tabs_nav);
			});

			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];

				const clickHandler = () => {
					let item_active = tab.querySelector('._tabs-item._active');
					value.innerHTML = item_active.innerHTML;
					if (matchMedia.matches || !matchMedia) {
						_slideUp(tabs_nav);
					}
				};

				tabs_item.addEventListener('click', clickHandler);
			}
		}
	}
}
// ====================================================================================================

// FLOAT FORM LABEL ===================================================================================
function setFloatLabels() {
	const floatLabels = document.querySelectorAll('[data-float-label]');

	const init = (el) => {
		floatLabels.forEach((label) => {
			const element = label.querySelector(`${el}`);
			const contentName = label.querySelector('.content-name');

			if (element && element.value) {
				contentName.classList.add('_active');
			}

			if (element) {
				element.addEventListener('focus', () => {
					contentName.classList.add('_active');
				});
				element.addEventListener('blur', () => {
					if (!element.value) {
						contentName.classList.remove('_active');
					} else {
						contentName.classList.add('_active');
					}
				});
			}
		});
	};

	init('input');
	init('textarea');
}
// ====================================================================================================

// INPUT TYPE FILE ===================================================================================
function setFileInputs() {
	const fileInputs = document.querySelectorAll('[data-input-file]')

	if(fileInputs.length > 0) {
		for(let i = 0; i < fileInputs.length; i++) {
			const fileInputContainer = fileInputs[i];
			const inputFile = fileInputContainer.querySelector('input');
			const fileButton = fileInputContainer.querySelector('.icon-pin');
			const filePreview = fileInputContainer.querySelector('.message-text');
			const maxSizeError = inputFile.getAttribute('data-error-max-size');
			const placeholder = inputFile.getAttribute('data-placeholder');
			filePreview.innerHTML = placeholder

			// remove file preview
			fileButton.onclick = () => {
				if(inputFile.classList.contains('full')) {
					inputFile.classList.remove('full')
					inputFile.value = '';
					filePreview.innerHTML = placeholder
				}
			};

			inputFile.addEventListener('change', () => {
				//form_remove_error(inputFile);
				uploadFile(inputFile.files[0]);
			});

			function uploadFile(file) {

				if (!['application/pdf', 'image/png', 'application/msword'].includes(file.type)) {
					//form_add_error(inputFile)
					inputFile.value = '';
					return;
				}

				// проверим размер файла (<2 Мб)
				if (file.size > 2 * 1024 * 1024) {
					//form_add_error(inputFile)
					fileInputContainer.querySelector('.form__error').innerHTML = maxSizeError;
					inputFile.value = '';
					return;
				}

				inputFile.classList.add('full')
				filePreview.innerHTML = file.name
			}
		}
	}
}
// ====================================================================================================

function isTarget(eventTarget, target) {
	let $target;
	if (typeof target === 'string') {
		$target = document.querySelector(target);
	}
	if ($target === eventTarget) {
		return $target;
	} else if (eventTarget.closest(target)) {
		return eventTarget.closest(target);
	} else {
		return false;
	}
}

function removeClasses(array, className) {
	let $array;
	if (typeof array === 'string') {
		$array = document.querySelectorAll(array);
	} else {
		$array = array;
	}
	for (var i = 0; i < $array.length; i++) {
		$array[i].classList.remove(className);
	}
}

function domElement(target, callback) {
	if (target instanceof NodeList) {
		target.forEach((el) => callback(el));
	} else if (target instanceof Array) {
		Array.from(target).forEach((el) => callback(el));
	} else if (typeof target === 'string') {
		const $target = document.querySelectorAll(target);

		if ($target instanceof NodeList) {
			$target.forEach((el) => callback(el));
		} else {
			callback($target);
		}
	} else {
		callback(target);
	}
}

function debounce(func, delay) {
	let clearTimer;
	return function () {
		const context = this;
		const args = arguments;
		clearTimeout(clearTimer);
		clearTimer = setTimeout(() => func.apply(context, args), delay);
	};
}

function addLottieAnimation(domElement = '', path = '', loopStatus = false, play = true) {
	const animation = bodymovin.loadAnimation({
		container: document.querySelector(`${domElement}`),
		path: `${path}`,
		renderer: 'svg',
		loop: loopStatus,
		autoplay: play
	});
}


/***/ }),

/***/ 736:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ScrollObserver)
/* harmony export */ });
// * DOC
// * ----------------------------------------------
// * new ScrollObserver({
// * element: string | nodeElement
// * 	animationIn: function
// * 	animationOut: function
// * 	observerOptions: {}
// * })
// * observerOptions = {
// *  root: document.querySelector('#scrollArea'),
// *  rootMargin: '0px',
// *  threshold: 1.0 // 1.0 - (100% element scroll) 0.9 - 90%(100% element scroll)
// * }
// * ----------------------------------------------

class ScrollObserver {
	constructor(options) {
		this.animationIn = options.animationIn || null;
		this.animationOut = options.animationOut || null;
		this.observerOptions = options.observerOptions;

		if (typeof options.element === 'string') {
			this.element = document.querySelectorAll(options.element);
		} else {
			this.element = options.element;
		}

		this.createObserver();
		this.$subscribe();
	}

	createObserver() {
		this.observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (this.animationIn !== null) {
						this.animationIn(entry.target);
						if (this.animationOut === null) {
							this.observer.unobserve(entry.target);
						}
					}
				} else {
					if (this.animationOut !== null) {
						this.animationOut(entry.target);
					}
				}
			});
		}, this.observerOptions);
	}

	$subscribe() {
		if (this.element instanceof NodeList) {
			this.element.forEach((el) => {
				this.observer.observe(el);
			});
		} else if (this.element instanceof Array) {
			Array.from(this.element).forEach((el) => {
				this.observer.observe(el);
			});
		} else {
			this.observer.observe(this.element);
		}
	}
}


/***/ }),

/***/ 293:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _core_forms_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(491);
/* harmony import */ var _core_modules_animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var _core_modules_sliders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(581);
/* harmony import */ var _core_forms_select_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(796);
/* harmony import */ var _core_modules_hoverTabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(365);
/* harmony import */ var _core_modules_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(371);
/* harmony import */ var _core_events_click_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(840);
/* harmony import */ var _core_utils_observer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(736);











const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

	_core_forms_forms_js__WEBPACK_IMPORTED_MODULE_1__/* .formFieldsInit */ .MK();
	_core_forms_forms_js__WEBPACK_IMPORTED_MODULE_1__/* .formSubmit */ .Gz(true);
	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .setPhoneMask */ .Hp();
	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .spollers */ .lq();
	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .tabs */ .eA();

	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS('[data-lottie="s-media-decor"]', 'others/lottie/2.json', true);

	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS(
		'[data-lottie="s-decor-lottie-left"]',
		'others/lottie/s-decor-lottie-left.json',
		true
	);
	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS(
		'[data-lottie="s-decor-lottie-right"]',
		'others/lottie/s-decor-lottie-right.json',
		true
	);
	_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS(
		'[data-lottie="advantage-decor"]',
		'others/lottie/advantage-decor.json',
		true
	);

	new _core_utils_observer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z({
		element: '[data-lottie="anchor"]',
		animationIn: () =>
			_core_utils_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .addLottieAnimation */ .MS('[data-lottie="anchor"]', 'others/lottie/anchor.json'),
		observerOptions: {
			threshold: 1.0
		}
	});

	document.addEventListener('click', _core_events_click_js__WEBPACK_IMPORTED_MODULE_7__/* .documentClick */ .Z);
};

window.addEventListener('load', init);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(293);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(840);
/******/ 	__webpack_require__(491);
/******/ 	__webpack_require__(796);
/******/ 	__webpack_require__(158);
/******/ 	__webpack_require__(365);
/******/ 	__webpack_require__(371);
/******/ 	__webpack_require__(994);
/******/ 	__webpack_require__(581);
/******/ 	__webpack_require__(77);
/******/ 	var __webpack_exports__ = __webpack_require__(736);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
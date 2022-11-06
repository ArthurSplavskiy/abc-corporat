import * as functions from "../utils/functions.js";
import {popup} from "../modules/popup.js";
import {_slideUp, _slideDown, bodyLockStatus, bodyLockToggle} from "../utils/functions.js";

const $popupMedia = document.querySelector('#popup-media');
const $menusSecondLvl = document.querySelectorAll('[data-second-lvl]');
const $pageMenu = document.querySelector('[data-menu]');
const $pageMenuBtn = document.querySelector('[data-menu-btn]');

export const documentClick = (e) => {
    const targetElement = e.target;

    // POPUP ===================
    const $popupTriggerOpen = functions.isTarget(targetElement, '[data-popup-open="media"]');
    if($popupTriggerOpen) {
        $popupMedia && popup.open('#popup-media');
    }

    if(targetElement.closest('.popup__close')) {
        popup.close(e, '.popup__close');
        if($popupMedia.getAttribute('id') === 'popup-media') {
            const $media = $popupMedia.querySelector('video') || $popupMedia.querySelector('iframe');

            if ($media.nodeName === 'IFRAME') {
                const iframeSrc = $media.src;
                $media.src = iframeSrc;
            }
            if ($media.nodeName === 'VIDEO') {
                $media.pause();
            }
        }
    }
    if(targetElement.closest('.popup') && !targetElement.closest('.popup__content')) {
        popup.close(e, '.popup');
    }
    // ===================

    // SECOND LVL MENU ===================
    const $menuSecondLvlBtn = functions.isTarget(targetElement, '[data-second-lvl-btn]');
    if($menuSecondLvlBtn) {
        const btnID = $menuSecondLvlBtn.dataset.secondLvlBtn;
        const btnParent = $menuSecondLvlBtn.parentNode;

        if(!btnParent.classList.contains('js-active')) {
            btnParent.classList.add('js-active');
            _slideDown($menusSecondLvl[btnID]);
        } else {
            btnParent.classList.remove('js-active');
            _slideUp($menusSecondLvl[btnID]);
        }
    }
    // ===================

    // MENU BUTTON ===================
    const $menuBtn = functions.isTarget(targetElement, '[data-menu-btn]')
    if ($menuBtn && $pageMenu) {
        if (bodyLockStatus) {
            bodyLockToggle();
            $menuBtn.classList.toggle('js-open');
            $pageMenu.classList.toggle('js-open');
        }
    }
    const $menuOverlay = functions.isTarget(targetElement, '[data-menu-overlay]')
    if($menuOverlay) {
        if($pageMenu.classList.contains('js-open')) {
            $pageMenu.classList.remove('js-open');
            $pageMenuBtn.classList.remove('js-open');
        }
    }
    // ===================

    // ===================
    // ===================
};
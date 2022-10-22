function setHoverTabs(event) {
    const tabID = event.target.dataset.tabLink;
    let tabContents = document.querySelectorAll('[data-tab-content]');
    let tabLinks = document.querySelectorAll('[data-tab-link]');

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove("js-show");
    }
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("js-active");
    }

    document.querySelector(`[data-tab-link='${tabID}']`).classList.add("js-active");
    document.querySelector(`[data-tab-content='${tabID}']`).classList.add("js-show");
    document.querySelector(`[data-tab-content='${tabID}']`).style.display = 'block';
}

let tabLinks = document.querySelectorAll('[data-tab-link]');
tabLinks.forEach(link => link.addEventListener('mouseenter', setHoverTabs));
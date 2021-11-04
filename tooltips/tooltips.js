/* 

*/

const tooltips = function() {
    const elems = document.querySelectorAll('[data-tooltip]');

    if (elems.length == 0) return;

    let tooltip = null;

    const show = function(event) {
        const text = event.target.dataset.tooltip;

        if (text.length == 0) return;

        tooltip = document.createElement('div');
        tooltip.classList.add('tooltips-content');
        tooltip.innerHTML = text;

        document.body.append(tooltip);

        const top = event.target.offsetTop,
            left = event.target.offsetLeft;

        tooltip.style.top = (top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (left - 10) + 'px';
    }

    const hide = function(event) {
        tooltip.remove();
    }

    elems.forEach(elem => {
        elem.addEventListener('mouseover', show);
        elem.addEventListener('mouseout', hide);
    });
};
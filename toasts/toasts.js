const toasts = function() {
    const elems = document.querySelectorAll('[data-toast]');

    if (elems.length == 0) return;

    const hide = function(container) {
        container.style.display = '';
        document.body.append(container);
    };

    const show = function(event) {
        event.preventDefault();
        
        const id = event.target.dataset.toast;

        if (!id) return;

        const container = document.querySelector('#' + id);

        if (!container) return;

        container.style.display = 'block';

        const closeBtn = document.createElement('div');
        closeBtn.classList.add('toast-close');
        closeBtn.innerHTML = "X";

        container.append(closeBtn);

        let wrapper = document.querySelector('.toasts-wrapper');
        
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.classList.add('toasts-wrapper');
        }

        wrapper.append(container);
        document.body.append(wrapper);

        const stId = setTimeout(function() {
            hide(container);
        }, 5000);

        closeBtn.addEventListener('click', function() {
            clearTimeout(stId);
            hide(container);
        });
    };

    elems.forEach(elem => {
        elem.addEventListener('click', show);
    });
};
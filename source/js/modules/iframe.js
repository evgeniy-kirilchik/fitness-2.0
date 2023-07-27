[...document.querySelectorAll('[data-frame-load]')].forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.getAttribute('data-frame-load');
    [...document.querySelectorAll(`[data-frame-group="${group}"]`)].forEach((frame) => {
      frame.setAttribute('src', frame.getAttribute('data-frame-src'));
    });
  });
});

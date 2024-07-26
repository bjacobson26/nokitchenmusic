document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.style.opacity = '1';
    });

    const form = document.getElementById('musicForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch(
          'https://patchbay.la/nokitchensubmissions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );

        thankYouMessage.textContent = "Thank you for your submission. We will get back to you as soon as possible.";
        thankYouMessage.style.display = 'block';

        form.reset();
    });
});

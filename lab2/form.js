const form = document.querySelector('.form');
const regularExpressions = {
    name: /^[А-ЯЇІЄҐ][а-яїієґ']+\s[А-ЯЇІЄҐ]\.[А-ЯЇІЄҐ]\.$/,
    phoneNumber: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    faculty: /^[А-ЯЇІЄҐ]{4}$/,
    dateOfBirth: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
    address: /^м\.\s[А-ЯЇІЄҐ][А-ЯЇІЄҐа-яїієґ']+$/,
};

const validateFormInput = (formData) => {
    const input = {};
    const invalidFields = [];
    for (const [key, value] of formData) {
        input[key] = value;
        const isValid = regularExpressions[key].test(value);
        if (!isValid) invalidFields.push(key);
    }
    for (const key of Object.keys(input)) {
        const inputElement = form.querySelector(`#${key}`);
        inputElement.classList.remove('invalid-input');
    };
    if (invalidFields.length !== 0) {
        for (const field of invalidFields) {
            const inputElement = form.querySelector(`#${field}`);
            inputElement.classList.add('invalid-input');
        }
        return;
    }
    showResult(input);
};

const showResult = (input) => {
    const resHtml = `
<b>Введені дані:</b><br/>
ПІБ: ${input.name}<br/>
Телефон: ${input.phoneNumber}<br/>
Факультет: ${input.faculty}<br/>
Дата нар.: ${input.dateOfBirth}<br/>
Адреса: ${input.address}<br/>
<button id="button-close">Закрити</button>
`;
    const resultWindow = window.open(
        '/lab2/form-result',
        '',
        `width=250px, height=250px`
    );
    resultWindow.setTimeout(() => (resultWindow.document.title = 'form-result'));
    resultWindow.document.write(`<div>${resHtml}<div>`);
    const buttonClose = resultWindow.document.getElementById('button-close');
    buttonClose.addEventListener('click', () => {
        resultWindow.close();
    });
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    validateFormInput(formData);
});
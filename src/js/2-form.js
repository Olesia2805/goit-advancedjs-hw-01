const formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const isEmpty = form => {
  const formFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));
  if (formFromLS !== null) {
    for (const key in formFromLS) {
      if (formFromLS.hasOwnProperty(key)) {
        form.elements[key].value = formFromLS[key];
        formData[key] = formFromLS[key];
      }
    }
  }
};

isEmpty(formEl);

formEl.addEventListener('input', event => {
  const nameField = event.target.name;
  const valueField = event.target.value.trim();

  formData[nameField] = valueField;

  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (formData['email'] && formData['message']) {
    console.log(formData);
    localStorage.removeItem('feedback-form-data');
    event.target.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
});

let submitBtn = document.getElementById('submit-btn');
let clearBtn = document.getElementById('clear-btn');
let inputFields = Array.from(document.getElementsByClassName('input-field'));
let form = document.getElementById('form');
let checkboxFerias = document.getElementById('imagens-ferias');
let textArea = document.getElementById('box-text-area');
let nameField = document.getElementById('name-field');
let emailField = document.getElementById('email-field');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

// clearBtn.addEventListener('click', () => {
//   inputFields.forEach((field) => {
//     if (field.value.length > 0) {
//       field.value = '';
//     }
//   });
// });

function clearInput() {
  form.reset();
}
clearBtn.addEventListener('click', clearInput);

if (!checkboxFerias.checked) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

function checkLength () {
  if (nameField.value.length < 10 || nameField.value.length > 40 || emailField.value.length < 10 || emailField.value.length > 50 || textArea.value.length > 500) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip!');
    }
}
submitBtn.addEventListener('click', checkLength);
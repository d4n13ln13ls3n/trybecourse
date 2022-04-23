const decDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createCalendarDays() {
// Escreva seu código abaixo.
  for (let i = 0; i < decDaysList.length; i += 1) {
    let decemberDays = document.createElement('li');
    let decemberDaysList = document.getElementById('days'); //ul
    decemberDaysList.appendChild(decemberDays);
    let eachDecemberDay = decDaysList[i];
    decemberDays.innerText = eachDecemberDay;
    decemberDays.classList.add('day');
    /*if ((decDaysList[i] === 25) || (decDaysList[i] === 26) || (decDaysList[i] === 32)) {
      decemberDays.classList.add('holiday');
    }*/
    const holidays = [24, 25, 31];
    if (holidays.includes(decDaysList[i])) {
      decemberDays.classList.add('holiday');
    }
    const fridays = [4, 11, 18, 25];  
    if (fridays.includes(decDaysList[i])) {
      decemberDays.classList.add('fridays');
    }
  }
}
createCalendarDays();

function createButton(string, buttonId) {
  let btn = document.createElement('button');
  let divBtn = document.querySelector('.buttons-container');
  divBtn.appendChild(btn);
  btn.setAttribute('id', buttonId);
  btn.innerText = string;
}
createButton('Feriados', 'btn-holiday');
createButton('Sexta-feira', 'btn-friday');

function addClickEventToButton(buttonId, classReceiver) {
  let buttonChangeColors = document.getElementById(buttonId);
  let eventReceiver = document.getElementsByClassName(classReceiver);
  buttonChangeColors.addEventListener('click', function () {
    for (let i = 0; i < eventReceiver.length; i += 1) {
      eventReceiver[i].classList.toggle('my-style');
    }
  }); 
}
addClickEventToButton('btn-holiday', 'holiday');

/*  for (let i = 0; i < eventReceiver.length; i += 1) {
      if (eventReceiver[i].style.backgroundColor == '#eee') { //belonged to the above function
        eventReceiver[i].style.backgroundColor == 'white';
      } else {
        eventReceiver[i].style.backgroundColor == '#eee';
      }
    }
  });
  buttonChangeColors.addEventListener('click', function () {
    for (let i = 0; i < eventReceiver.length; i += 1) {
      if (eventReceiver[i].style.backgroundColor = 'white') {
        eventReceiver[i].style.backgroundColor = 'red';
      }
    }
  }); */

function modifyText() {
  let buttonChangeText = document.getElementById('btn-friday');
  let decemberDaysList = document.getElementById('days'); //ul
  let decemberDays = document.getElementsByClassName('day');
  buttonChangeText.addEventListener('click', function () {
    fridaysDays = document.getElementsByClassName('fridays');
    for (friday of fridaysDays) {
      if (friday.innerText === 'Sextou') {
        decemberDaysList.innerHTML = ' ';
        createCalendarDays();
        break;
      } else {
        friday.innerText = 'Sextou';
      }
    }
  });
}
modifyText();
  
  /*for (let i = 0; i < decDaysList.length; i += 1) {
    let buttonChangeText = document.getElementById(buttonId);
    let decemberDaysList = document.getElementById('days'); //ul
    let eachDecemberDay = decDaysList[i];
    let listDecemberDays = decemberDaysList.children; //html collection sem texto
    listDecemberDays.innerText = eachDecemberDay;
    let fridays = [4, 11, 18, 25];  
    buttonChangeText.addEventListener('click', function () {
      if (fridays.includes(eachDecemberDay)) {
        listDecemberDays[i].innerText = message;
      }
      else if (listDecemberDays[i].innerText == message) {
        listDecemberDays[i].innerText = eachDecemberDay;
        //listDecemberDays[i].innerText = eachDecemberDay;
      }
    });
  }*/


/* function modifyText() { //versão Hilton
const decemberDaysList = document.getElementById('days'); //ul
  for (let i = 0; i < decemberDaysList.children.length; i += 1) {
    let classAttributes = decemberDaysList.children[x].className;
    if (decemberDaysList.children[i].className.includes('friday')) {
      if (decemberDaysList.children[i].className.includes('friday-toggle')) {
        decemberDaysList.children[i].className = decemberDaysList.children[i].className.replace('friday-toggle', '');
      } else {
        decemberDaysList.children[i].className = `${classAttributes}.friday-toggle`;
      }
    }
  }
}
modifyText(); */

function zoom () {
  let decemberDaysList = document.getElementsByClassName('day'); //ul
  for (day of decemberDaysList) {
    day.addEventListener('mouseover', function(event) {
      event.target.style.zoom = '200%';
    });
    day.addEventListener('mouseout', function(event) {
      event.target.style.zoom = '100%';
    });
  }
}
zoom();

function createTask(string) {
  let task = document.createElement('span');
  let divTasks = document.getElementsByClassName('my-tasks')[0];
  divTasks.appendChild(task);
  task.innerText = string;
  }
  createTask('Cozinhar');

function createLegend(color) { //FALTA COLORIR O CÍRCULO E DEPOIS ATRELAR O ARGUMENTO
  let divColor = document.createElement('div');
  let divTasks = document.querySelector('.my-tasks');
  divTasks.appendChild(divColor);
  divColor.classList.add('task'); //className não funciona
  divColor.style.backgroundColor = color; 
}
createLegend('yellow');

function taskSelected() {
  let divCircle = document.querySelector('.task');
  divCircle.addEventListener('click', function() {
      divCircle.classList.toggle('task-selected');
  });
}
taskSelected();

function changeDayColor() {
  const days = document.querySelectorAll('.day');
  // let colorDays = day.style.color;
  days.forEach((day) => {
    day.addEventListener('click', function() {
      let selectedCircle = document.querySelector('.task.task-selected');
      if (selectedCircle !== null) {
        let circleColor = selectedCircle.style.backgroundColor;   
        if (day.style.color !== circleColor) {
          day.style.color = circleColor;
        } else {
          day.style.color = '';
        }   
      }
    });
  });
}
changeDayColor();

function addAppointments () {
  let contentInput = document.getElementById('task-input');
  let appointmentsList = document.getElementsByClassName('tasks-container');
  let btnAdd = document.getElementById('btn-add');
  const span = document.createElement('span');
  

  contentInput.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      span.innerText = event.target.value;
      appointmentsList.appendChild(span);
      //appointmentsList.innerText = contentInput.value;
    }
  });

  btnAdd.addEventListener('click', function (event) {
      if (contentInput.length === 0) {
      window.alert('Não é possível adicionar um texto nulo');
    }  else {
      span.innerText = event.target.value; // isn't event related to the click?
      appointmentsList.appendChild(span);
      }
  });
}
addAppointments();
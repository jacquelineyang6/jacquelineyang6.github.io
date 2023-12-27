function startTimer() {
    window.hourInput = document.getElementById('hour');
    window.minuteInput = document.getElementById('minute');
    window.secondInput = document.getElementById('second');
    var hour = parseInt(hourInput.value);
    var minute = parseInt(minuteInput.value);
    var second = parseInt (secondInput.value);
    
    var totalSec = hour * 3600 + minute *60 + second;
    window.interval = setInterval(function () {
        if (totalSec < 0) {
            window.alert ('Countdown Completed'); 
            clearInterval (interval);
        } else {
            hourInput.value = Math.floor (totalSec / 3600);
            minuteInput.value = Math.floor ((totalSec % 3600) / 60);
            secondInput.value = Math.floor (totalSec % 60);
            totalSec --;
        }
    }, 1000);
}

function stopTimer () {
    clearInterval(window.interval);
}

function studyValue() {
    document.getElementById('minute').value = 50;
    document.getElementById('hour').value = 0;
    document.getElementById('second').value = 0;
}

function breakValue() {   
    window.minuteInput.value = 10;
    window.hourInput.value = 0;
    window.secondInput.value = 0;
}

function addReminder () { // show reminders in website
    const inputBox = document.getElementById("inputToDo");
    const text = inputBox.value.trim();
    if(text ==='') return;
    createReminder(text);
    inputBox.value='';
}

function createReminder (text) { // create new reminders in html 
    const inputBox = document.getElementById("inputToDo");
    const listContainer = document.getElementById("list-container");
    const li = document.createElement("li");
    const xbutton = document.createElement("button");
    const checkedBox = document.createElement("input");
    checkedBox.type = 'checkbox';
    checkedBox.classList.add('checkBox');
    checkedBox.addEventListener('click', function () {
         li.classList.toggle('checked');
         if (checkedBox.checked) {
             li.classList.add ('deleted');
         } else {
            li.classList.remove('deleted');
        }
        saveReminders(getReminder());   
    });
    xbutton.innerText = '✖';
    xbutton.classList.add('x'); // xbutton is under the 'x' class
    xbutton.addEventListener('click', () => deleteReminder(li));
    li.appendChild(checkedBox);
    li.appendChild(document.createTextNode(text));
    li.appendChild(xbutton);
    
    listContainer.appendChild(li);
    saveReminders(getReminder());
}

function deleteReminder(li) {
    li.remove(); 
    saveReminders(getReminder());
}

function checkReminder(li) {
    li.target.classList.toggle("checked"); //the class of the targeted li changes to "checked"
    saveReminders(getReminder());
}

function loadReminders() { //get reminders from the localStorage and create them in html
    const reminders = JSON.parse(localStorage.getItem('Reminders')) || [];
    reminders.forEach (reminder => createReminder(reminder.trim()));

}

function saveReminders(reminders) { // saves reminders as json strings to the localStorage
    localStorage.setItem('Reminders', JSON.stringify(reminders));
}

function getReminder() { //get reminders from list-container (html)
    const listContainer = document.getElementById("list-container");
    return Array.from(listContainer.children)
    .filter(li => {
        return !li.classList.contains('deleted');
    })
    .map(li => {
        return li.innerText.replace('✖', '');
    });  //.map creates a new array with specified properties provided by a function 
}

function clearReminders() {
    localStorage.removeItem('Reminders');
    document.getElementById("list-container").innerHTML = "";
}
loadReminders();


function createQuote (text) {
    
}
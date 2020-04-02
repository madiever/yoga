let surnameInput = document.getElementById('surname'),
    nameInput = document.getElementById('name'),
    ageInput = document.getElementById('age');

function showUser() {
    alert("Пользователь: " + surnameInput.value + " " + nameInput.value + ", " + "Ваш возраст: " + ageInput.value);
}

document.getElementById('send').onclick = showUser;

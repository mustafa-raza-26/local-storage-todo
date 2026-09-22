let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');
let form = document.getElementById('form');
let login = document.getElementById('login');

// LOGIN
if (login) {
    login.addEventListener('click', function (e) {
        e.preventDefault();

        let name = userName.value.trim();
        let email = userEmail.value.trim();
        let password = userPassword.value.trim();

        if (name === '' || email === '' || password === '') {
            alert('Please fill all fields');
            return;
        }
        
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        localStorage.setItem('login', 'true');
        alert('Login Successfully');
        window.location.href = './todo.html';
    });
}

// CHECK LOGIN
function getData() {
    let currentSession = localStorage.getItem('login');
    if (currentSession === 'true') {
        window.location.href = './todo.html';
    }
}

// LOGOUT
function logout() {
    localStorage.setItem('login', 'false');
    window.location.href = './index.html';
}
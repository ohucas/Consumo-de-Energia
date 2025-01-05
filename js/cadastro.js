document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, name }),
    });

    const data = await response.json();

    if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
        window.location.href = './login.html';
    } else {
        alert(data.error);
    }
});

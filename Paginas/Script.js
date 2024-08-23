// Función para manejar la creación de un usuario
document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:4000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email })
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('createUserResponse').innerText = `Usuario creado: ${result.user.nombre} (${result.user.email})`;
        } else {
            document.getElementById('createUserResponse').innerText = 'Error creando usuario';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('createUserResponse').innerText = 'Error en la solicitud';
    }
});

// Función para obtener y mostrar la lista de usuarios
document.getElementById('getUsersButton').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:4000/users/');
        const users = await response.json();

        let usersList = '<ul>';
        users.forEach(user => {
            usersList += `<li>${user.nombre} (${user.email})</li>`;
        });
        usersList += '</ul>';

        document.getElementById('usersList').innerHTML = usersList;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('usersList').innerText = 'Error obteniendo usuarios';
    }
});

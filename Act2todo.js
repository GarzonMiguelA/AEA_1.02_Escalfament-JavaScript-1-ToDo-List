

//Almacenamos todas las tareas
let tasks = [];

function añadirTarea() {
    const input = document.getElementById('taskInput');  // Obtiene el valor del input de texto.
    const task = input.value.trim();  // Elimina espacios innecesarios al inicio y final del texto.
    if (task) {  // Si no está vacío el input
        tasks.push(task); //añadimos la tarea como cadena de texto
        input.value = '';  // Limpiamos el input para que el user pueda volver a escribir.
        mostrarTarea();  // Actualizamos la lista.
    }
}


function borrarTarea(index) {
    tasks.splice(index, 1); // Eliminamos la tarea
    mostrarTarea(); // Actualizamos de nuevo la lista.
}

function mostrarTarea() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';  // Limpiamos la lista de tareas.

    tasks.forEach((task, index) => {
        const li = document.createElement('li');  // Creamos un nuevo <li>.

        const checkbox = document.createElement('input');  // Creamos un checkbox.
        checkbox.type = 'checkbox';  // Definimos como checkbox.

        const taskText = document.createElement('span');
        taskText.textContent = task;  // Insertamos el texto.

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';  // Creamos el botón de eliminar.
        deleteButton.onclick = () => {
            tasks.splice(index, 1);  // Eliminamos la tarea del arreglo.
            mostrarTarea();  // Actualizamos la lista de tareas.
        };

        li.appendChild(checkbox);  // Añadimos el checkbox.
        li.appendChild(taskText);  // Añadimos el texto.
        li.appendChild(deleteButton);  // Añadimos el botón eliminar.
        taskList.appendChild(li);  // Añadimos el li al ul de.
    });
}
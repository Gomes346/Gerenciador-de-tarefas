window.addEventListener('load', () => {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskForm = document.querySelector('#new-task-form');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = {
            task: e.target.elements.task.value,
            done: false,
            createdAt: new Date().getTime()
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        e.target.reset();

        DisplayTasks();
    });

    DisplayTasks();
});

function DisplayTasks() {
    const taskList = document.querySelector('#tasks');
    // const input = document.querySelector("#new-task-input");
    // const inputValue = input.value;

    taskList.innerHTML = '';

    tasks.forEach(task => {
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content = document.createElement("div");
        // const task_input = document.createElement("input");
        const task_actions = document.createElement("div");
        const task_edit = document.createElement("button");
        const task_delete = document.createElement("button");

        task_content.classList.add("content");

        // task_input.classList.add("text");
        // task_input.type = "text";
        // task_input.value = inputValue;
        // task_input.setAttribute("readonly", "readonly");

        task_actions.classList.add("actions");

        task_edit.classList.add("edit");
        task_edit.innerHTML = "Editar";

        task_delete.classList.add("delete");
        task_delete.innerHTML = "Deletar";

        task_content.innerHTML = `<input type="text" class="text" value="${task.task}" readonly>`;

        task_el.appendChild(task_content);
        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);
        task_el.appendChild(task_actions);
        taskList.appendChild(task_el);

        task_edit.addEventListener('click', e => {
            const input = task_content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                task.task = e.target.value;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                DisplayTasks();
            })
        })

        task_delete.addEventListener('click', e => {
            tasks = tasks.filter(t => t != task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            DisplayTasks();
        })
    });
}
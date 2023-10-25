type ID = string | number;

interface ITodo {
    userId: ID,
    id: ID,
    title: string,
    completed: boolean
}

interface IUser {
    id: ID,
    name: string,
}

(function () {
    // Globals
    const todoList = document.getElementById('todo-list');
    const userSelect = document.getElementById('user-todo');
    const form = document.querySelector('form');
    let todos: ITodo[] = [];
    let users: IUser[] = [];



    // Basic Logic
    function getUserName(userId: ID) {
        const user = users.find((u) => u.id === userId);
        return user?.name || '';
    }
    function printTodo({ id, userId, title, completed }: ITodo) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = String(id);
        li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(
            userId
        )}</b></span>`;

        const status = document.createElement('input');
        status.type = 'checkbox';
        status.checked = completed;


        const close = document.createElement('span');
        close.innerHTML = '&times;';
        close.className = 'close';


        li.prepend(status);
        li.append(close);

        todoList?.prepend(li);
    }


    function createUserOption(user: IUser) {
        if (userSelect) {
            const option = document.createElement('option');
            option.value = String(user.id);
            option.innerText = user.name;

            userSelect.append(option);
        }
    }



    function alertError(error: Error) {
        alert(error.message);
    }

})();
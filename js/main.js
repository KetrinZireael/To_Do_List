const toDoList = document.querySelector('.checkbox');
const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    if (input.value === '') {
        return;
    }
    createElements(input.value);
    input.value = '';
});

let createElements = (value) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');

    const trash = document.createElement('button');

    li.className = 'list';
    li.textContent = value;

    checkbox.type = 'checkbox';
    checkbox.className = 'custom__checkbox';

    trash.className = 'trash';
    trash.title = 'Click on trash to delete';
    
    toDoList.appendChild(li);
    li.insertBefore(checkbox, li.firstChild);
    
    li.appendChild(trash);

    scrollToLastElement();

    deleteElement(trash, li);

    checkbox.addEventListener('click', e => {
        li.classList.toggle('list__active');
    });
};

let scrollToLastElement = () => {
    const divList = document.querySelector('.app__list');
    divList.scrollTop = divList.scrollHeight;
};

let deleteElement = (trash, li) => {
    trash.addEventListener('click', (e) => {
        toDoList.removeChild(li);
    });
};


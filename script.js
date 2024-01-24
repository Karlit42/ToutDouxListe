const tasks = document.getElementById('tasks');

// je définie la classe Task avec comme propriétés le titre et la priorité, une méthode constructor et une méthode d'affichage de nouvelle tache qui consiste en la création d'un nouvel élément de liste à l'évennement click du bouton

class Task {
    title;
    priority;

    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
    }

    displayTask() {
        const newLi = document.createElement("li");
        newLi.classList.add('task-item');

        const newTitle = document.createElement("span");
        newTitle.classList.add('task-title');
        newTitle.textContent = `${this.title}`;

        const newPriority = document.createElement("span");
        newPriority.classList.add('task-priority', `task-priority--${this.priority}`);
        newPriority.textContent = `${this.priority}`;

        const button = document.createElement('button');
        button.classList.add('task-action');
        button.textContent = "Changer le statut";
        button.addEventListener('click', () => {
            newLi.classList.toggle('task-item--ended');
        });

        newLi.append(newTitle, newPriority, button);
        tasks.append(newLi);
    }
};

// je fais une instenciation de la classe Task pour créer une nouvelle tache et l'afficher au click sur le bouton et je remets les valeurs à zero

const taskForm = document.getElementById('new-task');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const titleInput = document.querySelector('.form-input[name="title"]');
    const prioritySelect = document.querySelector('.form-input[name="priority"]');

    new Task(titleInput.value, prioritySelect.value).displayTask();

    titleInput.value = "";
    prioritySelect.value = "1";
    
});

//// je définie la classe PostIt avec comme propriétés un text et une couleur, une méthode constructor et une méthode d'affichage du nouveau postit qui consiste en la création d'une nouvelle à l'évennement click du bouton

const postits = document.getElementById('postits');

class Postit {
    text
    color 

    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    displayNewPostit() {
        const newPostit = document.createElement("div");
        newPostit.classList.add('postit');
        newPostit.style.borderColor = this.color;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add('postit-action');
        deleteButton.innerHTML = "&times;"

        deleteButton.addEventListener('click', () => {
            newPostit.remove();
        })

        const newText = document.createElement("p");
        newText.textContent = this.text;

        newPostit.append(deleteButton, newText);

        postits.append(newPostit);
    }
};

// je fais une instenciation de la classe Postit pour créer un nouveau postit et l'afficher au click sur le bouton et je remets les valeurs à zero

const postitForm = document.getElementById('new-postit');

postitForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const textInput = document.querySelector('.form-input[name="content"]');
    const colorSelect = document.querySelector('.form-input[name="color"]');

    new Postit(textInput.value, colorSelect.value).displayNewPostit();
    textInput.value= "";
    colorSelect.value = "#000000";
});











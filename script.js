const tasks = [
  {
    id: 1,
    title: "Nettoyer le sol",
    description: "Balayage complet et serpillage. Pensez à faire les plinthes",
    category: "home",
    status: "todo",
    date: "10/10/2023"
  },
  {
    id: 2,
    title: "Match de rugby",
    description: "Match de rugby de la coupe du Monde",
    category: "sport",
    status: "progress",
    date: "28/10/2023"
  },
  {
    id: 4,
    title: "To Do List Workshop",
    description: "Preparer le support pour le live demo de to do list pour apprendre la manipulation du DOM afin de la présenter",
    category: "code",
    status: "done",
    date: "27/09/2023"
  },
  {
    id: 4,
    title: "Choux kale à congeler",
    description: "Aller chercher du choux kale, le blanchir 3 min et le repartir en sac pour congélation",
    category: "home",
    status: "todo",
    date: "12/10/2023"
  }
];

let id = 5;
let filter = "all";

const todoContainer = {
  home: document.querySelector('#home'),
  code: document.querySelector('#code'),
  sport: document.querySelector('#sport')
};

// Gestion du formulaire d'ajout
document.getElementById('taskForm').addEventListener('submit', (e) => addTask(e));
const addTask = (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const status = document.getElementById('status').value;

  tasks.push({
    id: id,
    title: title,
    description: description,
    category: category,
    status: status,
    date: date
  })

  id++;
  render();
};

const createCard = (task) => {
  const fragment = document.createElement('div');
  fragment.innerHTML = `<div class="card">
    <h3>Title : ${task.title}</h3>
    <h5><span>Description de la tache: </span>${task.description}</h5>
    <h6><span>Status: </span>${task.status}</h6>
    <p><span>Date butoire: </span>${task.date}</p>
  </div>`;
  return fragment;
};

const render = () => {
  home.innerHTML = null;
  code.innerHTML = null;
  sport.innerHTML = null;

  for (let i = 0; i < tasks.length; i++) {
    if (filter === "all" || tasks[i].category === filter) {
      const card = createCard(tasks[i]);

      // if (tasks[i].category === "home") {
      //   home.appendChild(card)
      // }
      // if (tasks[i].category === "sport") {
      //   sport.appendChild(card)
      // }
      // if (tasks[i].category === "code") {
      //   code.appendChild(card)
      // }

      todoContainer[tasks[i].category].appendChild(card);
    }

  }
};

const updateFilter = (type) => {
  filter = type;
  render();
};

render();
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
    id: 3,
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


let idNew = 5;
const home = document.querySelector('#home');
const code = document.querySelector('#code');
const sport = document.querySelector('#sport');

// Objectif 1 ajouter un élement à ma liste
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleNew = document.getElementById('title').value;
  const descriptionNew = document.getElementById('description').value;
  const categoryNew = document.getElementById('category').value;
  const statusNew = document.getElementById('status').value;
  const dateNew = document.getElementById('date').value;

  tasks.push({
    id: idNew,
    title: titleNew,
    description: descriptionNew,
    status: statusNew,
    category: categoryNew,
    date: dateNew
  })

  idNew++;
  render();
});

const render = () => {

  home.innerHTML = null;
  code.innerHTML = null;
  sport.innerHTML = null;

  for (let i = 0; i < tasks.length; i++) {

    const div = document.createElement('div');

    const template = `<div class="card">
      <h3>Titre :${tasks[i].title}</h3>
      <h5>Description de la tache: <span>${tasks[i].description}</span></h5>
      <h6>Status: ${tasks[i].status}</h6>
      <p>Date butoire: ${tasks[i].date}</p>
      <div class="stars">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style="fill: black">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
      </div>
      <div class="trash">
        <svg id="trash_icon_${tasks[i].id}" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
        </svg>
      </div>
    </div>`;

    div.innerHTML = template;

    if (tasks[i].category === "home") home.appendChild(div);
    if (tasks[i].category === "code") code.appendChild(div);
    if (tasks[i].category === "sport") sport.appendChild(div);
  }

  addStarsClicker();
  addTrashClicker();
}

const addStarsClicker = () => {
  const stars = document.querySelectorAll('.stars svg')
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
      if (stars[i].style.fill === "yellow") stars[i].style.fill = "#f0f0f0"
      else stars[i].style.fill = "yellow"
    })
  }
}

const addTrashClicker = () => {
  const trashs = document.querySelectorAll('.trash svg');
  for (let i = 0; i < trashs.length; i++) {
    trashs[i].addEventListener('click', () => {
      const long = trashs[i].id.length
      const id = parseInt(trashs[i].id[long - 1], 10);
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
          tasks.splice(i, 1);
        }
      }
      render();
    })
  }
}

render();
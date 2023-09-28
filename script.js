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
]

// Objectif 1 ajouter un élement à ma liste
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("Submit Forms");
});

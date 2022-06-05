const teams = [
  {
    img: "wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnet",
    role: "Founder & CEO",
  },
  {
    img: "maria-medoro-chief-editor.jpg",
    name: "Maria Medorol",
    role: "Chief Editor",
  },
  {
    img: "walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager",
  },
  {
    img: "angela-proietti-social-media-manager.jpg",
    name: "Angela Proietti",
    role: "Social Media Manager",
  },
  {
    img: "scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer",
  },
  {
    img: "barbara-gabrielli-graphic-designer.jpg",
    name: "Barbara Gabrielli",
    role: "Graphic Designer",
  },
];

const postContainer = document.querySelector(".post-container");
const btnSubmit = document.getElementById("submit");

function addCard (img, name, role){
  postContainer.innerHTML += `
  <div class="positioning"> 
    <div class="post">
        <img src="./img/${img}"</img>
    </div>
  
    <div class="post-txt">
        <h4>${name}</h4>
        <p>${role}</p>
    </div>
  
  </div>`
}

for(let i=0; i<teams.length;i++){
  addCard(teams[i].img, teams[i].name, teams[i].role);
}

btnSubmit.addEventListener("click", () => {
  let imgLabel = document.getElementById("image");
  let nameLabel = document.getElementById("name");
  let roleLabel = document.getElementById("role");

  addCard(imgLabel, nameLabel, roleLabel);
})
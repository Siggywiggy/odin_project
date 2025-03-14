// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey Im red!"

// an <h3> with blue text that says “I’m a blue h3!”

const headerThree = document.createElement("h3");
headerThree.style.color = "blue";
headerThree.textContent = "Im a blue h3!”";

// adding para and headerThree to body element as children

const container = document.body;
container.appendChild(para);
container.appendChild(headerThree);

const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pinkDiv")

const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div!";
const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!";

pinkDiv.appendChild(headerOne);
pinkDiv.appendChild(paraTwo);
container.appendChild(pinkDiv);
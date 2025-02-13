const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
// white, black, purple, yellow, or psychedelic
  switch (choice) {
  case "white":
	update("black","white");
    break;
  case "black":
    update("white","black");
    break;
  case "purple":
    update("white", "purple");
    break;
  case "yellow":
    update("black", "yellow");
    break;
  case "psychedelic":
    update("lime", "purple");
    break;
  default:
    update("black", "white")

	}
 
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

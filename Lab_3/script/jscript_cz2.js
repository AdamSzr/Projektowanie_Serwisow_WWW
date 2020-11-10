// ---------------------------- dodanie custom css do html ---------------------------------------------
var link = document.createElement("link");

link.href = "./css/style.css";
link.rel = "stylesheet";
link.type = "text/css";

link.addEventListener("load", () => {
  console.log("success");
});

link.addEventListener("error", () => {
  console.log("success");
});

document.head.appendChild(link);

// ---------------------------- Click Event ---------------------------------------------
let deck = document.getElementsByClassName("card-deck")[0];
let mybool = false;

var card_element = document.createElement("div");
card_element.addEventListener("click", (element, mouse_event) => {
  if (mybool) {
    card_element.style.backgroundColor = "white";
    mybool = false;
  } else {
    card_element.style.backgroundColor = "red";
    mybool = true;
  }
});

card_element.classList.add("card");
card_element.style.borderRadius="30px";
card_element.style.border = "3px solid green";
card_element.style.marginTop="30px";
card_element.innerHTML = `
<div class="card-body">
          <h5 class="card-title text-center">Click aby zmienic kolor</h5>
          <p class="card-text text-center">
          Element ten został wygenerowany poprzez js, oraz posiada aktywny event "Click".
          Sprawdz co się stanie.
          </p>
</div>
`;
deck.appendChild(card_element);
// ---------------------------- input Events ---------------------------------------------
deck = document.getElementsByClassName("form-group")[0];
deck.innerHTML = `
<form >
    <label for="exampleFormControlInput1">Nickname</label>
    <input type="text" class="form-control-plaintext" id="exampleFormControlInput1" placeholder="name@example.com">
    <label for="inputPassword2">Password</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="password">
</form>
`;

const password = document.getElementById("inputPassword2");
var len=0;

password.addEventListener("input", (event) => {
 console.log("input is "+password.value.length+" character long");
 len=password.value.length;
});

password.addEventListener("focus", (event) => {
  if(len<8)
    password.style.background = "red";
  else 
  event.target.style.background = "green";

});
password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});

// ---------------------------- Print Events ---------------------------------------------
window.addEventListener('beforeprint', (event) => {
  console.log('Before print');
});

window.addEventListener('afterprint', (event) => {
  console.log('After print');
});
//------------------------------ Copy not availeble -----------------------------------
const source = document.getElementById('nonCopyText');

source.addEventListener('copy', (event) => {
    event.preventDefault();
    return false;
});
source.addEventListener('paste', (event) => {
  event.preventDefault();
  return false;
});
source.addEventListener('cut', (event) => {
  event.preventDefault();
  return false;
});
// -------------------------- mouse Pos event ------------------------------
function UpdateMousePosition(event)
{
    mousePosDisplay.innerText = ` Mouse Position: ${event.offsetX}:${event.offsetY}`;
}

var mouseOverField = document.getElementById('mousePosition');
var mousePosDisplay= document.getElementById('mousePos');
mouseOverField.addEventListener('mousemove',UpdateMousePosition);


var btnDeactivate= document.getElementById('mousePosDeactivate');
btnDeactivate.addEventListener('click',(event)=>{
  mouseOverField.removeEventListener('mousemove',UpdateMousePosition);
  
});


// W tym pliku wykorzystałem:
// - blur
// - focus
// - input
// - load
// - error
// - beforepring
// - afterprint
// - copy
// - paste
// - cut
// RAZEM : 10
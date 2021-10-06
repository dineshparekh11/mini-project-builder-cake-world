// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the cake
var ingredients = {
  chocolate: 300,
  strawberry: 100,
  butterscotch: 200,
  vannilla: 250,
  redvelvet: 350
};


var state = {
  chocolate: true,
  strawberry: true,
  butterscotch: true,
  vannilla: true,
  redvelvet: true
};

function renderall()
{
  renderChocolate();
  renderStrawberry();
  renderButterscotch();
  renderVannila();
  renderRedvelvet();
  renderButtons();
  renderPrice();
  renderBill();
}


let buttons=document.querySelectorAll("#buttonslist button")
let layers= document.querySelectorAll(".cakelayer")

buttons[0].addEventListener("click",chocolatelayer)
function chocolatelayer()
{
    layers[0].classList.toggle("#lastlayer")

}

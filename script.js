// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the cake
var  cake= 100;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var layers = {
  Chocolate: 300,
  Strawberry: 100,
  Butterscotch: 200,
  Vannila: 250,
  Redvelvet: 350
};

//Current state of the ingredients in the cake
var state = {
  Chocolate: true,
  Strawberry: true,
  Butterscotch: true,
  Vannila: true,
  Redvelvet: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderChocolate();
  renderStrawberry();
  renderButterscotch();
  renderVannila();
  renderRedvelvet();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}
let items=document.querySelectorAll(".items")
let price=document.querySelector(".price-details").innerHTML
   let {0:inr, 1:cost}=price.split(" ")

function renderChocolate() {
  let chocolate = document.querySelector("#chocolate");
  //you can also use getElementById
  if (state.Chocolate) {
    patty.style.display = "inherit";
    items[0].innerHTML="Chocolate"
  } 
  else
   {
    chocolate.style.display = "none";
    items[0].innerHTML=""
  }
}

function renderStrawberry() {
  //Trial 1 - Change the visibility of strawberry based on state by manipulating the DOM
  let strawberry= document.querySelector("#strawberry")
  if(state.Strawberry)
  {
    strawberry.style.display = "inherit"
    items[1].innerHTML="Strawberry"

  }
  else
  {
    strawberry.style.display="none"
    items[1].innerHTML=""
  }

}

function renderButterscotch() {
  //Trial 1 - Change the visibility of butterscotch based on state by manipulating the DOM
  let butterscotch= document.querySelector("#butterscotch")
  if(state.Butterscotch)
  {
    butterscotch.style.display = "inherit"
    items[2].innerHTML="Butterscotchs"

  }
  else
  {
    butterscotch.style.display="none"
    items[2].innerHTML=""

   
  }
}

function renderVannila() {
  //Trial 1 - Change the visibility of Vannila based on state by manipulating the DOM
  let vannila= document.querySelector("#Vannila")
  if(state.Vannila)
  {
    vannila.style.display = "inherit"
    items[3].innerHTML="vannila"

  }
  else
  {
    vannila.style.display="none"
    items[3].innerHTML=""

   
  }
}


function renderRedvelvet() {
  //Trial 1 - Change the visibility of Redvelvet based on state by manipulating the DOM
  let redvelvet= document.querySelector("#redvelvet")
  if(state.Lettuce)
  {
    redvelvet .style.display = "inherit"
    items[4].innerHTML="Redvelvet"


  }
  else
  {
    redvelvet.style.display="none"
    items[4].innerHTML=""

   
  }
}

document.querySelector(".btn-chocolate").onclick = function () {
  state.Chocolate = !state.Chocolate;
  if (state.Chocolate)
  {
  cost = Number.parseInt(cost) + ingredients.Chocolate
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }
  else
  {
    cost = Number.parseInt(cost) - ingredients.Chocolate
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }

  renderAll();
};


// Trial 2 - Setup event listener for the strawberry button

document.querySelector(".btn-strawberry").onclick = function () {
  state.Strawberry = !state.Strawberry;
  if (state.Strawberry)
  {
  cost = Number.parseInt(cost) + ingredients.Strawberry
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }
  else
  {
    cost = Number.parseInt(cost) - ingredients.Strawberry
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }

  renderAll();
};

// Trial 2 - Setup event listener for the butterscotch button
document.querySelector(".btn-butterscotch").onclick = function () {
  state.Butterscotch = !state.Butterscotch;
  if (state.Butterscotch)
  {
  cost = Number.parseInt(cost) + ingredients.Butterscotch
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }
  else
  {
    cost = Number.parseInt(cost) - ingredients.Butterscotch
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }

  renderAll();
};



// Trial 2 - Setup event listener for the Vennila button

document.querySelector(".btn-vennila").onclick = function () {
  state.Vannila = !state.Vannila;
  if (state.Vannila)
  {
  cost = Number.parseInt(cost) + ingredients.Vannila
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }
  else
  {
    cost = Number.parseInt(cost) - ingredients.Vannila
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }

  renderAll();
};


// Trial 2 - Setup event listener for the Redvelvet button

document.querySelector(".btn-redvelvet").onclick = function () {
  state.Redvelvet = !state.Redvelvet;
  if (state.Redvelvet)
  {
  cost = Number.parseInt(cost) + ingredients.Redvelvet
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }
  else
  {
    cost = Number.parseInt(cost) - ingredients.Redvelvet
  document.querySelector(".price-details").innerHTML= inr + " " + cost
  }

  renderAll();
};

// Write your code on this file. Please don't change the existing code

//write your own code
window.onload= () => renderall()    

function renderall()
{
  
    chocolate()
    vanilla()
    strawberry()
    redvelvet()
    butterscotch()

}
var layerstate={
    chocolate:false,
    strawberry:false,
    butterscotch:false,
    redvelvet:false,
    vanilla:false,
}
var layercost=
{
    chocolate:300,
    strawberry:100,
    butterscotch:200,
    redvelvet:350,
    vanilla:250,

}

let buttons=document.querySelectorAll("#buttonslist button")
let layers= document.querySelectorAll(".cakelayer")
let integrients = document.querySelectorAll(".integrients")
 let total=0
 let cost = document.querySelector("#cost")


buttons[0].addEventListener("click",chocolate)
function chocolate()
{

 layerstate.chocolate=!layerstate.chocolate
 if(layerstate.chocolate)
 { 

document.querySelector("#lastlayer").classList.add("lastlayer");
integrients[0].innerHTML="Chocolate----> 300"
total+=layercost.chocolate
cost.innerHTML=""

 }
 else
 {
    document.querySelector("#lastlayer").classList.remove("lastlayer");
    integrients[0].innerHTML=""
    total-=layercost.chocolate
    cost.innerHTML=""
 }    
}

//strawberry prograsion 
buttons[1].addEventListener("click",strawberry)
function strawberry()
{

 layerstate.strawberry=!layerstate.strawberry
 if(layerstate.strawberry)
 { 

document.querySelector("#fourthlayer").classList.add("fourthlayer");
integrients[1].innerHTML="Strawberry----> 100"
total+=layercost.strawberry
cost.innerHTML=""
 }
 else
 {
    document.querySelector("#fourthlayer").classList.remove("fourthlayer");
    integrients[1].innerHTML=""
    total-=layercost.strawberry
    cost.innerHTML=""
 }    
}
//butterscoth progresion 
buttons[2].addEventListener("click",butterscotch)
function butterscotch()
{

 layerstate.butterscotch=!layerstate.butterscotch
 if(layerstate.butterscotch)
 { 

document.querySelector("#thridlayer").classList.add("thridlayer");
integrients[2].innerHTML="Butterscotch----> 200"
total+=layercost.butterscotch
cost.innerHTML=""
 }
 else
 {
    document.querySelector("#thridlayer").classList.remove("thridlayer");
    integrients[2].innerHTML=""
    total-=layercost.butterscotch
    cost.innerHTML=""
 }    
}

//vanilla progresion
buttons[3].addEventListener("click",vanilla)
function vanilla()
{

 layerstate.vanilla=!layerstate.vanilla
 if(layerstate.vanilla)
 { 

document.querySelector("#secondlayer").classList.add("secondlayer");
integrients[3].innerHTML="Vanilla------> 250"
total+=layercost.vanilla
cost.innerHTML=""


 }
 else
 {
    document.querySelector("#secondlayer").classList.remove("secondlayer");
    integrients[3].innerHTML=""
    total-=layercost.vanilla
   // cost.innerHTML=total

 }    
}


//redvelvet progresion
buttons[4].addEventListener("click",redvelvet)
function redvelvet()
{

 layerstate.redvelvet=!layerstate.redvelvet
 if(layerstate.redvelvet)
 { 

document.querySelector("#firstlayer").classList.add("firstlayer");
integrients[4].innerHTML="Redvelvet-------> 350"
total+=layercost.redvelvet
cost.innerHTML=""
 }
 else
 {
    document.querySelector("#firstlayer").classList.remove("firstlayer");
    integrients[4].innerHTML=""
    total-=layercost.redvelvet
    cost.innerHTML=""
 }    
}
//buy button progresion

buttons[0].addEventListener("click",chocolatelayer)
function chocolatelayer()
buttons[5].addEventListener("click",buy)
function buy()
{
    layers[0].classList.toggle("#lastlayer")
    cost.innerHTML= "Total cost ------> " +  total

}
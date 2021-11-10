/*Fill your code */


window.onload= () => renderall()    

function renderall()
{
    chocolatelayer()
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
let integrients = document.querySelectorAll(".integrients")
 let total=0
 let cost = document.querySelector("#cost")

 
buttons[0].addEventListener("click",chocolatelayer)
function chocolatelayer()
{

 layerstate.chocolate=!layerstate.chocolate
 if(layerstate.chocolate)
 { 

document.querySelector("#lastlayer").classList.add("lastlayer");
integrients[0].innerHTML="Chocolate-----300"
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

//strawberry
buttons[1].addEventListener("click",strawberry)
function strawberry()
{

 layerstate.strawberry=!layerstate.strawberry
 if(layerstate.strawberry)
 { 

document.querySelector("#fourthlayer").classList.add("fourthlayer");
integrients[1].innerHTML="Strawberry-----100"
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



//butterscoth
buttons[2].addEventListener("click",butterscotch)
function butterscotch()
{

 layerstate.butterscotch=!layerstate.butterscotch
 if(layerstate.butterscotch)
 { 

document.querySelector("#thridlayer").classList.add("thridlayer");
integrients[2].innerHTML="Butterscotch-----200"
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

//
buttons[3].addEventListener("click",vanilla)
function vanilla()
{

 layerstate.vanilla=!layerstate.vanilla
 if(layerstate.vanilla)
 { 

document.querySelector("#secondlayer").classList.add("secondlayer");
integrients[3].innerHTML="Vanilla-------250"
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


//redvelvet
buttons[4].addEventListener("click",redvelvet)
function redvelvet()
{

 layerstate.redvelvet=!layerstate.redvelvet
 if(layerstate.redvelvet)
 { 

document.querySelector("#firstlayer").classList.add("firstlayer");
integrients[4].innerHTML="Redvelvet---------350"
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


//buy button

buttons[5].addEventListener("click",buy)
function buy()
{
    cost.innerHTML= "Total cost ------- " +  total

}





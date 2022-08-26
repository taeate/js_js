
const title = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

function handleClick(){
  title.style.color = "red";
}

function handleMouseEnter(){
  title.style.color = "blue";
}

function handleMouseOut(){
  title.style.color = "black";
}

title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseout", handleMouseOut)

console.log(title);


 


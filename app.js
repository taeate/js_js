
const title = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

function handleClick(){
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);

console.log(title);


 



const h1 = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

function handleClick(){

  const currentColor = h1.style.color;
  let newColor;

  if(currentColor === "red"){
    newColor = "blue";
  }else{
    newColor = "red";
  }
  h1.style.color = newColor;
}


h1.addEventListener('click', handleClick);




 


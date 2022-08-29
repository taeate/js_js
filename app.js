
const h1 = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

function handleClick(){

  const clickedClass = "clicked";
  h1.classList.toggle("clicked");
}

 
h1.addEventListener('click', handleClick);




 


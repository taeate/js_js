
const h1 = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

function handleClick(){

  const clickedClass = "clicked";

  if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
  }else{
    h1.classList.add(clickedClass);
  }
}

 
h1.addEventListener('click', handleClick);




 


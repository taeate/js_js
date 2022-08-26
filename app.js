
const h1 = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

function handleClick(){
  h1.style.color = "red";
}

function handleMouseEnter(){
  h1.style.color = "blue";
}

function handleMouseOut(){
  h1.style.color = "black";
}

function handleResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleCopy(){
  alert("복사할수없습니다!");
}

function handleoffline(){
  alert("SOS no WIFI!");
}

function handleonline(){
  alert("SOS ONLINE!");

}


h1.onclick = handleClick;
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseout", handleMouseOut)

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleoffline);
window.addEventListener("online", handleonline);



 



function sayHello(){

  let name = prompt("이름을 입력하세요.");

  console.log("Hello my name is " + name);
  
  alert(name + "님 환영합니다.");

  return name;
}

document.write(sayHello() + "님");
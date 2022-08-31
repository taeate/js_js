const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const gretting = document.querySelector('#gretting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';



function onLoginSubmit(event) {
  event.preventDefault(); //기본 동작 멈춤
  loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden class 추가
   // loginInput 값을 변수에 저장
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGretting();
}

function paintGretting(){
  const username = localStorage.getItem(USERNAME_KEY);
  gretting.innerText = `안녕하세요 ${username} 님 반갑습니다.`; 
  gretting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the gretting
  paintGretting();
}
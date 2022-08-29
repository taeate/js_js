const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const gretting = document.querySelector('#gretting');

const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
  event.preventDefault(); //기본 동작 멈춤
  loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden class 추가
  const username = loginInput.value; // loginInput 값을 변수에 저장
  localStorage.setItem("username", username);
  gretting.innerText = `안녕하세요 ${username} 님 반갑습니다.`; 
  gretting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

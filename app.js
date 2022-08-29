const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const gretting = document.querySelector('#gretting');

const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  gretting.innerText = `안녕하세요 ${username} 님 반갑습니다.`;
  gretting.classList.remove(HIDDEN_CLASSNAME);
  
}


loginForm.addEventListener('submit', onLoginSubmit);

const loginInput = document.querySelector('#login-form input');
const loginbutton = document.querySelector('#login-form button');

function onLoginBtnClick() {
  const username = loginInput.value;
  if(username === ""){
    alert("이름을 입력해주세요.");
  } else if(username.length > 15){
    alert("너무 길어요.");
  } 
}
loginbutton.addEventListener('click', onLoginBtnClick);
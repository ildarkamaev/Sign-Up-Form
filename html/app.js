const SignUpBtn = document.getElementById('signUp');
const SignInBtn = document.getElementById('signIn');
const Container = document.getElementById('container');

SignUpBtn.addEventListener('click', () =>
    container.classList.add('right-panel-active')
);

SignInBtn.addEventListener('click', () =>
    container.classList.remove('right-panel-active')
);
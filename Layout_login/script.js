const formulario = document.querySelector('form');
const Dados = [];
let login_email = 'testeemail@hotmail.com';
let login_senha = 'senhateste123';

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let email = formulario.querySelector('#email').value;
    let senha = formulario.querySelector('#senha').value;
    if(verificacampo(email)&&verificacampo(senha)){
        validacao();
    }
    formulario.reset();
});
function validacao(){
    let email = formulario.querySelector('#email').value;
    let senha = formulario.querySelector('#senha').value;
    if(senha == login_senha && email == login_email){
        alert('Login realizado com sucesso')
    
    }else alert('Email ou senha incorreto!');
}
function verificacampo(campo){
    if(campo == ''){
        alert('Preencha todos os campos');
        return false;
    }
    else return true;
}
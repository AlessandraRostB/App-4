<button type = "submit">Entrar</button>

BOTAO.addEventListener('click', function(){
    document.body.style = 'background-color: orange';
})

const USUARIO = document.getElementById('usuario');
const SENHA = document.getElementById('senha');
const CONFIRMA_SENHA = document.getElementById('confirma_senha');
const BOTAO = document.querySelector('#botao');

BOTAO.addEventListener('click', function(){

    let usuarioSalvo = window.localStorage.getItem('salvo')
    let usuarioAtual = USUARIO.value;
    let senhaSalvo = window.localStorage.getItem('usuario')
    let senhaAtual = SENHA.value;

    if(usuarioAtual === usuarioSalvo && senhaAtual ==

        window.location.href ==  'cadastrar.html')
        window.location.href ==  'app.html'
})
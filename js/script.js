

const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

console.log(link_mobile);

link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
        menu_mobile.classList.add('showmenu');
        console.log(menu_mobile);
        
    })
})

//menu_mobile.classList.add('hidemenu');

bx.addEventListener('click', () =>{
    bx.classList.toggle('activebx');

    menu_mobile.classList.toggle('showmenu');
    console.log(menu_mobile);
})

function exibirModal() {
    var senha = gerarSenha();
    document.getElementById("senha").innerText = senha;
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function gerarSenha() {
    var senha = Math.floor(Math.random() * 900000) + 100000;
    return senha;
}
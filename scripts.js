//função que abrevia o nome
function mudarNome(){
    var nome = document.getElementById("nome");
    var tam = window.innerWidth;
    console.log(tam)
    
    if(tam < 920){
        nome.innerHTML = "Welington F. Souza"
    }else{
        nome.innerHTML = "Welington Ferreira de Souza &lpar; &rpar;"
    }
}

//execução da função
mudarNome();

//revisando o tamanho da tela
window.addEventListener('resize', function(){
      mudarNome();
});


// FUNÇÃO PARA INCREMENTAR NAVBAR
var hamburguer = document.querySelector(".hamburguer");
var navMeunu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    navMeunu.classList.toggle("active");
})


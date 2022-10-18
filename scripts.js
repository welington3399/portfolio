//função que abrevia o nome
function mudarNome(){
    var nome = document.getElementById("nome");
    var tam = window.innerWidth;
    console.log(tam)
    
    if(tam < 900){
        nome.innerHTML = "Welington F. Souza"
    }else{
        nome.innerHTML = "Welington Ferreira de Souza"
    }
}

//execução da função
mudarNome();

//revisando o tamanho da tela
window.addEventListener('resize', function(){
      mudarNome();
});
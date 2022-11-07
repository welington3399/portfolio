// alert ("página não concluída!")

//função que abrevia o nome
function mudarNome(){
    var nome = document.getElementById("nome");
    var tam = window.innerWidth;
    console.log(tam)
    
    if(tam < 1080){
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


// FUNÇÃO PARA INCREMENTAR NAVBAR
var hamburguer = document.querySelector(".hamburguer");
var navMeunu = document.querySelector("#nav-menu")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    navMeunu.classList.toggle("active");

})

// NOME REDIGITAR
function typeWriter (elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

const nomee = document.querySelector("#nome_start");

typeWriter(nomee)


//mudar cor de fundo
var bto = document.getElementById("btn_cor")
var verf = document.getElementById("verf")

bto.addEventListener("click", function(click){
    if (verf.checked == false){
        console.log("escuro");
        bto.value = "modo claro";
        verf.checked = "true";
        console.log(verf.checked)
        document.querySelector("body").classList.add("black");
        document.querySelector("body").classList.remove("white");
    }else{
        console.log("claro");
        bto.value = "modo noturno";
        verf.checked = "";
        console.log(verf.checked);
        document.querySelector("body").classList.remove("black");
        document.querySelector("body").classList.add("white");    
    } 
})

//sumir seta
var seta = document.getElementById("subir")
document.addEventListener ("scroll", sumir)

function sumir(){  
    if (window.scrollY > 10) {
       seta.style.display = "block";
    }else{
        seta.style.display = "none";
    }
}

sumir()


// replicar itens projeto
function estrutura2(imagem, link, nome, conteudo){
    return `
    <div class="estrutura_div_proj">
        <div  class="format churras">
            <img class="img_proj" src="imagens/${imagem}.png" alt="" >
            <div class="transparent">
                <a href="${link}" target="_blank">ir para página</a>
            </div>
        </div>
         <div class="text_proj"> 
         <div class="teste">
            <h2>${nome}</h2>
         </div>
            
            <p>${conteudo}</p>
        </div>
    </div>
    `
}

function estrutura(){
    return `
    <div class="estrutura_div_proj">
        <div  class="format churras">
            <div class="faixa">
                <h3 class="texto"> em breve!</h3>
            </div>
        </div>
        <div class="text_proj">
            <h2>em breve!</h2>
            <p>novos projetos estão sendo desenvolvidos.</p>
        </div>
    </div>
    `
}

document.querySelector("#cont_proj").innerHTML = `
    ${estrutura2("proj_protifolio",
    "https://welington3399.github.io/churrascometro/",
    "churrascometro",
    "no churrascometro você poderá ter uma noção do que irá precisar para fazer um bom churrasco."
    )}

    ${estrutura2("pag_pessoal",
    "https://welington3399.github.io/portfolio/",
    "página pessoal",
    "minha página pessoal feita por mim com coisas que venha aprendendo durante o meu período de estudo."
    )}

    ${estrutura()}

    ${estrutura()}
`

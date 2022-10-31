alert ("página não concluída!")

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


// MUDAR COR
var bto = document.getElementById("btn_cor")
var name_btn = document.getElementById("btn_cor").value
console.log(bto.value)
var verf = document.getElementById("verf")
    //cores
var cor = document.getElementById("modedark")
var cab = document.getElementById("cabecalho")
var nav_menu = document.getElementById ("nav-menu")
var cont_colors = document.getElementById("inicio_colors")
var sobre_colors = document.getElementById("sobre_colors")
var ponto_color = document.getElementById("ponto")

var footer = document.getElementById("footer")

console.log(verf.checked)

bto.addEventListener ("click", function (click){
    //FUNDO ESCURO 
  if (verf.checked == false){
        verf.checked = "true";
        bto.value = "modo claro";
        cor.style.background = "#18191a";
        nav_menu.style.background = "#242526";
        document.querySelector("body").setAttribute("text","white");
        cab.style.background = "#242526";
        cont_colors.style.background = "#242526";
        cab.style.boxShadow = "rgb(0 0 0 / 30%) 0px 1px 2px 0px, rgb(0 0 0 / 15%) 0px 1px 3px 1px";
        sobre_colors.style.background = "#242526";
        footer.style.background = "#242526";
        ponto_color.style.borderBottom = "5px solid white";
        ponto_color.style.borderLeft = "5px solid white";
        console.log(bto.value);
    // FUNDO CLARO
   }else{
        verf.checked = "";
        bto.value = "modo noturno";
        cor.style.background = "#f5f5f5";
        nav_menu.style.background = "#FFFFFF";
        document.querySelector("body").setAttribute("text","black");
        cab.setAttribute("class","headerB");
        cab.style.background = "white";
        cont_colors.style.background = "white";
        cab.style.boxShadow = "rgb(0 0 0 / 30%) 0px 1px 2px 0px, rgb(0 0 0 / 15%) 0px 1px 3px 1px;";
        sobre_colors.style.background = "white";
        footer.style.background = "white";
        ponto_color.style.borderBottom = "5px solid black";
        ponto_color.style.borderLeft = "5px solid black";
        console.log(bto.value);
    }

//testando marcação de check box
    function teste(){
        localStorage.setItem("fixo", verf.checked )
        let fixo = localStorage.getItem("fixo", verf.checked )
        console.log(fixo)
        if (fixo == "true"){
            cor.style.background = "#18191a";
            document.querySelector("body").setAttribute("text","white");
            cab.style.background = "#242526";
            cont_colors.style.background = "#242526";
            cab.style.boxShadow = "rgb(0 0 0 / 30%) 0px 1px 2px 0px, rgb(0 0 0 / 15%) 0px 1px 3px 1px";
            sobre_colors.style.background = "#242526";
            footer.style.background = "#242526"
            ponto_color.style.borderBottom = "5px solid white"
            ponto_color.style.borderLeft = "5px solid white"
            console.log(bto.value)
        }else{
            console.log("erro")
        }
    }
     teste()
    
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

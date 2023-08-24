const botao = document.querySelector(".botao");
const seletor = document.querySelector(".seletor");
const display = document.querySelector (".display");
const body = document.querySelector("body");


botao.addEventListener("click",(e)=>{
    display.innerHTML = seletor.value
    let a = document.createElement("div");
    a.classList.add("claseOi")
    body.appendChild(a)
})
//Botão Não
function desvia(t){
var btn = t;
btn.style.position = 'absolute'
btn.style.bottom = generatePosition(10,90)
btn.style.left = generatePosition(10,90)
}

var dialogo = document.getElementById("monikaNormal")

function generatePosition(min,max){
    return Math.random() * (max - min) + '%';
}
//

function botaoNao () {
    alert("Como você fez essa proeza? Seu monstro!")
}

i = 0
var mao = document.getElementById("maoBrava")

function maozinha (){
    console.log(i = i + 1)
    if (i == 1){
    alert("Quanta curiosidade, eu sou só uma mão.")
}
    if (i == 2){
        alert("Denovo isso? Eu sou só uma mão cara!")
    }
    if (i == 3){
        alert("Quer um soco?")
    }
    if (i == 4){    
        setTimeout(sumirMao,2000)
        window.scrollTo(0, 0);
        mao.style.visibility = "visible"
    }
    if (i >= 5){
        alert("...")
    }
}

function sumirMao() {
    mao.style.visibility = "hidden"
}

function jumpscare () {
    window.scrollTo(0, 0);
    var jumpscare = document.getElementById("Mjumpscare")
    jumpscare.style.height = "500px"
    document.getElementById("Mjumpscare").style.animation = 'susto 0.4s ease-in'
    var audio = document.getElementById("scream")
    audio.play()
    AfterJumpscare()
}

function AfterJumpscare (){
    var btnSim = document.getElementById("btnSim")
    btnSim.style.visibility = "hidden"
    dialogo.style.visibility = "visible"
    setTimeout(av1,1500)
}

function av1 (){
    alert("Talvez você não esteja tão preparado.")
    let x = alert("Aliás, feliz Halloween Ahaha...")
    x = "Ok"
    if (x == "Ok"){
        dialogo.style.visibility = "hidden"
    }
}
let ligada = Boolean

function acenderLuz (){
    var subTit = document.getElementById("subtitFin")
    var presente = document.getElementById("presente")
    var luz1 = document.getElementById("luz")
    var luz2 = document.getElementById("luz2")
    var lampada = document.getElementsByClassName("lampada")

    ligada = true

    if (ligada == true) {
        luz1.style.visibility = "visible"
        luz2.style.visibility = "visible"
        presente.style.visibility = "visible"
        subTit.style.visibility = "visible"
    } 
}

function abrirPresente () {
    var presente = document.getElementById("presente")
    presente.style.animation = 'abrirPresente 3s ease-in'
    presente.style.height = "300px"
    presente.style.transform = "translate(-50%, -450px)"
    setTimeout(() =>{
        avisoPresente()
    }, "3000")
}

var final = document.getElementById("avisoDoPresente")
let p = 0
function avisoPresente() {

if (p == 0){
    final.style.visibility = "visible"
    window.scrollTo(0, 2050);
    p = p + 1
    console.log(p)
}
    else {
    alert("Você já pegou seu presente, seu ganancioso.")
    }
}

function fecharAba() {
    var fechar = document.getElementById("fecharAvisoPresente")
    final.style.visibility = "hidden"
}

function pegarBombom() {
    var bombom = document.getElementById("bombom")

    bombom.style.visibility = "hidden"
    bombom.style.cursor = "pointer"
    alert("Você ganhou um Bombom! :)")
    //bombom.style.position = "absolute"
    //bombom.style.left = "10px"
    //bombom.style.top = "10px"
    //bombom.style.content = "Você Pegou um Bombom"
    //bombom.style.color = "aliceblue"
}
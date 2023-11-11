//pegar os botões pelo id
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");
var btn5 = document.getElementById("button5");
var btn6 = document.getElementById("button6");
var btn7 = document.getElementById("button7");
var btn8 = document.getElementById("button8");
var btn9 = document.getElementById("button9");
var btn10 = document.getElementById("button10");
var btn11 = document.getElementById("button11");
var btn12 = document.getElementById("button12");
var btn13 = document.getElementById("button13");
var btn14 = document.getElementById("button14");
var btn15 = document.getElementById("button15");
var btn16 = document.getElementById("button16");
var botaoMute = document.getElementById('btnmute');

//audios separados
var nossa = document.getElementById("nossa");
var vamosComecar = document.getElementById("vamoscomeçar");
var aiChaves = document.getElementById("aichaves");
var hahaha = document.getElementById("hahaha");
var mamae1 = document.getElementById("mamae1");
var mamae2 = document.getElementById("mamae2");
var mamae3 = document.getElementById("mamae3");
var naonao = document.getElementById("naonao");
var churros = document.getElementById("churros");
var falamalnao = document.getElementById("falamalnao");
var jatenho = document.getElementById("jatenho");
var discovoador = document.getElementById("discovoador");
var pirulito = document.getElementById("pirulito");
var orelhas = document.getElementById("orelhas");
var tremendodedmedo = document.getElementById("tremendodemedo");
var sabemqueserve = document.getElementById("sabemqueserve");

btn1.onclick = function(){
    voltarDoZero();
    nossa.play();
}
btn2.onclick = function(){
    voltarDoZero();
    vamosComecar.play();
}
btn3.onclick = function(){
    voltarDoZero();
    aiChaves.play();
}
btn4.onclick = function(){
    voltarDoZero();
    hahaha.play();
}
btn5.onclick = function(){
    voltarDoZero();
    mamae1.play();
}
btn6.onclick = function(){
    voltarDoZero();
    mamae2.play();
}
btn7.onclick = function(){
    voltarDoZero();
    mamae3.play();
}
btn8.onclick = function(){
    voltarDoZero();
    falamalnao.play();
}
btn9.onclick = function(){
    voltarDoZero();
    churros.play();
}
btn10.onclick = function(){
    voltarDoZero();
    naonao.play();
}
btn11.onclick = function(){
    voltarDoZero();
    jatenho.play();
}
btn12.onclick = function(){
    voltarDoZero();
    discovoador.play();
}
btn13.onclick = function(){
    voltarDoZero();
    pirulito.play();
}
btn14.onclick = function(){
    voltarDoZero();
    orelhas.play();
}
btn15.onclick = function(){
    voltarDoZero();
    tremendodedmedo.play();
}
btn16.onclick = function(){
    voltarDoZero();
    sabemqueserve.play();
}
btnmute.onclick = function(){
    voltarDoZero();
}

function voltarDoZero() {
    // todos os elementos de audio
    var som = document.querySelectorAll('audio');
    
    for (var i = 0; i < som.length; i++) {
        som[i].pause(); //pausar o som onde ele está
        som[i].currentTime = 0; //voltar o som do zero
    }
}
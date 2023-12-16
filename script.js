//identifica cada botão pela posição dele no html e executa os audios pela sua posição, também, no html 
document.getElementsByTagName('button')[0].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[0].play()};
document.getElementsByTagName('button')[1].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[1].play()};
document.getElementsByTagName('button')[2].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[2].play()};
document.getElementsByTagName('button')[3].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[3].play()};
document.getElementsByTagName('button')[4].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[4].play()};
document.getElementsByTagName('button')[5].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[5].play()};
document.getElementsByTagName('button')[6].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[6].play()};
document.getElementsByTagName('button')[7].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[7].play()};
document.getElementsByTagName('button')[8].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[8].play()};
document.getElementsByTagName('button')[9].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[9].play()};
document.getElementsByTagName('button')[10].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[10].play()};
document.getElementsByTagName('button')[11].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[11].play()};
document.getElementsByTagName('button')[12].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[12].play()};
document.getElementsByTagName('button')[13].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[13].play()};
document.getElementsByTagName('button')[14].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[14].play()};
document.getElementsByTagName('button')[15].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[15].play()};
document.getElementsByTagName('button')[16].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[16].play()};
document.getElementsByTagName('button')[17].onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[17].play()};
//botão de mute
document.getElementById('btnmute').onclick = function(){parar()};

//todos os elementos de áudio
var som = document.querySelectorAll('audio');

//função que faz os audios pararem apenas se a checkbox estiver verificada (usado nos botões com áudio)
function voltarDoZero() {
    var checkbox_parar = document.getElementById('opcaoParar'); //checkbox de parar os sons
    if (checkbox_parar.checked) {
        parar()
    }
};

//função q faz todos os áudios pararem (usado no botão de mute)
function parar(){
    for (var i = 0; i < som.length; i++) {
        som[i].pause(); //pausar o som onde ele está
        som[i].currentTime = 0; //voltar o som do zero
    }
};
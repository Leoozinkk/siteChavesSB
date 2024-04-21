var img = document.createElement('img');
img.src = 'images/luiz3.png';
img.style = 'widht: 350px; height: 350px; margin: 5%; border: 5px solid black'
var src = document.getElementsByClassName('imagemLuiz');

for (var i = 0; i < src.length; i++) {
    src[i].appendChild(img.cloneNode());
}
//verifica o número de espaços para pôr a foto e as aplica em todos
//quando se usa "getElementsByClassName", o "appendChild" não serve para todos os espaços no documento (apenas para um)

//pega o botão pelo id e executa os audios de acordo com a posição no html
document.getElementById('gio').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[0].play()};
document.getElementById('gioD').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[1].play()};
document.getElementById('queisso').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[2].play()};
document.getElementById('paulo').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[3].play()};
document.getElementById('disco').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[4].play()};
document.getElementById('tiquinho').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[5].play()};
document.getElementById('agua').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[6].play()};
document.getElementById('esquizo').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[7].play()};
document.getElementById('xtudo').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[8].play()};
document.getElementById('calica').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[9].play()};
document.getElementById('ia').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[10].play()}
document.getElementById('vaisefuderluiz').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[11].play()};

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
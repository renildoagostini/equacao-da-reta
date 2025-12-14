//cria referencia ao btCalcular e associa a função ao click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDistancia)

//cria a função calcularDistancia
function calcularDistancia(){
    //cria referencia aos elementos de entra da página e obtém o conteúdo dos campos de entrada
    var inX1 = document.getElementById("inX1");
    var inY1 = document.getElementById("inY1");
    var inX2 = document.getElementById("inX2");
    var inY2 = document.getElementById("inY2");

    var x1 = Number(inX1.value);
    var y1 = Number(inY1.value);
    var x2 = Number(inX2.value);
    var y2 = Number(inY2.value);

    /*valida os campos de entrada
    if(x1 == "" || isNaN(x1)){
        alert("Informe o valor de X1 corretamente...");
        inX1.value = "";
        inX1.focus();
        return;
    }

    if (y1 == "" || isNaN(y1)) {
        alert("Informe o valor de Y1 corretamente...");
        inY1.value = "";
        inY1.focus();
        return;
    }

    if (x2 == "" || isNaN(x2)) {
        alert("Informe o valor de X2 corretamente...");
        inX2.value = "";
        inX2.focus();
        return;
    }

    if (y2 == "" || isNaN(y2)) {
        alert("Informe o valor de Y2 corretamente...");
        inY2.value = "";
        inY2.focus();
        return;
    }*/

    //cria referencia aos elementos de saída da página
    var outDistancia = document.getElementById("outDistancia");
    var outPontoMedio = document.getElementById("outPontoMedio");

    //calcula a distância entre dois pontos
    var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))); 

    outDistancia.textContent = `${distancia}`;

    //calcular o ponto médio entre dois pontos

    var pontoMedioX = (x1 + x2) / 2;
    var pontoMedioY = (y1 + y2) / 2;

    outPontoMedio.textContent = `(${pontoMedioX} , ${pontoMedioY})`;
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);

function limparCampos(){
    inX1.value = "";
    inY1.value = "";
    inX2.value = "";
    inY2.value = "";
    outDistancia.textContent = "";
    outPontoMedio.textContent = "";
    inX1.focus();

}
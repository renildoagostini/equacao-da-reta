// referências aos botões
const btCalcular = document.getElementById("btCalcular");
const btLimpar = document.getElementById("btLimpar");

// associa os eventos
btCalcular.addEventListener("click", calcularEquacao);
btLimpar.addEventListener("click", limparCampos);

// cria a função calcularEquacao
function calcularEquacao() {

    // referências aos campos de entrada
    const inX1 = document.getElementById("inX1");
    const inY1 = document.getElementById("inY1");
    const inX2 = document.getElementById("inX2");
    const inY2 = document.getElementById("inY2");

    const x1 = Number(inX1.value);
    const y1 = Number(inY1.value);
    const x2 = Number(inX2.value);
    const y2 = Number(inY2.value);

    // referências aos elementos de saída
    const outAngular = document.getElementById("outAngular");
    const outEquacao = document.getElementById("outEquacao");
    const outTipo = document.getElementById("outTipo");

    // validação básica
    if (x1 === x2) {
        outAngular.textContent = "Indefinido";
        outEquacao.textContent = `x = ${x1}`;
        outTipo.textContent = "Reta vertical";
        return;
    }

    // coeficiente angular
    const a = (y2 - y1) / (x2 - x1);

    // coeficiente linear
    const b = (-a * x1) + y1;

    // exibe coeficiente angular
    outAngular.textContent = a.toFixed(2);

    // equação da reta
    if (b >= 0) {
        outEquacao.textContent = `y = ${a.toFixed(2)}x + ${b.toFixed(2)}`;
    } else {
        outEquacao.textContent = `y = ${a.toFixed(2)}x - ${Math.abs(b).toFixed(2)}`;
    }

    // tipo de reta
    if (a > 0) {
        outTipo.textContent = "Reta crescente";
    } else if (a < 0) {
        outTipo.textContent = "Reta decrescente";
    } else {
        outTipo.textContent = "Reta horizontal";
    }
}

// cria a função limparCampos
function limparCampos() {

    const inX1 = document.getElementById("inX1");
    const inY1 = document.getElementById("inY1");
    const inX2 = document.getElementById("inX2");
    const inY2 = document.getElementById("inY2");

    const outAngular = document.getElementById("outAngular");
    const outEquacao = document.getElementById("outEquacao");
    const outTipo = document.getElementById("outTipo");

    inX1.value = "";
    inY1.value = "";
    inX2.value = "";
    inY2.value = "";

    outAngular.textContent = "";
    outEquacao.textContent = "";
    outTipo.textContent = "";

    inX1.focus();
}

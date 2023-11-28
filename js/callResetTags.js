// Definindo a constante da Barra de Cálculos
const choseBarCalc = document.getElementById("selecao-calc");

// Definindo as constantes das opções de cálculos
const tipoOndaNoControl = document.getElementById("selecao-onda-nocontrol");
const tipoOndaScr = document.getElementById("selecao-onda-scr");
const tipoModeloMonoNoControlMeia = document.getElementById("seleca-tipo-mono-no-control-meia");
const tipoModeloMonoNoControlComp = document.getElementById("seleca-tipo-mono-no-control-comp");
const tipoModeloMonoNoControlCt = document.getElementById("seleca-tipo-mono-no-control-ct");

// Definindo as constantes das opções de cálculos das componentes
const componenteMonoNoControlMeiaQuase = document.getElementById("selecao-calc-mono-no-control-meia-quase");
const componenteMonoNoControlCompIdeal = document.getElementById("selecao-calc-mono-no-control-comp-ideal");
const componenteMonoNoControlCompQuase = document.getElementById("selecao-calc-mono-no-control-comp-quase");
const componenteMonoNoControlCtIdeal = document.getElementById("selecao-calc-mono-no-control-ct-ideal");
const componenteMonoNoControlCtQuase = document.getElementById("selecao-calc-mono-no-control-ct-quase");
const componenteTri3NoControl = document.getElementById("selecao-calc-tri3-no-control");
const componenteTri6NoControl = document.getElementById("selecao-calc-tri6-no-control");
const componenteMonoMeia = document.getElementById("selecao-calc-mono-meia");
const componenteMonoComp = document.getElementById("selecao-calc-mono-comp");
const componenteMonoDv = document.getElementById("selecao-calc-mono-dv");

// Definindo as constantes dos dados dos cálculos
const divDados = document.getElementById("dados");
const tituloMeiaIdeal = document.getElementById("select-title-meia-ideal");
const apareceCheckMonoNoControl = document.getElementById("aparece-valor-mono-ncon");
const tituloInsira = document.getElementById("titulo-insira");

// Marcadores ("checkbox") de valores a serem inseridos
const checkVlp = document.getElementById("vlp-check");
const checkV2p = document.getElementById("v2p-check");
const checkIlp = document.getElementById("ilp-check");
const checkVlm = document.getElementById("vlm-check");
const checkRl = document.getElementById("rl-check");
const checkIlm = document.getElementById("ilm-check");

// Definindo as constantes das componentes dos cálculos
// Div dos elementos que receberão os valores dos cálculos
const inputVlp = document.getElementById("input-vlp");
const inputV2p = document.getElementById("input-v2p");
const inputIlp = document.getElementById("input-ilp");
const inputVlm = document.getElementById("input-vlm");
const inputRl = document.getElementById("input-rl");
const inputIlm = document.getElementById("input-ilm");

const inputVlpMeiaQuase = document.getElementById("input-vlp-meia-quase");
const inputV2pMeiaQuase = document.getElementById("input-v2p-meia-quase");
const inputIlpMeiaQuase = document.getElementById("input-ilp-meia-quase");
const inputRlMeiaQuase = document.getElementById("input-rl-meia-quase");
const inputVyMeiaQuase = document.getElementById("input-vy-meia-quase");
const inputVlrmsMeiaQuase = document.getElementById("input-vlrms-meia-quase");
const inputIlrmsMeiaQuase = document.getElementById("input-ilrms-meia-quase");
const inputVlmMeiaQuase = document.getElementById("input-vlm-meia-quase");
const inputIlmMeiaQuase = document.getElementById("input-ilm-meia-quase");

const inputFs = document.getElementById("input-fs");
const inputIm = document.getElementById("input-im");
const inputVm = document.getElementById("input-vm");
const inputR = document.getElementById("input-r");
const inputI0 = document.getElementById("input-i0");
const inputVs = document.getElementById("input-vs");
const inputV0 = document.getElementById("input-v0");
const inputIrms = document.getElementById("input-irms");
const inputS = document.getElementById("input-s");
const inputP = document.getElementById("input-p");
const inputAlfa = document.getElementById("input-alfa");

// Elementos que receberão os valores dos cálculos
const vlpTxt = document.getElementById("vlp-txt");
const v2pTxt = document.getElementById("v2p-txt");
const ilpTxt = document.getElementById("ilp-txt");
const vlmTxt = document.getElementById("vlm-txt");
const rlTxt = document.getElementById("rl-txt");
const ilmTxt = document.getElementById("ilm-txt");

const vlpTxt2 = document.getElementById("vlp-txt-new");
const v2pTxt2 = document.getElementById("v2p-txt-new");
const ilpTxt2 = document.getElementById("ilp-txt-new");
const vlmTxt2 = document.getElementById("vlm-txt-new");
const ilmTxt2 = document.getElementById("ilm-txt-new");
const vyTxt = document.getElementById("vy-txt");
const vlrmsTxt = document.getElementById("vlrms-txt");
const ilrmsTxt = document.getElementById("ilrms-txt");
const rlTxt2 = document.getElementById("rl-txt-new");

const fsTxt = document.getElementById("fs-txt");
const imTxt = document.getElementById("im-txt");
const vmTxt = document.getElementById("vm-txt");
const rTxt = document.getElementById("r-txt");
const i0Txt = document.getElementById("i0-txt");
const vsTxt = document.getElementById("vs-txt");
const v0Txt = document.getElementById("v0-txt");
const irmsTxt = document.getElementById("irms-txt");
const sTxt = document.getElementById("s-txt");
const pTxt = document.getElementById("p-txt");
const alfaTxt = document.getElementById("alfa-txt");

// Definindo a constantes do botões de calcular
const btnCalcularMonoNoControlIdeal = document.getElementById("btn-calcula-mono-nocontrol-ideal");
const btnCalcularMonoNoControlQuase = document.getElementById("btn-calcula-mono-nocontrol-quase");
const btnCalcularMonoNoControlCompIdeal = document.getElementById("btn-calcula-mono-nocontrol-comp-ideal");
const btnCalcularMonoNoControlCompQuase = document.getElementById("btn-calcula-mono-nocontrol-comp-quase");
const btnCalcularMonoNoControlCtIdeal = document.getElementById("btn-calcula-mono-nocontrol-ct-ideal");
const btnCalcularMonoNoControlCtQuase = document.getElementById("btn-calcula-mono-nocontrol-ct-quase");
const btnCalcularTri3NoControl = document.getElementById("btn-calcula-tri3-nocotrol");
const btnCalcularTri6NoControl = document.getElementById("btn-calcula-tri6-nocotrol");
const btnCalcularMonoMeia = document.getElementById("btn-calcula-mono-meia");
const btnCalcularMonoComp = document.getElementById("btn-calcula-mono-comp");
const btnCalcularMonoDv = document.getElementById("btn-calcula-mono-dv");

// Definindo a constante da div onde aparecerá os resultados
const divResultados = document.getElementById("resultados");
const divApareceResultado = document.getElementById("aparece-resultado");

// Funções para manipular o estilo dos elementos da calculadora
function hideTag(elemento) {
    elemento.style.display = "none";
}

function showTagBlock(tag) {
    tag.style.display = "block";
}

function showTagFlex(tag) {
    tag.style.display = "flex";
}

hideTag(tipoOndaNoControl);
hideTag(tipoOndaScr);
hideTag(tipoModeloMonoNoControlMeia);
hideTag(tipoModeloMonoNoControlComp);
hideTag(tipoModeloMonoNoControlCt);
hideTag(divDados);
hideTag(apareceCheckMonoNoControl);
hideTag(inputVlp);
hideTag(inputV2p);
hideTag(inputIlp);
hideTag(inputVlm);
hideTag(inputRl);
hideTag(inputIlm);
hideTag(inputVlpMeiaQuase);
hideTag(inputV2pMeiaQuase);
hideTag(inputIlpMeiaQuase);
hideTag(inputRlMeiaQuase);
hideTag(inputVyMeiaQuase);
hideTag(inputVlrmsMeiaQuase);
hideTag(inputIlrmsMeiaQuase);
hideTag(inputVlmMeiaQuase);
hideTag(inputIlmMeiaQuase);
hideTag(inputFs);
hideTag(inputIm);
hideTag(inputVm);
hideTag(inputR);
hideTag(inputI0);
hideTag(inputVs);
hideTag(inputV0);
hideTag(inputIrms);
hideTag(inputS);
hideTag(inputP);
hideTag(inputAlfa);
hideTag(btnCalcularMonoNoControlIdeal);
hideTag(btnCalcularMonoNoControlQuase);
hideTag(btnCalcularMonoNoControlCompIdeal);
hideTag(btnCalcularMonoNoControlCompQuase);
hideTag(btnCalcularMonoNoControlCtIdeal);
hideTag(btnCalcularMonoNoControlCtQuase);
hideTag(btnCalcularTri3NoControl);
hideTag(btnCalcularTri6NoControl);
hideTag(btnCalcularMonoMeia);
hideTag(btnCalcularMonoComp);
hideTag(btnCalcularMonoDv);
hideTag(divResultados);
hideTag(divApareceResultado);
hideTag(componenteMonoNoControlMeiaQuase);
hideTag(componenteMonoNoControlCompIdeal);
hideTag(componenteMonoNoControlCompQuase);
hideTag(componenteMonoNoControlCtIdeal);
hideTag(componenteMonoNoControlCtQuase);
hideTag(componenteTri3NoControl);
hideTag(componenteTri6NoControl);
hideTag(componenteMonoMeia);
hideTag(componenteMonoComp);
hideTag(componenteMonoDv);
hideTag(tituloMeiaIdeal);
hideTag(tituloInsira);

// Exportando as constantes e funções para serem usadas em outros arquivos JS
export {
    // Exportando as constantes que compoem a página calculadora
    choseBarCalc,
    tipoOndaNoControl,
    tipoOndaScr,
    tipoModeloMonoNoControlMeia,
    tipoModeloMonoNoControlComp,
    tipoModeloMonoNoControlCt,
    divDados,
    apareceCheckMonoNoControl,
    checkVlp,
    checkV2p,
    checkIlp,
    checkVlm,
    checkRl,
    checkIlm,
    inputVlp,
    inputV2p,
    inputIlp,
    inputVlm,
    inputRl,
    inputIlm,
    inputVlpMeiaQuase,
    inputV2pMeiaQuase,
    inputIlpMeiaQuase,
    inputRlMeiaQuase,
    inputVyMeiaQuase,
    inputVlrmsMeiaQuase,
    inputIlrmsMeiaQuase,
    inputVlmMeiaQuase,
    inputIlmMeiaQuase,
    inputFs,
    inputIm,
    inputVm,
    inputR,
    inputI0,
    inputVs,
    inputV0,
    inputIrms,
    inputS,
    inputP,
    inputAlfa,
    fsTxt,
    imTxt,
    vmTxt,
    rTxt,
    i0Txt,
    vsTxt,
    v0Txt,
    irmsTxt,
    sTxt,
    pTxt,
    alfaTxt,
    vlpTxt,
    v2pTxt,
    ilpTxt,
    vlmTxt,
    rlTxt,
    ilmTxt,
    vlpTxt2,
    v2pTxt2,
    ilpTxt2,
    vlmTxt2,
    ilmTxt2,
    rlTxt2,
    vyTxt,
    vlrmsTxt,
    ilrmsTxt,
    btnCalcularMonoNoControlIdeal,
    btnCalcularMonoNoControlQuase,
    btnCalcularMonoNoControlCompIdeal,
    btnCalcularMonoNoControlCompQuase,
    btnCalcularMonoNoControlCtIdeal,
    btnCalcularMonoNoControlCtQuase,
    btnCalcularTri3NoControl,
    btnCalcularTri6NoControl,
    btnCalcularMonoMeia,
    btnCalcularMonoComp,
    btnCalcularMonoDv,
    divResultados,
    divApareceResultado,
    componenteMonoNoControlMeiaQuase,
    componenteMonoNoControlCompIdeal,
    componenteMonoNoControlCompQuase,
    componenteMonoNoControlCtIdeal,
    componenteMonoNoControlCtQuase,
    componenteTri3NoControl,
    componenteTri6NoControl,
    componenteMonoMeia,
    componenteMonoComp,
    componenteMonoDv,
    tituloMeiaIdeal,
    tituloInsira,
    
    // Exportando as funções que serão usadas no código para manipular o estilo dos elementos da calculadora
    hideTag, 
    showTagBlock, 
    showTagFlex
};
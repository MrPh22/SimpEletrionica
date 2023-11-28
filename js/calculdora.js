import {
    // Importando as constantes que receber o valor colocado
    checkVlp,
    checkV2p,
    checkIlp,
    checkVlm,
    checkRl,
    checkIlm,
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
    showTagBlock,
    showTagFlex,
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

} from "./callResetTags.js";

const PI = Math.round(Math.PI * 100) / 100;

function alerta01(){
    alert("Não é possível calcular, pois existem valores incongruentes. Por favor, revise-os!");
}

function alerta02() {
    alert("Não há cálculos a serem feitos, porém há valores incongruentes. Por favor, revise-os!");
}

function alerta03() {
    alert("Não há cálculos a serem feitos, pois todos os valores já estão corretos!");
}

function alerta04() {
    alert("Não é possível realizar mais cálculos no momento, mas os valores estão corretos! \nPara calcular algo adicional, é necessário inserir mais um dado.");
}

function alerta05() {
    alert("Por favor selecione pelo menos mais um dos campos!");
}

btnCalcularMonoNoControlIdeal.addEventListener("click", function(){
        let vlp = vlpTxt.value;
        let v2p = v2pTxt.value;
        let vlm = vlmTxt.value;
        let ilp = ilpTxt.value;
        let ilm = ilmTxt.value;
        let rl = rlTxt.value;

        const vlp2 = v2p*1;
        const vlp3 = ilp*rl;
        const vlp4 = vlm*PI;
        const v2p2 = vlp*1;
        const vlm2 = vlp/PI;
        const vlm3 = ilm*rl;
        const vlm4 = v2p/PI;
        const ilp2 = vlp/rl;
        const ilp3 = v2p/rl;
        const ilp4 = ((vlm*PI)/rl);
        const ilm2 = vlm/rl;
        const ilm3 = ((vlp/PI)/rl);
        const ilm4 = ((v2p/PI)/rl);
        const rl2 = vlp/ilp;
        const rl3 = ((vlp/PI)/ilm);
        const rl4 = vlm/ilm;
        const rl5 = v2p/ilp;
        const rl6 = ((v2p/PI)/ilm);
        const rl7 = ilp*(vlm*PI);
        const rl8 = (vlm*PI)/ilp;

        const ilm5 = ((vlp/PI)/rl2);
        const ilm6 = ((v2p/PI)/rl5);
        const ilm7 = vlm/rl8;
        const ilp5 = vlp/rl3;
        const ilp6 = v2p/rl6;
        const ilp7 = vlm/rl4;
        const vlm5 = vlp3/PI;
        const ilm8 = vlm5/rl;
        const vlp5 = vlm5*PI;
        const ilp8 = vlp5/rl;

    if (checkVlp.checked && checkV2p.checked && checkVlm.checked && checkIlp.checked && checkIlm.checked && checkRl.checked){
        if (ilp != ilp2 || ilm != ilm2 || vlm != vlm2 || vlp != vlp2) {
            alerta02();
        } else {
            alerta03();
        }
    } else if (checkVlp.checked){
       if (checkV2p.checked && vlp != parseFloat(vlp2.toFixed(3))){
            alerta01();
        } else if (checkVlm.checked && vlm != parseFloat(vlm2.toFixed(3))){
            alerta01();
        } else if(checkIlp.checked){
            if (checkRl.checked && rl != parseFloat(rl2.toFixed(3)) || checkIlm.checked && ilm != parseFloat(ilm5.toFixed(3))){
                alerta01();
            }else if (checkRl.checked && checkIlm.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p></div>";
            }else if (checkRl.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm3.toFixed(3).replace(".", ",") + "</p></div>";
            } else if (checkIlm.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>I<sub>LP</sub></mi></mfrac></math>&ensp;= "  + rl2.toFixed(3).replace(".", ",") + "</p></div>";
            }else {
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>I<sub>LP</sub></mi></mfrac></math>&ensp;= "  + rl2.toFixed(3).replace(".", ",") + "</p><<p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm5.toFixed(3).replace(".", ",") + "</p></div>";
            }
        } else if (checkIlm.checked){
            if (checkRl.checked && rl != parseFloat(rl3.toFixed(3))){
                alerta01();
            } else if (checkRl.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p></div>";
            } else {
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>I<sub>LM</sub></mi></mfrac></math>&ensp;= "  + rl3.toFixed(3).replace(".", ",") + "<p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp5.toFixed(3).replace(".", ",") + "</p></div>";
            }
        } else if (checkRl.checked){
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm3.toFixed(3).replace(".", ",") + "</p></div>";
        } else {
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(v2p2).toFixed(3).replace(".", ",") + "</p></div>";
        }
    } else if (checkV2p.checked){
        if (checkVlm.checked && vlm != parseFloat(vlm4.toFixed(3))){
            alerta01();
        } else if (checkIlp.checked){
            if (checkRl.checked && rl != parseFloat(rl5.toFixed(3)) || checkIlm.checked && ilm != parseFloat(ilm6.toFixed(3))){
                alerta01();
            } else if (checkRl.checked && checkIlm.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p></div>";
            } else if (checkRl.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm4.toFixed(3).replace(".", ",") + "</p></div>";
            }else if (checkIlm.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>I<sub>LP</sub></mi></mfrac></math>&ensp;= "  + rl5.toFixed(3).replace(".", ",") + "</p></div>";
            }else {
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>I<sub>LP</sub></mi></mfrac></math>&ensp;= "  + rl5.toFixed(3).replace(".", ",") + "</p><<p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm6.toFixed(3).replace(".", ",") + "</p></div>";
            }
        } else if (checkIlm.checked){
            if (checkRl.checked && rl != parseFloat(rl6.toFixed(3))){
                alerta01();
            } else if (checkRl.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp3.toFixed(3).replace(".", ",") + "</p></div>";
            }else {
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>I<sub>LM</sub></mi></mfrac></math>&ensp;= "  + rl5.toFixed(3).replace(".", ",") + "<p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp6.toFixed(3).replace(".", ",") + "</p></div>";
            }
        } else if (checkRl.checked){
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp3.toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm4.toFixed(3).replace(".", ",") + "</p></div>";
        } else {
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p></div>";
        }
    } else if (checkVlm.checked){
        if (checkIlp.checked){
            if (checkRl.checked && rl != parseFloat(rl7.toFixed(3)) || checkIlm.checked && ilm != parseFloat(ilm7.toFixed(3))){
                alerta01();
            } else if (checkRl.checked && checkIlm.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>LM</sub>&ensp;&#215;&ensp;&pi;&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p></div>";
            }else if (checkRl.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>LM</sub>&ensp;&#215;&ensp;&pi;&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm2.toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp4.toFixed(3).replace(".", ",") + "</p></div>";
            } else {
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>LM</sub>&ensp;&#215;&ensp;&pi;&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= I<sub>LP</sub>&ensp;&#215;&ensp;(V<sub>LM</sub>&ensp;&#215;&ensp;&pi;)&ensp;= " + rl7.toFixed(3).replace(".", ",") + "</p><<p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm7.toFixed(3).replace(".", ",") + "</p></div>";
            }
        } else if (checkIlm.checked){
            if (checkRl.checked && rl != parseFloat(rl4.toFixed(3))){
                alerta01();
            } else if(checkRl.checked){
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>LM</sub>&ensp;&#215;&ensp;&pi;&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp4.toFixed(3).replace(".", ",") + "</p></div>";
            } else {
                showTagBlock(divResultados);
                showTagFlex(divApareceResultado);
                divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + parseFloat(vlp2).toFixed(3).replace(".", ",") + "</p><p class='p-height'>R<sub>L</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>I<sub>LM</sub></mi></mfrac></math>&ensp;= "  + rl5.toFixed(3).replace(".", ",") + "<p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp7.toFixed(3).replace(".", ",") + "</p></div>";
            }
        } else {
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>LM</sub>&ensp;&#215;&ensp;&pi;&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;= " + vlp4.toFixed(3).replace(".", ",") + "</p></div>";
        }
    } else if (checkIlp.checked){
        if (checkIlm.checked) {
            alerta05();
        } else if (checkRl.checked){
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= R<sub>L</sub>&ensp;&#215;&ensp;I<sub>LP</sub>&ensp;= " + vlp3.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm5.toFixed(3).replace(".", ",") + "<p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm8.toFixed(3).replace(".", ",") + "</p></div>";
        } else {
            alerta05();
        }
    } else if (checkIlm.checked){
        if (checkRl.checked){
            showTagBlock(divResultados);
            showTagFlex(divApareceResultado);
            divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= R<sub>L</sub>&ensp;&#215;&ensp;I<sub>LP</sub>&ensp;= " + vlp5.toFixed(3).replace(".", ",") + "</p><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm3.toFixed(3).replace(".", ",") + "<p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp8.toFixed(3).replace(".", ",") + "</p></div>";
        }
    } else {
        alert("Por favor selecione pelo menos um dos campos!");
    }
});

btnCalcularMonoNoControlQuase.addEventListener("click", function(){
    let vlp = vlpTxt2.value;
    let v2p = v2pTxt2.value;
    let vy = vyTxt.value;
    let vlrms = vlrmsTxt.value;
    let rl = rlTxt2.value;

    const vlp2 = v2p - vy;
    const v2p2 = parseFloat(vlp) + parseFloat(vy);
    const vy2 = v2p - vlp;
    const vlrms2 = vlp/2;
    const ilp2 = vlp/rl;
    const ilrms2 = vlrms/rl; 

    let tipoComponenteValue = componenteMonoNoControlMeiaQuase.value;

    if (tipoComponenteValue == "vlp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;&minus;&ensp;V<sub>Y</sub>&ensp;= " + vlp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v2p"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;&plus;&ensp;V<sub>Y</sub>&ensp;= " + v2p2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vy"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>Y</sub>&ensp;= V<sub>2P</sub>&ensp;&minus;&ensp;V<sub>LP</sub>&ensp;= " + vy2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vlrms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LRMS</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>2</mi></mfrac></math>&ensp;= " + vlrms2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilrms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LRMS</sub>&ensp;= <math><mfrac><mi>V<sub>LRMS</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilrms2.toFixed(3).replace(".", ",") + "</p></div>";
    }
})

btnCalcularMonoNoControlCompIdeal.addEventListener("click", function(){
    let vlp = vlpTxt2.value;
    let v2p = v2pTxt2.value;
    let rl = rlTxt2.value;
    let vlm = vlmTxt2.value;

    const vlp2 = v2p*1;
    const ilp2 = vlp/rl;
    const ilm2 = vlm/rl;
    const vlm2 = (2*vlp)/PI;

    let tipoComponenteValue = componenteMonoNoControlCompIdeal.value;

    if (tipoComponenteValue == "vlp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;= " + vlp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vlm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularMonoNoControlCompQuase.addEventListener("click", function(){
    let vlp = vlpTxt2.value;
    let v2p = v2pTxt2.value;
    let vy = vyTxt.value;
    let rl = rlTxt2.value;
    let vlrms = vlrmsTxt.value;

    const vlp2 = v2p - (2*vy);
    const v2p2 = parseFloat(vlp) + parseFloat((2*vy));
    const vy2 = (v2p - vlp)/2
    const ilp2 = vlp/rl;
    const vlrms2 = vlp/Math.sqrt(2);
    const ilrms2 = vlrms/rl;

    let tipoComponenteValue = componenteMonoNoControlCompQuase.value;

    if (tipoComponenteValue == "vlp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= V<sub>2P</sub>&ensp;&minus;&ensp;(2&ensp;&#215&ensp;V<sub>Y</sub>)&ensp;= " + vlp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v2p"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;&plus;&ensp;(2&ensp;&#215&ensp;V<sub>Y</sub>)&ensp;= " + v2p2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vy"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>Y</sub>&ensp;= <math><mfrac><mi>(V<sub>2P</sub>&ensp;&minus;&ensp;V<sub>LP</sub>)</mi><mi>2</mi></mfrac></math>&ensp;= " + vy2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vlrms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LRMS</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&#8730;2</mi></mfrac></math>&ensp;= " + vlrms2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilrms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LRMS</sub>&ensp;= <math><mfrac><mi>V<sub>LRMS</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilrms2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularMonoNoControlCtIdeal.addEventListener("click", function(){
    let vlp = vlpTxt2.value;
    let v2p = v2pTxt2.value;
    let rl = rlTxt2.value;
    let vlm = vlmTxt2.value;

    const vlp2 = v2p/2;
    const v2p2 = vlp*2;
    const ilp2 = vlp/rl;
    const vlm2 = (2*vlp)/PI;
    const ilm2 = vlm/rl;

    let tipoComponenteValue = componenteMonoNoControlCtIdeal.value;

    if (tipoComponenteValue == "vlp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>2</mi></mfrac></math>&ensp;= " + vlp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v2p"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>2P</sub>&ensp;= V<sub>LP</sub>&ensp;&#215&ensp;2&ensp;= " + v2p2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vlm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LM</sub>&ensp;= <math><mfrac><mi>(V<sub>LP</sub>&ensp;&#215&ensp;2)</mi><mi>&pi;</mi></mfrac></math>&ensp;= " + vlm2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LM</sub>&ensp;= <math><mfrac><mi>V<sub>LM</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilm2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularMonoNoControlCtQuase.addEventListener("click", function(){
    let vlp = vlpTxt2.value;
    let v2p = v2pTxt2.value;
    let vy = vyTxt.value;
    let rl = rlTxt2.value;
    let vlrms = vlrmsTxt.value;

    const vlp2 = (v2p/2) - vy;
    const v2p2 = (parseFloat(vlp) + parseFloat(vy))/2;
    const vy2 = (v2p/2) - vlp;
    const ilp2 = vlp/rl;
    const vlrms2 = vlp/Math.sqrt(2);
    const ilrms2 = vlrms/rl;

    let tipoComponenteValue = componenteMonoNoControlCtQuase.value;

    if (tipoComponenteValue == "vlp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>2</mi></mfrac></math>&ensp;&minus;&ensp;V<sub>Y</sub>&ensp;= " + vlp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v2p"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>2P</sub>&ensp;= <math><mfrac><mi>(V<sub>LP</sub>&ensp;&plus;&ensp;V<sub>Y</sub>)</mi><mi>2</mi></mfrac></math>&ensp;= " + v2p2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vy"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>Y</sub>&ensp;= <math><mfrac><mi>V<sub>2P</sub></mi><mi>2</mi></mfrac></math>&ensp;&minus;&ensp;V<sub>LP</sub>&ensp;= " + vy2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilp"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LP</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilp2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vlrms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>LRMS</sub>&ensp;= <math><mfrac><mi>V<sub>LP</sub></mi><mi>&#8730;2</mi></mfrac></math>&ensp;= " + vlrms2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ilrms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>LRMS</sub>&ensp;= <math><mfrac><mi>V<sub>LRMS</sub></mi><mi>R<sub>L</sub></mi></mfrac></math>&ensp;= " + ilrms2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularTri3NoControl.addEventListener("click", function(){
    let fs = fsTxt.value;
    let vm = vmTxt.value;
    let im = imTxt.value;
    let r = rTxt.value;
    let i0 = i0Txt.value;

    const fc = 3*fs;
    const v0a = (3/PI)*vm*Math.sin(180/3);
    const i0a = (3/PI)*im*Math.sin(180/3);
    const im2 = vm/r;
    const vm2 = im*r;
    const r2 = vm/im;
    const ida = i0/3;
    const i0r = im*Math.pow((1/2*PI)*((PI/3)+(1/2)*Math.sin((2*180)/3)), (1/2));
    const rf = Math.sqrt(2)/(Math.pow(3, 2) - 1);
    const ff = Math.sqrt(3);

    let tipoComponenteValue = componenteTri3NoControl.value;

    if (tipoComponenteValue == "fc"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>F<sub>C</sub>&ensp;= 3&ensp;&#215&ensp;F<sub>S</sub>&ensp;= " + fc.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>3</mi><mi>&pi;</mi></mfrac></math>&ensp;&#215&ensp;V<sub>M</sub>&ensp;&#215&ensp;sen(<math><mfrac><mi>180</mi><mi>3</mi></mfrac></math>)&ensp;= " + v0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "i0a"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>3</mi><mi>&pi;</mi></mfrac></math>&ensp;&#215&ensp;I<sub>M</sub>&ensp;&#215&ensp;sen(<math><mfrac><mi>180</mi><mi>3</mi></mfrac></math>)&ensp;= " + i0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "im"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>M</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub></mi><mi>R</mi></mfrac></math>&ensp;= " + im2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>M</sub>&ensp;= I<sub>M</sub>&ensp;&#215&ensp;R&ensp; " + vm2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "r"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>R&ensp;= <math><mfrac><mi>V<sub>M</sub></mi><mi>I<sub>M</sub></mi></mfrac></math>&ensp;= " + r2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "id"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>D</sub>&ensp;=  <math><mfrac><mi>I<sub>0(AVG)</sub></mi><mi>3</mi></mfrac></math>&ensp;= " + ida.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "i0r"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>0(RMS)</sub>&ensp;= I<sub>M</sub>&ensp;&#215&ensp;&#8730;[<math><mfrac><mi>1</mi><mi>2&ensp;&#215&ensp;&pi;</mi></mfrac></math>&ensp;&#215&ensp;(<math><mfrac><mi>&pi;</mi><mi>3</mi></mfrac></math>&plus;<math><mfrac><mi>1</mi><mi>2</mi></mfrac></math>&ensp;&#215&ensp;sen(<math><mfrac><mi>2&ensp;&#215&ensp;180</mi><mi>3</mi></mfrac></math>))]&ensp;= " + i0r.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "rf"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>R<sub>F</sub>&ensp;= <math><mfrac><mi>&#8730;2</mi><mi>3&sup2;&ensp;&minus;&ensp;1</mi></mfrac></math>&ensp;= " + rf.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ff"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>FF&ensp;= &#8730;3&ensp;= " + ff.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularTri6NoControl.addEventListener("click", function(){
    let fs = fsTxt.value;
    let vm = vmTxt.value;
    let im = imTxt.value;
    let r = rTxt.value;
    let i0 = i0Txt.value;

    const fc = 6*fs;
    const v0a = (6/PI)*vm*Math.sin(180/6);
    const i0a = (3/PI)*im;
    const ida = i0/3;
    const idr = (1/Math.sqrt(3))*i0;
    const im2 = vm/r;
    const vm2 = im*r;
    const r2 = vm/im;
    const rf = Math.sqrt(2)/(Math.pow(6, 2) - 1);

    let tipoComponenteValue = componenteTri6NoControl.value;

    if (tipoComponenteValue == "fc"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>F<sub>C</sub>&ensp;= 6&ensp;&#215&ensp;F<sub>S</sub>&ensp;= " + fc.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>6</mi><mi>&pi;</mi></mfrac></math>&ensp;&#215&ensp;V<sub>M</sub>&ensp;&#215&ensp;sen(<math><mfrac><mi>180</mi><mi>6</mi></mfrac></math>)&ensp;= " + v0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "i0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>3</mi><mi>&pi;</mi></mfrac></math>&ensp;&#215&ensp;I<sub>M</sub>&ensp;= " + i0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "ida"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>D</sub>&ensp;= <math><mfrac><mi>I<sub>0(AVG)</sub></mi><mi>3</mi></mfrac></math>&ensp;= " + ida.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "idr"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>D(RMS)</sub>&ensp;= <math><mfrac><mi>1</mi><mi>&#8730;3</mi></mfrac></math>&ensp;&#215&ensp;I<sub>0(AVG)</sub>&ensp;= " + idr.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "im"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>M</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub></mi><mi>R</mi></mfrac></math>&ensp;= " + im2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "vm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>M</sub>&ensp;= I<sub>M</sub>&ensp;&#215&ensp;R&ensp; " + vm2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "r"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>R&ensp;= <math><mfrac><mi>V<sub>M</sub></mi><mi>I<sub>M</sub></mi></mfrac></math>&ensp;= " + r2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "rf"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>R<sub>F</sub>&ensp;= <math><mfrac><mi>&#8730;2</mi><mi>6&sup2;&ensp;&minus;&ensp;1</mi></mfrac></math>&ensp;= " + rf.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularMonoMeia.addEventListener("click", function(){
    let vs = vsTxt.value;
    let vm = vmTxt.value;
    let alfa = alfaTxt.value;
    let v0 = v0Txt.value;
    let r = rTxt.value;
    let im = imTxt.value;
    let irms = irmsTxt.value;
    let p = pTxt.value;
    let s = sTxt.value;

    const vm2 = Math.sqrt(2)*vs;
    const v0a = (vm*(1+Math.cos(alfa)))/(2*PI);
    const pl = Math.pow(v0, 2)/r;
    const im2 = vm/r;
    const r2 = vm/im;
    const irms2 = (im/2)*Math.sqrt(1-(alfa/180)+(Math.sin(2*alfa)/2*PI));
    const i0a = (vm*(1+Math.cos(alfa)))/(2*PI*r);
    const theta = 180-alfa;
    const s2 = vs*irms;
    const pf = p/s;
    const alfa2 = Math.pow((Math.cos(((2*PI*v0)/vm)-1)), -1);

    let tipoComponenteValue = componenteMonoMeia.value;

    if (tipoComponenteValue == "vm"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>M</sub>&ensp;= &#8730;2&ensp;&#215&ensp;V<sub>S</sub>&ensp;= " + vm2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "v0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub>&ensp;&#215&ensp;(1&ensp;&plus;&ensp;cos(&#9082;))</mi><mi>2&ensp;&#215&ensp;&pi;</mi></mfrac></math>&ensp;= " + v0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "pl"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>P<sub>L</sub>&ensp;= <math><mfrac><mi>(V<sub>0(AVG)</sub>)&sup2;</mi><mi>R</mi></mfrac></math>&ensp;= " + pl.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "im"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>M</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub></mi><mi>R</mi></mfrac></math>&ensp;= " + im2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "r"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>R&ensp;= <math><mfrac><mi>V<sub>M</sub></mi><mi>I<sub>M</sub></mi></mfrac></math>&ensp;= " + r2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "irms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>RMS</sub>&ensp;= (<math><mfrac><mi>I<sub>M</sub></mi><mi>2</mi></mfrac></math>)&ensp;&#215&ensp;&#8730;[1&ensp;&minus;&ensp;<math><mfrac><mi>&#9082;</mi><mi>180</mi></mfrac></math>&ensp;&plus;&ensp;<math><mfrac><mi>sen(2&ensp;&#215&ensp;&#9082;)</mi><mi>2&ensp;&#215&ensp;&pi;</mi></mfrac></math>]= " + irms2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "i0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub>&ensp;&#215&ensp;(1&ensp;&plus;&ensp;cos(&#9082;))</mi><mi>2&ensp;&#215&ensp;&pi;&ensp;&#215&ensp;R</mi></mfrac></math>&ensp;= " + i0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "o"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>&theta;&ensp;= 180&ensp;&minus;&ensp;&#9082;&ensp;= " + theta.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "s"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>S&ensp;= V<sub>S</sub>&ensp;&#215&ensp;I<sub>RMS</sub>&ensp;= " + s2.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "pf"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>PF&ensp;= <math><mfrac><mi>P</mi><mi>S</mi></mfrac></math>&ensp;= " + pf.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "alfa"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>&#9082;&ensp;= con&#8315;&sup1;(<math><mfrac><mi>2&ensp;&#215&ensp;&pi;&ensp;&#215&ensp;V<sub>0(AVG)</sub></mi><mi>V<sub>M</sub></mi></mfrac></math>&ensp;&minus;&ensp;1)&ensp;= " + alfa2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularMonoComp.addEventListener("click", function(){
    let vm = vmTxt.value;
    let alfa = alfaTxt.value;
    let im = imTxt.value;
    let v0 = v0Txt.value;

    const v0a = (vm*(1+Math.cos(alfa)))/PI;
    const i0a = (im*(1+Math.cos(alfa)))/PI;
    const irms = (im/Math.sqrt(2))*Math.sqrt(1-(alfa/180)+(Math.sin(2*alfa)/2*PI));
    const alfa2 = Math.pow((Math.cos((v0*PI)/vm)-1), -1);

    console.log(alfa2);
    console.log(v0);
    console.log(vm);

    let tipoComponenteValue = componenteMonoComp.value;

    if (tipoComponenteValue == "v0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub>&ensp;&#215&ensp;(1&ensp;&plus;&ensp;cos(&#9082;))</mi><mi>&pi;</mi></mfrac></math>&ensp;= " + v0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "i0a"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>I<sub>M</sub>&ensp;&#215&ensp;(1&ensp;&plus;&ensp;cos(&#9082;))</mi><mi>&pi;</mi></mfrac></math>&ensp;= " + i0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "i0r"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>RMS</sub>&ensp;= (<math><mfrac><mi>I<sub>M</sub></mi><mi>&#8730;2</mi></mfrac></math>)&ensp;&#215&ensp;&#8730;[1&ensp;&minus;&ensp;<math><mfrac><mi>&#9082;</mi><mi>180</mi></mfrac></math>&ensp;&plus;&ensp;<math><mfrac><mi>sen(2&ensp;&#215&ensp;&#9082;)</mi><mi>2&ensp;&#215&ensp;&pi;</mi></mfrac></math>]= " + irms.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "alfa"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>&#9082;&ensp;= con&#8315;&sup1;(<math><mfrac><mi>&pi;&ensp;&#215&ensp;V<sub>0(AVG)</sub></mi><mi>V<sub>M</sub></mi></mfrac></math>&ensp;&minus;&ensp;1)&ensp;= " + alfa2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});

btnCalcularMonoDv.addEventListener("click", function(){
    let vm = vmTxt.value;
    let alfa = alfaTxt.value;
    let im = imTxt.value;
    let v0 = v0Txt.value;

    const v0a = (vm*(1+Math.cos(alfa)))/PI;
    const irms = im*Math.sqrt(1-(alfa/180)+(Math.sin(2*alfa)/2*PI));
    const alfa2 = Math.pow((Math.cos((v0*PI)/vm)-1), -1);

    let tipoComponenteValue = componenteMonoDv.value;

    if (tipoComponenteValue == "v0"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>V<sub>0(AVG)</sub>&ensp;= <math><mfrac><mi>V<sub>M</sub>&ensp;&#215&ensp;(1&ensp;&plus;&ensp;cos(&#9082;))</mi><mi>&pi;</mi></mfrac></math>&ensp;= " + v0a.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "irms"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>I<sub>RMS</sub>&ensp;= I<sub>M</sub>&ensp;&#215&ensp;&#8730;[1&ensp;&minus;&ensp;<math><mfrac><mi>&#9082;</mi><mi>180</mi></mfrac></math>&ensp;&plus;&ensp;<math><mfrac><mi>sen(2&ensp;&#215&ensp;&#9082;)</mi><mi>2&ensp;&#215&ensp;&pi;</mi></mfrac></math>]= " + irms.toFixed(3).replace(".", ",") + "</p></div>";
    } else if (tipoComponenteValue == "alfa"){
        showTagBlock(divResultados);
        showTagFlex(divApareceResultado);
        divApareceResultado.innerHTML = "<div class='resultado-size'><p class='p-height'>&#9082;&ensp;= con&#8315;&sup1;(<math><mfrac><mi>&pi;&ensp;&#215&ensp;V<sub>0(AVG)</sub></mi><mi>V<sub>M</sub></mi></mfrac></math>&ensp;&minus;&ensp;1)&ensp;= " + alfa2.toFixed(3).replace(".", ",") + "</p></div>";
    }
});
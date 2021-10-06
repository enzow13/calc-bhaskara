function CompleteCalculationBhaskara(paragraph, delta, a_, b_, c_) {

    let checkInt = (calc) => {
        let CheckSqrt = Math.sqrt(calc)
        if (Number.isInteger(CheckSqrt)) {
            return CheckSqrt;
        }else{
            return parseFloat(CheckSqrt).toFixed(2)
        }
    }

    let checkPlusOrMinus = (calc) => {
        if ((calc) >= 0) {
            return '+';
        }else {
            return '';
        }
    }

    let a = a_.value;
    let b = b_.value;
    let c = c_.value;
    let DELT = checkInt(delta);
    let calcXnposi = parseFloat((-(b) + DELT)/ (2*a)).toFixed(2);
    let calcXnneg = parseFloat((-(b) - DELT)/ (2*a)).toFixed(2);


    let resultado = `${a}x² ${checkPlusOrMinus(b)} ${b}x ${checkPlusOrMinus(c)} ${c} = 0<br>
    DELTA = (${b})² - 4 * ${a} * ${c}<br>
    DELTA = ${b*b} ${checkPlusOrMinus(-4*a*c)} ${-4*a*c}<br>
    DELTA = ${delta}<br><br>

    x1 = -(${b}) + √${delta} / (2 * ${a})<br>
    x1 = ${-(b)} + ${DELT} / ${2*a}<br>
    x1 = ${-(b) + DELT} / ${2*a}<br>
    x1 = ${calcXnposi}<br><br>

    x2 = -(${b}) - √${delta} / (2 * ${a})<br>
    x2 = ${-(b)} - ${DELT} / ${2*a}<br>
    x2 = ${-(b) - DELT} / ${2*a}<br>
    x2 = ${calcXnneg}<br><br>
    
    S = { x ER / x' = ${calcXnposi} e x" = ${calcXnneg}}<br>
    Tradução: x Pertence aos Números Reais tal que x' vale ${calcXnposi} e x" vale ${calcXnneg}`;
    return paragraph.innerHTML = resultado
};

function CalcBhaskara() {
    const a_incog = document.getElementById("input-first-incog");
    const b_incog = document.getElementById("input-second-incog");
    const c_incog = document.getElementById("input-third-incog");
    console.log(typeof a_incog.value, a_incog.value)
    const answer_calc = document.getElementById("p-aswr");

    if (a_incog.value !== '' && a_incog.value != '0') {
        if (b_incog.value !== '') {
            if (c_incog.value !== '') {
                let delta = b_incog.value * b_incog.value - (4 * a_incog.value * c_incog.value);
                if (delta == 0 || delta > 0) {
                    let x1 = (-b_incog.value + Math.sqrt(delta)) / (2*a_incog.value);
                    let x2 = (-b_incog.value - Math.sqrt(delta)) / (2*a_incog.value);
                    if (x1 === x2) {
                        answer_calc.innerHTML = `Valor aproximado de X: ${parseFloat(x1).toFixed(2)}`;
                        CompleteCalculationBhaskara(document.getElementById("span-math-calculation"), delta=delta, a_incog, b_incog, c_incog);
                    }else{
                        answer_calc.innerHTML = `Valor aproximado de X1: ${parseFloat(x1).toFixed(2)} // Valor aproximado de X2: ${parseFloat(x2).toFixed(2)}`;
                        CompleteCalculationBhaskara(document.getElementById("span-math-calculation"), delta, a_incog, b_incog, c_incog);
                    }
                }else{
                    answer_calc.innerHTML = 'X: Inexistente';
                };
            };
        };
    }else {
        function createAlert(msg) {
            document.querySelector('body').insertAdjacentHTML("beforebegin", `<div class="alerterror">${msg}</div>`);
            setInterval(function () {deleteAlert()}, 3000);
        }
        createAlert("A incógnita 'a' precisa ser um número diferente de zero!")
    };
};

function deleteAlert() {
    const list = document.querySelectorAll(".alert");
    for (const item of list) {
        item.remove();
    }
}
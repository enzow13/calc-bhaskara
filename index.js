function CalcBhaskara() {
    const a_incog = document.getElementById("input-first-incog");
    const b_incog = document.getElementById("input-second-incog");
    const c_incog = document.getElementById("input-third-incog");

    const answer_calc = document.getElementById("aswr-calc-btn");

    if (a_incog.value !== '') {
        if (b_incog.value !== '') {
            if (c_incog.value !== '') {
                let delta = Math.pow(b_incog.value, 2) - 4 * a_incog.value * c_incog.value;
    
                if (delta == 0 || delta > 0) {
                    let x1 = (-b_incog.value + Math.sqrt(delta))/2*a_incog.value;
                    let x2 = (-b_incog.value - Math.sqrt(delta))/2*a_incog.value;
                    if (x1 === x2) {
                        answer_calc.innerHTML = `Valor aproximado de X: ${Math.round(x1)}`;
                    }else{
                        answer_calc.innerHTML = `Valor aproximado de X1: ${Math.round(x1)}\nValor aproximado de X2: ${Math.round(x2)}`;
                    }
                }else{
                    answer_calc.innerHTML = 'X: Inexistente';
                };

            };
        };
    };
};
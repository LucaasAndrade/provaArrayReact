


export function Inverter(vetor) {
    let atual = [];
    let cont = 0
    for (let i = vetor.length-1; i >= 0; i--){
        atual[cont] = vetor[i];
        cont++;
    }
    return atual;
}

// console.log(Inverter([2, 4, 6, 7]))
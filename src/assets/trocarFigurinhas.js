



 export function trocarFigurinhas(vetor1, vetor2) {
    let cont = 0;
    for (let i = 0; i < vetor1.length; i++) {
        for (let j = i; j < vetor2.length; j++){
            if (vetor1[i] == vetor2[j]) break;
            else cont++
        }
     }
    return cont - 1
}

console.log(trocarFigurinhas([1,4], [1, 6, 8]))
function criarNivel(vitorias, derrotas) {
    let totalVitorias = vitorias - derrotas;
    let nivel = "";

    if (totalVitorias < 10) {
        nivel = "Ferro";
    } else if (totalVitorias >= 10 && totalVitorias <= 20) {
        nivel = "Bronze";
    } else if (totalVitorias >= 21 && totalVitorias <= 50) {
        nivel = "Prata";
    } else if (totalVitorias >= 51 && totalVitorias <= 80) {
        nivel = "Ouro";
    } else if (totalVitorias >= 81 && totalVitorias <= 90) {
        nivel = "Diamante";
    } else if (totalVitorias >= 91 && totalVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        totalVitorias: totalVitorias,
        nivel: nivel
    };
}

let vitorias = 68;
let derrotas = 13;

let resultado = criarNivel(vitorias, derrotas);
console.log("Dalas tem um total de " + resultado.totalVitorias + " vitórias e está no nível " + resultado.nivel);






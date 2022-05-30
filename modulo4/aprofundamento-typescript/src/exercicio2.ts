//a) Entrada: Array de números.
// Saída: Retorna estatísticas (objeto).

// b) e c)
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    );

    let soma = 0;

    for (let num of numeros) {
        soma += num;
    };

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas;
};

type amostra = {
    numeros: number[];
    obterEstatisticas: number
};

console.log(obterEstatisticas([7, 1, 3]));
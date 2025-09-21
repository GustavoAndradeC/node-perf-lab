// Exemplo simples de memoização em JavaScript

const cache = {};

function calculoPesado(n) {
  if (cache[n]) {
    console.log(`Retornando do cache: ${cache[n]}`);
    return cache[n];
  }

  const result = n * 17;
  cache[n] = result;

  console.log(`Calculando... Resultado: ${result}`);
  return result;
}

// Testes
console.log(calculoPesado(10)); // Calcula e salva
console.log(calculoPesado(5));  // Calcula e salva
console.log(calculoPesado(10)); // Retorna do cache

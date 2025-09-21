function lazySquare(n) {
  console.log("Preparando para calcular...");
  return () => {
    console.log("Calculando agora!");
    return n * n;
  };
}

const square = lazySquare(5);
console.log("Ainda não calculou!");
console.log(square()); // Agora calcula

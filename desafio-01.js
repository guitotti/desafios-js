// Calculo de média aritmética

// Opção por utilizar o método reduce() do JS

const average = (...numbers) => {
  const sum = numbers.reduce((accum, number) => {
    return accum + number;
  }, 0);

  return sum / numbers.length;
};

// Teste
console.log(average(10, 7.5, 6, 8, 4.5, 9));

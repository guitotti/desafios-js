// Receber um array de elementos quaisquer e retornar um novo array com as posições na ordem inversa

// Não alterar array original

// Não utilizar métodos do objeto global Array (map, forEach, reverse etc.)

const reverse = (elements) => {
  const reverseArray = [];

  for (let i = elements.length - 1; i >= 0; i--) {
    reverseArray.push(elements[i]);
  }

  return reverseArray;
};

console.log("Ordem original: " + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("Ordem inversa: " + reverse([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

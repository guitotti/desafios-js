// Procedimento Recursivo I

// Retornar "chunks" separados por "-" de acordo com número passado como parâmetro
// Exemplo: se número for 3, retornar chunk-chunk-chunk

// NÃO utilizar laços de repetição while, for etc.

const chunks = (numberOfChunks) => {
  if (numberOfChunks === 0) return "";
  if (numberOfChunks === 1) return "chunk";

  return "chunk-" + chunks(numberOfChunks - 1);
};

console.log(chunks(13));

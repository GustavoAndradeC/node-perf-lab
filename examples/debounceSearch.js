function debounce(fn, delay) {
  let timeout; 
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => {
  console.log(`Buscando por: ${query}`);
}, 500);

search("t");
search("te");
search("tes");
search("test");
search("teste");
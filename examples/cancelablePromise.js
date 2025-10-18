function cancelablePromise(promise) {
  let canceled = false;

  const wrapped = new Promise((resolve, reject) => {
    promise
      .then(val => canceled ? reject('Canceled') : resolve(val))
      .catch(err => canceled ? reject('Canceled') : reject(err));
  });

  return {
    promise: wrapped,
    cancel: () => canceled = true
  };
}

const slowPromise = new Promise(resolve => setTimeout(() => resolve('Feito!'), 5000));

const { promise, cancel } = cancelablePromise(slowPromise);

// Cancelando depois de 2 segundos
setTimeout(() => {
  cancel();
  console.log('Promise cancelada!');
}, 2000);

promise
  .then(console.log)
  .catch(console.error);

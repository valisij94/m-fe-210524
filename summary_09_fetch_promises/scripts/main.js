const asyncNumbers = [
  new Promise(resolve => resolve(5)),
  new Promise(resolve => resolve(3)),
  new Promise(resolve => resolve(7)),
  new Promise(resolve => resolve(4)),
  new Promise(resolve => resolve(8)),
];

// Для задачи 9
const workers = [
  { name: 'Petr', work: () => new Promise( resolve => setTimeout(() => resolve('Corpus'), 700)) },
  { name: 'Vasilij', work: () => new Promise( resolve => setTimeout(() => resolve('Doors'), 1500)) },
  { name: 'Sergey', work: () => new Promise( resolve => setTimeout(() => resolve('Engine'), 3000)) },
  { name: 'Ivan', work: () => new Promise( resolve => setTimeout(() => resolve('Wheels'), 1000)) },
];

// Для задачи 10
const badWorkers = [
  { name: 'Worker1',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Corpus') : reject('Fail'), 700))
  },
  { name: 'Worker2',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Doors') : reject('Fail'), 1000))
  },
  { name: 'Worker3',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Engine') : reject('Fail'), 3000))
  },
  { name: 'Worker4',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Wheels') : reject('Fail'), 2000))
  },
];
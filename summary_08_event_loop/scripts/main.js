const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]


console.log('Start')
const pp = [];
for (let i = 0; i < 5; i++) {
  pp.push(new Promise( resolve => resolve(i) ));
}
setTimeout( () => console.log('Timon'));

pp.forEach( el => {
  el.then(r => console.log(r))
})
console.log('Finish')
 # README

## Итоговое занятие №9

### Тема:

Репозитарий содержит материалы по итоговому занятию №9, посвященному работе с объектами, и асинхронным операциям в JS.

### Разогрев

1. Что выведет код?
```
async function firstFunction() {
  console.log('Start');
  const myPromise = new Promise( (resolve, reject) => {
    resolve('Result');
  });
  // AWAIT - функция, притормози, дождись выполнения промиса, и потом продолжай
  const result = await myPromise;
  console.log(result);
  console.log('Finish');
}

firstFunction();
console.log('After');
```

2. Что выведет код?
```
async function firstFunction() {
  console.log('Start');
  const myPromise = new Promise( (resolve, reject) => {
    console.log('In Promise');
    resolve('Result');
  });
  const result = await myPromise;
  console.log(result);
}

firstFunction();
console.log('After');
```

3. Что выведет код?
```
async function firstFunction() {
  console.log('Start');
  const myPromise = new Promise( (resolve, reject) => {
    console.log('In Promise');
    resolve('Result');
  });
  const result = await myPromise;
  console.log(result);
  return 'Function Result';
}

const res = firstFunction();
console.log(res);
console.log('After');
```

### Задачи занятия
1. Пишем универсальную функцию отправки GET-запроса, которая будет запрашивать данные с указанного УРЛ, и возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.
2. С помощью нашей функции, обратимся к адресу `https://dummyjson.com/products`, в ответе посчитать общую стоимость товаров в массиве `products`.
3. Дорабатываем нашу функцию `jsonRequest`. Теперь, если в функцию передан пустой url, то нужно генерировать свое исключение с текстом "Please, provide the URL!".
4. Напишем функцию проверки URL-адреса, `checkUrl`. Она будет принимать в аргументах адрес, и должна проверить, доступен ли он. То есть, обратиться к этому адресу, и если запрос успешный (статус от 200 до 299) - то вернуть true, иначе - false.
5. У нас на странице есть выпадающий список. Нужно написать функцию `renderCategories`, которая с помощью нашей функции `jsonRequest` обратится по адресу `https://dummyjson.com/products/categories`, и отрендерит список категорий товаров.
6. Добавляем обработчик на событие `change` нашего `select` - при этом событии, нужно отправлять запрос товаров соответствующих категорий по адресу `https://dummyjson.com/products/category/КАТЕГОРИЯ`. Результат выводить в консоль.
7. Усложним нашу функцию `jsonRequest`. Мы хотим, чтобы в случае ошибки при запросе, функция делала бы повторнубю попытку. Не более 3 попыток.
8. У нас есть массив `asyncNumbers` - это массив, который содержит несколько промисов, которые будут зарезолвлены числами. Нужно посчитать сумму этих чисел.
9. У нас есть массив с рабочими предприятия, которые работают на конвейере и собирают машины. У каждого объекта с данными рабочего, есть функция `work` - рабочий выполняет свою часть работы. Эта функция возвращает промис, который будет зарезолвлен той деталью, которую делает этот рабочий. Нужно написать функцию `assembleCar`, которая будет принимать на вход массив рабочих. Она пройдется по массиву рабочих, запустит для каждого его функцию `work`, соберет результаты в массив, и вернет этот массив. В этой задаче, работу можно запускать параллельно.
10. Усложним задачу. Предположим, что наши работы могут выполняться последовательно - то есть, одна за другой.
11. Открыли новый цех, и на него набрали рабочих меньшей квалификации - они иногда косячат. Нужно, чтобы конвейер продолжал работу, несмотря на их "косяки". То есть, нужно добавить обработку исключительных ситуаций - предусмотреть неуспешные завершения промисов.
12. Задача "со звездочкой". Сделать так, чтобы при косяке рабочего, его работа запускалась бы по новой, пока он не сделает свою часть успешно. Задача к обсуждению.

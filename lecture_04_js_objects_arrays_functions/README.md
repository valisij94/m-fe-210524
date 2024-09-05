# README

## Лекционное занятие №4

### Тема:

Репозитарий содержит материалы по лекционному занятию №4, посвященному работе с массивами, объектами, и функциями в JS.

### Функции в JS
Сегодня поговорим о функциях. Как мы помним, в программировании есть такой принцип - DRY, или Don't Repeat Yourself. То есть, избегайте дублирования кода. Но бывают ситуации, когда нам нужно выполнять одну и ту же задачу многократно. И в этом нам как раз помогают функции. То есть, мы один раз определяем код для решения этой задачи (тело функции), а затем вызываем ее в нужных местах.

Что это нам даст?
 - логика работы лежит в одном месте, и если у нас что-то поменяется, то мы это изменим в одном месте, а не будем искать по всему проекту.
 - мы не дублируем наш код
 - функции проще поддерживать (покрывать тестами, документировать и т.д.)

Пример - нам нужно в нашем веб-проекте открывать модальное окно для информирования пользователя. Например, о том что его запрос успешно отправлен, или наоборот, что-то пошло не так. Мы видим, что нам нужно использовать эту логику во многих местах программы - а значит, имеет смысл вынести эту логику в фукнкцию.

```
function openModal() {
  // открываем модальное окно
}
```

И далее в коде, мы будем просто вызывать эту функцию. Вот таким образом:

```
// какой-то код
openModal(); // открываем модалку
// другой код
openModal(); // еще открываем модалку
// ...
```

Что у нас здесь имеется? Это "объявление" функции. То есть мы говорим "эй, JS, создай именованный блок кода. Он будет называться `openModal`, и мы хотим впоследствии обращаться к нему из нашего кода". Все, что внутри фигурных скобок - это тело функции, то есть набор команд, который будет выполнен при вызове функции. Каждый раз, когда мы вызываем функцию, JS как бы "переходит" в тело функции, и последовательно выполняет эти команды. Можно в этом убедиться в отладчике (дебаггере), используя шаг с заходом в функцию.

Или еще пример: вывести в консоль приветствие пользователю.

```
function greetUser() {
  console.log('Привет, пользователь!');
}
```

**Аргументы (или параметры)**
Возникает логичный вопрос: а можем ли мы как-то передать внутрь функции какую-то информацию, которая может быть полезна? Например, мы хотим приветствовать пользователя, и показывать его имя. Чтобы выводилось нечто вроде "Привет, Вася!".

Этого можно добиться путем указания аргументов при определении функции, и передачи этих аргументов в функцию.
```
function greetUser(username) {
  console.log(`Hi, ${username}`);
}
```

То есть, мы определили аргумент в функции. Мы сказали "эй, функция, ты теперь при вызове будешь получать аргумент, и им нужно воспользоваться таким-то образом". И теперь при вызове, мы будем передавать этот аргумент так:
```
greetUser('Vasya');
```

Важный момент! Если при вызове функции в нее не передан аргумент, то его значением по умолчанию будет `undefined`.
```
greetUser(); // greetUser(undefined);
```

Можно задавать значения по умолчанию - на тот случай, если не переданы аргументы. Это делается так:
```
function greetUser(username = 'Somebody') {
  console.log(`Hi, ${username}`);
}
```

Тело функции не поменялось - мы лишь указали значение по умолчанию для аргумента `username`. Теперь, если функция вызвана без аргумента, то будет использовано наше значение по умолчанию.

**Возвращаемое значение**
Иногда, нам нужно получить какое-то результирующее значение из функции. То есть, мы хотим передать в функцию какие-то данные, и получить от нее результат. Например, функция, которая считает сумму двух чисел.

```
function getSum(a, b) {
  return a + b;
}
```

Здесь, мы определили функцию, которая ожидает 2 аргумента, и должна нам вернуть сумму этих аргументов. И результат функции можно записывать в переменные.

```
const sumOf2And3 = getSum(2,3); // в константу sumOf2And3 запишется значение 5 - результат работы функции
```

По умолчанию (если функция не содержит явного return), она возвращает undefined.

**Закрепим практикой**
1. Напишите функцию `isEven`, которая проверяет число на четность. Функция в аругментах принимает число, и должна вернуть boolean - true, если число четное, и false если нечетное.
2. Напишите функцию `makeGreetingText`, которая будет принимать 2 аргумента: имя пользователя и его возраст.  Функция должна вернуть строку вида "Привет, ИИЯ_ПОЛЬЗОВАТЕЛЯ, ты совершеннолетний/несовершеннолетний". Возраст совершеннолетия - 21 год.
3. Доработайте функцию из задачи 2 - по умолчанию имя пользователя должно быть 'User', а возраст - 18.
4. Написать функцию вычисления площади круга. Формула - Pi * R * R, где Pi - это постоянная (3.14), а R - радиус окружности.
5. Задача со звездочкой. Написать функцию проверки числа на простоту. Число считается простым, если оно делится без остатка только на себя, и на 1. Пример - числа 3, 5, 7, 11, ...

**Локальные и глобальные переменные**
Когда мы объявляем функцию, мы можем объявлять переменные внутри этой функции. И эти переменные будут существовать ТОЛЬКО внутри этой функции (т.е. внутри фигурных скобок). Попытка обратиться к ним снаружи приведет к ошибке. Но при этом, функция имеет доступ ко всем переменным, которые объявлены "снаружи" функции.

```
let outer = 'Outer variable';

function test() {
  let innerVariable = 'Inner variable';
  console.log(innerVariable); // Inner variable
  console.log(outerVariable); // Outer variable
}

console.log(outerVariable); // Outer variable
console.log(innerVariable); // Error: innerVariable is not defined
```

Переменные, которые объявлены внутри функции - это локальные переменные. Те, что объявлены вне всех функций - глобальные. Использование глобальных переменных считается нехорошей идеей, потому что они засоряют глобальную область видимости, но об этом поговорим в другой раз (или почитайте сами).

**Function expression, Function declaration**
В JavaScript, функции являются объектами первого класса, то есть они могут передаваться как аргументы в другие функции, возвращаться из функций как результаты, записываться в переменные, и т.д.

До текущего момента, мы имели дело с function declaration - то есть с объявлением функции. А есть еще понятие `function expression`, функциональное выражение.
```
const myFunction = function() { //... }
```

Такая запись применяется в основном для стрелочных функций, о них чуть позже.

Разница между такими записями в основном в том, что функцию, объявленную как `function expression` можно использовать только после объявления, тогда как `function declaration` - можно вызвать и до объявления. Есть еще несколько различий, но пока о них говорить не будем.

К чему мы вообще это обсудили? К тому, что в JS функции могут быть записаны в переменные, а следовательно, передаваться как аргументы в другие функции. Зачем это нужно - для реализации колбэков.

**Функции обратного вызова (колбэки)**
Что это такое? Колбэк - это функция А, которая передается в качестве аргумента в другую функцию Б, и мы ожидаем, что функция А будет вызвана в ходе выполнения функции Б.

Пример:
```
function throwCoin(averse, reverse) {
  let result = Math.random();
  if (result < 0.5) averse();
  else reverse();
}
```

Это пример функции, имитирующей подбрасывание монетки. Если выпал "орел", то вызываем колбэк averse, иначе - вызываем колбэк reverse. То есть, мы просто указываем аргументы функции, и в нужный момент мы их можем вызвать - потому что предполагаем передавать в эти аргументы другие функции.

Вот пример использования:
```
function averseCallback() {
  console.log('Averse!');
}

function reverseCallback() {
  console.log('Reverse!');
}

throwCoin(averseCallback, reverseCallback); // **
```

ОЧЕНЬ ВАЖНЫЙ МОМЕНТ! Обратите внимание, как мы передаем колбэки в функцию `throwCoin` (строка **). Мы передаем только ИМЕНА функций, без круглых скобок! Это очень важно, потому что если мы напишем `throwCoin(averseCallback(), reverseCallback())`, то JS сначала вызовет функции `averseCallback`, `reverseCallback`, и передаст в нашу функцию `throwCoin` РЕЗУЛЬТАТЫ вызовов этих колбэков (то есть то, что они вернут).

**Закрепим практикой**
1. Написать функцию `greetAdult`, которая примет возраст пользователя, и два колбэка. Первый колбэк нужно будет вызывать, если пользователь старше 21, а второй - если младше.
2. Написать функцию `сallForEach`. Она должна принять массив и функцию-колбэк. Задача - пройтись по массиву, и вызвать колбэк для каждого элемента массива. Пример:
```
function callback(elem) {
  console.log(elem);
}

callForEach( [1,2,3], callback );
// В консоли выведено 1, 2, 3
```

**Стрелочные (arrow) функции**
В JS есть возможность сокращенной записи функций, с использованием стрелочного синтаксиса. Он активно используется при определении колбэков - просто потому, что так короче.
```
const sum = (a,b) => a + b;

const manyLinesFunc = (a,b) => {
  return a + b;
}
```
О разнице стрелочных и обычных функций мы будем говорить позже. Пока что нужно понимать синтаксис стрелочных функций. И важно понимать, как записывать много- и однострочные стрелочные функции.

**Закрепим практикой**
1. Напишите стрелочную функцию, которая возвращает произведение двух чисел.
2. Напишите стрелочную функцию, которая проверяет, что аргумент делится на 3 без остатка, и возвращает результат.
3. Напишите стрелочную функцию, которая принимает в аргументах массив и возвращает сумму элементов массива.

### Полезные ссылки
 - (Русскоязычный гайд)[https://learn.javascript.ru/function-basics] по функциям.
 - (Function Expression vs Function Declaration)[https://learn.javascript.ru/function-expressions]
 - Очень толково об (объектах)[https://learn.javascript.ru/object]. Особое внимание уделить (этому)[https://learn.javascript.ru/object#kvadratnye-skobki].
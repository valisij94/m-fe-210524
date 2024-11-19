# README

## Лекционное занятие №27

### Тема:

Репозитарий содержит материалы по лекционному занятию №27, посвященному продолжению знакомства с React.js, и понятию пропсов.

**Что это и зачем это нужно?**
Props (пропсы) - это сокращение от `properties`, то есть свойства. Это - способ общения компонентов React между собой. Они нужны для того, чтобы передать что-то в компонент снаружи. Пропсы чем-то напоминают HTML-атрибуты, с несколькими отличиями:
 - пропсы определяем мы (разработчики)
 - в пропсах можно передавать все, что угодно - примитивы, объекты, функции, массивы, ...

Также, иногда пропсы можно воспринимать как аргументы, которые мы передаем при вызове функции. Мы задаем значения аргументов, чтобы получить какой-то результат в зависимости от этих аргументов. Точно так же и здесь - мы передаем какие-то пропсы в компонент, и в зависимости от значений этих пропсов, получим какую-то разметку.

**Рассмотрим на примере**
Ранее, в наших занятиях, мы создавали компонент `SimpleHeader`, который рисовал нам заголовок. Доселе, заголовок всегда содержал один и тот же текст. Было бы гораздо лучше, если бы мы могли как-то задать желаемый текст, то есть сказать "эй компонент, создай разметку для заголовка с текстом таким-то". И вот тут нам помогут пропсы.

Применение пропсов можно разделить на 2 этапа.
**Первый этап - определение пропсов в компоненте**
Точно так же, как мы указываем перечень аргументов в спецификации функции, мы указываем, что наш компонент будет ожидать какие-то пропсы, и будет их как-то использовать.
```
export default function SimpleHeader(props) {
  return (
    <h3 className='simpleHeader'>{props.headerText}</h3>
  )
}
```

В первой строке, мы указали, что наш компонент ожидает пропсы - то есть, что-то будет передано при его отрисовке. В разметке, мы сказали, что мы хотим использовать значение пропса `headerText` в качестве текста для нашего заголовка.

**Второй этап - отрисовка компонентов с конкретными значениями пропсов**
И теперь, нам осталось при вызове компонента указать, какое конкретно значение пропса мы хотим ему передать.
```
function App() {
  return (
    <div className='App'>
      <SimpleHeader headerText="Hello from simple header!">
    </div>
  )
}
```

Здесь мы как бы говорим "эй, React, отрисуй нам пожалуйста разметку компонента SimpleHeader, и передай ему в качестве пропа headerText значение `Hello from simple header!`". Результатом будет заголовок с этим текстом.

Следует отметить несколько важных моментов.
1. Пропсов может быть сколь угодно много, то есть наш компонент может принимать такое количество пропсов, которое нужно нам.
2. Если при вызове компонента мы передаем ему те пропсы, которые не указаны (не используются) в самом компоненте, то они будут проигнорированы - то есть никак не повлияют на результат.
3. Когда мы передаем пропсы в компонент, React собирает из них объект, где ключами будут имена пропсов, а значениями - значения пропсов.
4. Когда мы определяем React-компонент как функцию, ОБЪЕКТ с пропсами будет передаваться ему в ПЕРВОМ аргументе.

**Еще небольшой пример**
```
function StyledParagraph(props) {
  return (
    <p className={props.paragraphClass}>{props.text}</p>
  )
}

// ...

function App() {
  return (
    <div className='App'>
      <SimpeParagraph text="Simple Text" paragraphClass="simpleParagraph" />
    </div>
  )
}
```

Здесь мы говорим, что компонент `SimpleParagraph` будет ожидать пропсы. Мы ожидаем, что в пропсах будут переданы пропсы `text`, `paragraphClass`. Далее, в компоненте `App`, мы хотим отрисовать наш компонент с конкретными пропсами. При таком варианте, значением аргумента `props` у компонента `SimpleParagraph` будет такой объект:
```
{
  text: "Simple Text",
  paragraphClass: "simpleParagraph"
}
```

Если мы добавим какие-то новые пропсы в рендеринг нашего SimpleParagraph - ничего не поменяется.

**Закрепим практикой**
1. Наш компонент `SimpleParagraph` сейчас рендерит только статический текст. Сделайте так, чтобы он теперь ожидал проп `textContent`.
2. Этот же компонент имеет инлайн стили. Мы хотим, чтобы можно было в пропсах передать цвет текста параграфа (т.е. в пропсах будет новый проп `textColor`, в котором мы будем передавать строку с цветом текста).
3. Создайте компонент `DwarfCard`, который будет рендерить карточку гнома. Он будет принимать такие пропсы:
 - name - имя. Рендерим как заголовок h3
 - nickname - прозвище, рендерим вместе с именем
 - age - возраст - рендерим как параграф
 - primaryWeapon - основное оружие, рендерим как параграф

Всю карточку рендерим как `div`, задаем класс `dwarfCardContainer`. В файле ./data/dwarwes.js есть массив гномов `dwarwesArray`, нужно отрисовать этот массив внутри компонента `App`.
4. Композиция компонентов. Сделайте так, чтобы в компоненте `DwarfCard`, вместо стандартного заголовока h3, использовался бы наш `SimpleHeader`.

**Пропсы по умолчанию**
Иногда, нам нужно задать значения пропсов по умолчанию. Это также похоже на аргументы в функции, там мы тоже можем задавать значения по умолчанию. Здесь логика будет та же - мы скажем, какие значения должны использовать пропсы, если их не передали при вызове компонента. В этом нам помогает деструктуризация. Мы деструктурируем объект `props` на "составные части", и указываем, кто должен принимать какие значения.

```
function StyledParagraph( { text='Default text', paragraphClass='simpleParagraph'} ) {
  return (
    <p className={paragraphClass}>{text}</p>
  )
}
```

Здесь мы определяем значения пропсов по умолчанию. То есть, когда при рендеринге в компонент НЕ передаются значения соответствующих пропсов - будут взяты значения по умолчанию. Напирмер:
```
<SimpleParagraph text="Hello World!">
```

В этом случае, будет отрендерен параграф с текстом Hello World!, но классом будет класс по умолчанию - `paragraphClass`.

**Закрепим практикой**
1. В компоненте `SimpleHeader`, добавьте значение по умолчанию для текста заголовка. По умолчанию - текст `Default header text`.
2. В компоненте `SimpleHeader`, добавьте новый проп, `type`. Он будет принимать строку с типом заголовка. Может быть 3 типа: info, warning, alert. Значение по умолчанию - info. Этот проп нужно использовать как имя класса для заголовка.
3. В компоненте `DwarfCard`, добавьте значения пропсов по умолчанию. Имя по умолчанию - `Brave Dwarf`, оружие по умолчанию - топор (`Axe`).
4. Создайте CSS-модуль для компонента `SimpleHeader`, и определите в нем классы для п.2. Класс `info` - цвет фона светло зеленый, цвет текста белый. warning - цвет фона темно-желтый, цвет текста белый. alert - цвет фона светло-красный, цвет текста красный, начертание текста жирное, текст преобразовать в верхний регистр.
5. Если мы рендерим заголовок с типом `alert`, нужно рендерить его как заголовок `h1`, а во всех остальных случаях - как `h2`.


### Полезные ссылки
 - Описание [пропсов](https://react.dev/learn/passing-props-to-a-component) в документации React.
 - [Пропсы](https://www.w3schools.com/react/react_props.asp) - тоже англоязычные, но заслуживают внимания.
 - Старая [документация](https://legacy.reactjs.org/docs/components-and-props.html) React. Хоть и помечена как устаревшая, но еще вполне актуальная. Можно просмотреть по диагонали.
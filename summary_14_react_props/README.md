# README

## Итоговое занятие №14

### Тема:

Репозитарий содержит материалы по итоговому занятию №14, посвященному продолжению знакомства с React.js, работе с пропсами и композиции компонентов.

### Задачи занятия
1. Создаем компонент `TextField`. Это будет компонент, который будет рисовать нам текстовое поле (инпут), с классом `textField`. Нужно этот инпут взять в контейнер `div.textFieldContainer` (потом мы будем усложнять это компонент). Изначально, он будет принимать только один проп, `placeholder`, который мы и поставим в атрибуты нашего инпута.

Пока что планируется работать так:
```
<TextField placeholder='some text' />
```

Ожидаемая разметка:
```
<div class="textFieldContainer">
  <input class="textField" placeholder="some text" />
</div>
```

2. Стилизуем наш компонент. Нужно сделать так, чтобы наш инпут имел внутренние отступы (10 пикселей), серую рамку в 1 пиксель, и закругленные углы. Сделайте это CSS-модулем.
3. Усложняем инпут. Теперь он будет принимать дополнительные пропсы.
 - `helpText` - вспомогательный текст.
 - `errorText` - текст ошибки

Если `errorText` непустой - то рендерим внутри контейнера под инпутом span с классом `errorField` и текстом `errorText`. Если текст ошибки пустой, а `helpText` непустой - то рисуем параграф с классом `helpText`, и текстом `helpText`. Если оба пустые - ничего не рисуем.
4. Добавим еще один проп, `label`. Если он передан - перед инпутом в контейнере рендерим параграф с классом `textFieldLabel` и текстом `label`. Если не передан - ничего не делаем.
5. Еще немного добавим интриги в инпут. Нужно добавить в наш компонент проп `size`. Он будет принимать одно из 3 значений: `small` - занимаем 30% ширины контейнера, `medium` - занимаем 65% ширины контейнера, и `large` - занимаем 100% ширины контейнера. Задача к обсуждению.
6. Создадим компонент `Button`. Это должен быть компонент-кнопка. В пропсах он будет принимать `buttonText` - текст кнопки, и `clickHandler` - обработчик события на клик по кнопке. Кнопку так же стилизуем - делаем ей цвет фона синий, цвет текста белый, рамку убираем, внутренний отступ 10 пикселей, закругленные рамки радиусом 10 пикселей.
7. Создаем компонент формы `SimpleForm`. Она должна содержать 2 инпута, и кнопку. Первый инпут - имя. Он должен содержать `placeholder` - имя, это должно быть текстовое поле, вспомогательный текст - "Не пугайтесь, мы никому не расскажем", метка (label) - "Пожалуйста, укажите имя". Второй инпут - для должности. placeholder - введите должность. Метка - "Укажите Вашу должность". При нажатии на кнопку, выводим в консоль текст "Форма отправлена!".

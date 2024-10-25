# Інструкції до лабораторної роботи: Створення та стилізація веб-сторінки

У цьому завданні ви потренуєтеся створювати вашу веб-сторінку за допомогою HTML і CSS.<br><br>

> ### **Поради: Перед початком**
> #### **Щоб переглядати ваш код і інструкції одночасно**, виберіть наступні налаштування у вашій панелі інструментів VSCode:
> - Перегляд -> Макет редактора -> Дві колонки
> - Щоб переглянути цей файл у режимі попереднього перегляду, клацніть правою кнопкою миші на цьому файлі README.md і виберіть `Open preview`
> - Виберіть ваш файл з кодом у дереві коду, що відкриє його в новій вкладці VSCode.
> - Перетягніть файли з кодом для оцінювання у другу колонку.
> - Відмінно! Тепер ви можете бачити інструкції та код одночасно.
<br><br> 
 
<br>

## Завдання 1: Створіть HTML-файл.

Мета:
- Додати фото photo.jpg на веб-сторінку.
- Додати ваше ім'я як заголовок на веб-сторінку.
- Додати ненумерований список з ваших п'яти улюблених музичних виконавців.
- Додати нумерований список з ваших п'яти улюблених фільмів.
- Додати гіперпосилання на ваш профіль у Facebook або на meta.com.

Виконайте наступні кроки:

1. Відкрийте файл `index.html` і налаштуйте наступну базову структуру HTML-документа:
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    </body>
    </html>
    ```

2. Замініть назву HTML-документа на ваше ім'я:
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
        <title>ваше ім'я</title>
    </head>
    <body>
    </body>
    </html>
    ```

3. Зв'яжіть `styles.css` у елементі `head`.

4. Додайте п'ять елементів розділювача `div` до елемента `body`.

5. Додайте заголовок 1 `h1` до першого елемента розділювача, який відображає ваше ім'я.

6. Додайте зображення `photo.jpg` за допомогою елемента зображення у другому елементі розділювача.  

7. Додайте атрибут ID зі значенням `photo` до елемента зображення.

8. Додайте заголовок 2 для `Улюблені музичні виконавці` у третьому елементі розділювача. У тому ж розділювачі додайте ненумерований список з ваших топ 5 улюблених виконавців.

9. Додайте заголовок 2 `h2` для `Улюблені фільми` у четвертому елементі розділювача. У тому ж розділювачі додайте нумерований список з ваших топ 5 улюблених фільмів.

10. Додайте гіперпосилання на вашу сторінку профілю соціальної мережі в останньому елементі розділювача. Як альтернативу, додайте гіперпосилання на `https://www.meta.com/`. На останньому кроці додайте `Мій профіль` до описового тексту тега `<a>`.

<br>

## Завдання 2: Стилізація веб-сторінки за допомогою CSS.

Мета:
- Стилізувати веб-сторінку за допомогою CSS.

Виконайте наступні кроки:

1. Відкрийте файл `styles.css`.

2. Додайте правило CSS для вашого зображення, яке встановлює властивість `border` шириною `2` пікселі з `суцільним синім` кольором.

3. Додайте правило CSS для заголовка 1, що містить ваше ім'я, і встановіть його колір на `синій`.

4. Додайте правило CSS для всіх заголовків `<h2>` і встановіть їх колір на `сірий`.

5. Додайте правило CSS, яке застосовує `відступ` у `4` пікселі до елементів розділювача.

<br>

## Останній крок: Давайте збережемо ваш код!
Щоб завершити це завдання:
- Збережіть ваш файл через File -> Save
<br><br>

### Поради

* Переконайтеся, що теги HTML правильно закриті.
* Використовуйте інший тип заголовка для вашого імені.
* Пам'ятайте про коробкову модель.

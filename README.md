# Веб-приложение внешней части МТС Маркетолог (лендинги, блог, обучение)

## Стэк

* [NextJS](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [ReactJS](https://reactjs.org/)
* [React Hook Form](https://react-hook-form.com/)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [SASS](https://sass-lang.com/)
* [Eslint](https://eslint.org/)
* [Stylelint](https://stylelint.io/)

## Запуск

Локально

```bash
npm run dev
```

На сервере

```bash
npm run build 
 
npm run start
```

## Разработка

### Именование файлов

* tsx - PascalCase
* ts, js, scss, json - kebab-case

### React

React компоненты пишем в функциональном стиле и с использованием [хуков](https://ru.reactjs.org/docs/hooks-intro.html). 
Для написания форм используем [React Hook Form](https://react-hook-form.com/). 
Компоненты форм оформляем согласно [требованиям доступности](http://web-accessibility.carnegiemuseums.org/code/forms/).
Компоненты и/или совокупность компонентов пишем в директориях (название директории должно совпадать с названием компонента), 
внутри директории должен быть объявлен реэкспорт компонента в index.ts файле чтобы уменьшить длину импортов и добавить возможность 
множественного импорта (например из директории с иконками src/components/shared/icons).
Директория компонента может содержать CSS модуль (см. пункт Стили). Подключение CCS модуля
```bash
 import styles from './<путь_к_CSS_модулю>';
```
Для комбинирования нескольких CSS классов в одном className свойстве и описания условий добавления CSS классов используем
библиотеку [classnames](https://www.npmjs.com/package/classnames).

### Стили

Код стилей пишем в CSS модулях (*.module.scss) для изоляции области видимости и удобного доступа из компонентов. 
Имя класса формируется по паттерну:
```bash
 <имя_компонента>_<имя_css_класса>__<5_случайных_символов_base64>
```
Для форматирования стилей используется [Stylelint](https://stylelint.io/) и 
[библиотека для сортировки свойств стилей](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss) 

Глобальные стили, переменные и миксины храним в папке styles. Глобальные стили подключаются в _app.tsx, 
переменные и миксины можно подключить в CSS модулях использую относительный путь
```bash
 @import 'src/styles/<имя_файла>';
```

### Иконки
Иконки оборачиваем в компоненты и храним в директории src/components/shared/icons. Объект со свойствами компонентов иконок
реализовывает интерфейс Icon. Для стилизации иконок передаем CSS класс в свойстве className.
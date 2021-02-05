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

### Стили

Код стилей пишем в CSS модулях (*.module.scss) для изоляции области видимости и удобного доступа из компонентов. 
Имя класса формируется по паттерну:
```bash
 <имя_компонента>_<имя_css_класса>__<5_случайных_символов_base64>
```
Для форматирования стилей используется [Stylelint](https://stylelint.io/) и 
[библиотека для сортировки стилей](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss) 
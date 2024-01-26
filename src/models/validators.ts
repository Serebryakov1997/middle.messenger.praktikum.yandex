export const validators: Record<string, Record<string, string | RegExp>> = {
  login: {
    rule: /^[a-zA-Z0-9_-]{3,20}$/,
    errorMsg: 'Некорректный логин. Допускается от 3 до 20 символов,'
      + ' латиница,может содержать цифры, но не состоять из них,'
      + ' без пробелов, без спецсимволов(допустимы дефис и нижнее подчеркивание)',
  },
  password: {
    rule: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorMsg: 'Некорректный пароль. Допускается от 8 до 40 '
      + 'символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  first_name: {
    rule: /(^[А-ЯЁ]{1}[а-яё-]+)|(^[A-Z]{1}[a-z-]+)/u,
    errorMsg: 'Некорректное имя. Допускается латиница или '
      + 'кирриллица. Первая буква должна быть заглавной, без '
      + 'пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  },
  second_name: {
    rule: /(^[А-ЯЁ]{1}[а-яё-]+)|(^[A-Z]{1}[a-z-]+)/u,
    errorMsg: 'Некорректная фамилия. Допускается латиница'
      + ' или кирриллица. Первая буква должна быть заглавной,'
      + ' без пробелов и без цифр, нет спецсимволов '
      + '(допустим только дефис)',
  },
  email: {
    rule: /^[a-zA-Z0-9_-]+[@][a-zA-Z]+[.][a-zA-Z]+/,
    errorMsg: 'Некорректный email. Допускается латиница,'
      + ' может включать цифры и спецсимволы вроде дефиса '
      + ' и подчёркивания, обязательно должен быть символ "@"'
      + ' и точка после неё, но перед точкой обязательно должны быть буквы',
  },
  phone: {
    rule: /^([+]{1})?[0-9]{10,15}$/,
    errorMsg: 'Некорректный телефон. Допускается от 10 до'
      + '15 символов, состоит из цифр, может начинаться с плюса',
  },
};

export const loginValidator = {
  rule: /^[a-zA-Z0-9_-]{3,20}$/,
  errorMsg: 'Некорректный логин. Допускается от 3 до 20 символов,'
    + ' латиница,может содержать цифры, но не состоять из них,'
    + ' без пробелов, без спецсимволов(допустимы дефис и нижнее подчеркивание)',
};

export const passwdValidator = {
  rule: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  errorMsg: 'Некорректный пароль. Допускается от 8 до 40 '
    + 'символов, обязательно хотя бы одна заглавная буква и цифра',
};

export const firstNameValidator = {
  rule: /(^[А-ЯЁ]{1}[а-яё-]+)|(^[A-Z]{1}[a-z-]+)/u,
  errorMsg: 'Некорректное имя. Допускается латиница или '
    + 'кирриллица. Первая буква должна быть заглавной, без '
    + 'пробелов и без цифр, нет спецсимволов (допустим только дефис)',
};

export const secondNameValidator = {
  rule: /(^[А-ЯЁ]{1}[а-яё-]+)|(^[A-Z]{1}[a-z-]+)/u,
  errorMsg: 'Некорректная фамилия. Допускается латиница'
    + ' или кирриллица. Первая буква должна быть заглавной,'
    + ' без пробелов и без цифр, нет спецсимволов '
    + '(допустим только дефис)',
};

export const emailValidator = {
  rule: /^[a-zA-Z0-9_-]+[@][a-zA-Z]+[.][a-zA-Z]+/,
  errorMsg: 'Некорректный email. Допускается латиница,'
    + ' может включать цифры и спецсимволы вроде дефиса '
    + ' и подчёркивания, обязательно должен быть символ "@"'
    + ' и точка после неё, но перед точкой обязательно должны быть буквы',
};

export const phoneValidator = {
  rule: /^([+]{1})?[0-9]{10,15}$/,
  errorMsg: 'Некорректный телефон. Допускается от 10 до'
    + '15 символов, состоит из цифр, может начинаться с плюса',
};

export const emptyValidator = {
  rule: /^(?!\s*$).+/,
  errorMsg: 'Поле не может быть пустым',
};

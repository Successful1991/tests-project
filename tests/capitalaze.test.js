import { capitalaze } from '../src/capitalaze.js'

if (capitalaze('artem') !== 'Artem') {
   throw new Error('Функция не работает!');
}

if (capitalaze('artem всегда прав!') !== 'Artem всегда прав!') {
    throw new Error('Функция не работает!');
 }

 if (capitalaze('artem Всегда прав!') !== 'Artem всегда прав!') {
    throw new Error('Функция не работает!');
 }

console.log('Все тесты пройдены');
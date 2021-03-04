
import { strict as assert } from 'assert';
import { capitalaze } from '../src/capitalaze.js'

assert.strictEqual(capitalaze('artem'), 'Artem');
assert.strictEqual(capitalaze('artem всегда прав!'), 'Artem всегда прав!');
assert.strictEqual(capitalaze('artem Всегда прав!'), 'Artem всегда прав!');

console.log('Все тесты пройдены');
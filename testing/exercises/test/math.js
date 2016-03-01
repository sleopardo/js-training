import tap, { test } from 'tap';
import math from '../src/math.js';

test('should return true if is integer', (t) => {
    t.plan(2);
    t.equal(math.isInteger(5), true);
    t.isNotEqual(math.isInteger('a'), true);
});


test('should throw error if isnt number ', (t) => {
  t.plan(3);
  t.throws( () => math.checkNumberCoersion({}));
  t.throws( () => math.checkNumberCoersion('asd'));
  t.doesNotThrow( () => math.checkNumberCoersion('555'));
});


test('AritmeticTemplate', (t) => {
  t.plan(5);
  t.throws( () => math.aritmeticTemplate({}, '+', 0));
  t.throws( () => math.aritmeticTemplate([], undefined, 0));
  t.throws( () => math.aritmeticTemplate([], '+'));
  t.throws( () => math.aritmeticTemplate([1,2], '%', 0));
  t.equal(math.aritmeticTemplate([1,2], '+',0), 3);
});


test('Deberia sumar los numeros', (t) => {
  t.plan(1);
  t.equal(math.sum(1,2,3), 6);
});


test('Deberia multiplicar los numeros', (t) => {
  t.plan(1);
  t.equal(math.multiply(2,3), 6);
});


test('Deberia devolver el factorial', (t) => {
  t.plan(4);
  t.throws( () => math.factorial('lalala'));
  t.throws( () => math.factorial(-1));
  t.throws( () => math.factorial(Number.MAX_SAFE_INTEGER + 100));
  t.equal( math.factorial(5), 120);
});


test('Deberia devolver el fibonacci', (t) => {
  t.plan(4);
  t.throws( () => math.fibonacci('lalala'));
  t.throws( () => math.fibonacci(-1));
  t.throws( () => math.fibonacci(Number.MAX_SAFE_INTEGER + 100));
  t.equal( math.fibonacci(6), 8);
});


test('avg', (t) => {
  t.plan(5);
  t.throws( () => math.avg({}));
  t.throws( () => math.avg([]));
  t.throws( () => math.avg([1,2,Number.MAX_SAFE_INTEGER + 100]));
  t.doesNotThrow( () => math.avg([1,2]));
  t.equal(math.avg([1,4,3,2]), 2.5);
});


test('median', (t) => {
  t.plan(5);
  t.throws( () => math.median({}));
  t.throws( () => math.median([]));
  t.throws( () => math.median([1,2,Number.MAX_SAFE_INTEGER + 100]));
  t.doesNotThrow( () => math.median([1,2]));
  t.equal(math.median([1,2,3]), 2);
});

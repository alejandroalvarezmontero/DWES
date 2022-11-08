import test from 'ava ';
const test = require ('ava');
const fizzBuzz = require('../src/script/fizzbuzz.js');

 test('Prueba ', t => {
 const result = fizzBuzz(1);
 t.is(result, 1);
 });

 test('Prueba 2', t => {
 const result = fizzBuzz(3);
 t.is(result, 'fizz');
 });

 test('Vamos con el  buzz', t => {
 const result = fizzBuzz(5);
 t.is(result, 'buzz');
 });

 test('Vamos con el fizzbuzz', t => {
 const result = fizzBuzz(15);
 t.is(result, 'fizzbuzz');
 });
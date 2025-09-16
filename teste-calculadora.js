// teste-calculadora.js - Testando nossa calculadora

// Importar todas as funções da calculadora
const calc = require('./calculadora');

// Testar cada função
console.log('=== TESTANDO NOSSA CALCULADORA ===');
console.log('');

// Teste da soma
console.log('Soma:');
console.log('5+3', calc.somar (5, 3));  // Resultado: 8
console.log('107', calc.somar(10, 7));  // Resultado: 17
console.log('');

// Teste da subtração
console.log('Subtração:');
console.log('104', calc.subtrair(10, 4));       // Resultado: 6
console.log('15 8=', calc.subtrair (15, 8));    // Resultado: 7
console.log('');

// Teste da multiplicação
console.log('Multiplicação:');
console.log('4 x 3', calc.multiplicar (4, 3));  // Resultado: 12
console.log('7 x 6', calc.multiplicar(7, 6));   // Resultado: 42
console.log('');

// Teste da divisão
console.log('Divisão:');
console.log('153', calc.dividir (15, 3));   // Resultado: 5
console.log('102', calc.dividir (10, 2));   // Resultado: 5
console.log('100', calc.dividir(10, 0));    // Resultado: Erro!
console.log('');


console.log('=== TESTE CONCLUÍDO ===');
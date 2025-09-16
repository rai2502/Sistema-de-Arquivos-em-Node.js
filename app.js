// app.js Usando ES6 imports
import {nome, idade, falar } from './pessoa.mjs'
console.log(nome);
console.log(falar());

// Importando funções específicas (named imports)
import { cumprimentar, calcularIdade, PI } from './utils.js';

// Importando a função padrão (default import)
import despedir from './utils.js';

// Testando as funções
console.log('=== TESTANDO ES6 MODULES === ');

// Usando named imports
console.log(cumprimentar ('Maria'));
console.log('Idade:', calcularIdade (1990));
console.log('Valor de PI:', PI);

// Usando default import
console.log(despedir('Maria'));

console.log('=== TESTE CONCLUÍDO ===');
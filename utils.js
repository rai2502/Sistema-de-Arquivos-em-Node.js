// utils.js - Funções utilitárias usando ES6 modules
// Exportando funções individuais (named exports)
export function cumprimentar (nome) {
return `Olá, ${nome}! Bem-vindo ao ES6 modules!`;
}
export function calcularIdade (anoNascimento) {
const anoAtual = new Date().getFullYear();
return anoAtual - anoNascimento;}
export const PI = 3.14159
// Exportando uma função como padrão (default export)
export default function despedir (nome) {
return `Tchau, ${nome}! Até a próxima!`;
}
export const nome = 'João';
export const idade = 30;
export function falar(){
    return `Olá eu sou ${nome}`;
}
export default{
    nome: 'João',
    idade: 30,
    falar() {
        return `Olá, eu sou ${this.nome}`;
    }
};


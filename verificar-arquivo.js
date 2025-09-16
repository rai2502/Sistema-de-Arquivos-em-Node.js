// verificar-arquivo.js
const fs = require('fs').promises;

// Função para verificar se arquivo existe
async function verificarArquivo(nomeArquivo) {
    try {
        console.log(`Verificando se "${nomeArquivo}" existe...`);

        // Tenta "acessar" o arquivo await fs.access (nomeArquivo);
        await fs.access(nomeArquivo);

        console.log(`✅ O arquivo "${nomeArquivo}" existe!`);
        return true;
    } catch (error) {
        console.log(`❌ O arquivo "${nomeArquivo}" NÃO existe.`);
        return false;
    }
}
// Função principal para testar vários arquivos
async function testarArquivos() {
    console.log('=== VERIFICANDO ARQUIVOS ===\n');

    // Lista de arquivos para verificar
    const arquivos = [
        'dados.txt',
        'arquivo-criado.txt',
        'arquivo-inexistente.txt',
        'package.json'
    ];

    // Verificar cada arquivo
    for (const arquivo of arquivos) {
        await verificarArquivo(arquivo);
        console.log(''); // Linha em branco
    }

    console.log('=== VERIFICAÇÃO CONCLUÍDA ');
}

// Executar os testes
testarArquivos();
// Exemplo mais avançado: verificar e criar se não existir
async function garantirArquivo(nomeArquivo, conteudoPadrao) {
    const existe = await verificarArquivo (nomeArquivo);

    if (!existe) {
        console.log(`Criando arquivo "${nomeArquivo}" com conteúdo padrão...`);
        await fs.writeFile(nomeArquivo, conteudoPadrao, 'utf8');
        console.log( `Arquivo "${nomeArquivo}" criado!`);
    }
}

// Teste da função avançada
async function exemploAvancado() {
    await garantirArquivo('config.txt', 'configuracao=padrao\nversao=1.0');
}
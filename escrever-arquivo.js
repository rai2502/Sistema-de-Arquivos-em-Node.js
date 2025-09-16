const fs = require('fs').promises;

async function escreverMeuArquivo(){
    try{
        console.log('✍️ Criando um novo arquivo...');
        const meuTexto = `Arquivo criado pelo Node.js!
        Data: ${new Date().toLocaleString()}
        Este arquivo foi gerado automaticamento.`;
        await fs.writeFile('arquivo-criado.txt', meuTexto, 'utf8');
        console.log('✅Arquivo "arquivo-criado.txt"criado com sucesso!');
        console.log('📄Conteúdo escrito:');
        console.log('-'.repeat(40))
        console.log(meuTexto);
        console.log('-'.repeat(40))
    }catch (error){
        console.error('❌Erro ao escrever arquivo:', error.message);

    }
}
escreverMeuArquivo();
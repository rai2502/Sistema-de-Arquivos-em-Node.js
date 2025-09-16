const fs = require('fs').promises;

async function lerMeuArquivo(){
    try{
        console.log('🤖Robô: "Vou tentar ler o arquivo dados.txt..."');

        const conteudo = await fs.readFile('dados.txt', 'utf8');

        console.log('✅Robô: "Consegui ler! Aqui está:"');
        console.log('📄Conteúdo que o robô encontrou:');
        console.log('-'.repeat(30));
        console.log(conteudo);
        console.log('-'.repeat(30));

    }catch(error){
        console.error('❌Robô: "Ops! Deu problema:", error.message');
        if(error.code === 'ENOENT'){
            console.log('🤖Robô: "O arquivo dados.txt não existe!"');
            console.log('💡Dica: Crie o arquivo na mesma pasta que este código.');
        }
    }
}
lerMeuArquivo()
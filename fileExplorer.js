const fs = require('fs').promises;
const path = require('path');

// Variável para contar quantas pastas foram exploradas
let totalPastas = 0;

// Função principal
async function listarArquivos(diretorio) {
    console.log(`Explorando: ${diretorio}`);
    totalPastas++;

    const arquivos = [];

    try {
        const items = await fs.readdir(diretorio);

        for (const item of items) {
            const fullPath = path.join(diretorio, item);
            const stats = await fs.stat(fullPath);

            if (stats.isDirectory()) {
                const subArquivos = await listarArquivos(fullPath);
                arquivos.push(...subArquivos);
            } else if (path.extname(item) === '.js') {
                arquivos.push({
                    caminho: fullPath,
                    tamanho: stats.size // em bytes
                });
            }
        }
    } catch (error) {
        console.error(`❌ Erro ao explorar ${diretorio}:`, error.message);
    }

    return arquivos;
}

// Mostrar resultados no console e salvar em um arquivo
async function mostrarResultados(arquivos) {
    const relatorio = [];

    relatorio.push('\n📊 RELATÓRIO FINAL:');
    relatorio.push(`Total de arquivos .js encontrados: ${arquivos.length}`);
    relatorio.push(`Total de pastas exploradas: ${totalPastas}`);

    if (arquivos.length > 0) {
        relatorio.push('\nLista de arquivos .js encontrados:');
        arquivos.forEach((arquivo, index) => {
            const tamanhoKB = (arquivo.tamanho / 1024).toFixed(2);
            relatorio.push(`${index + 1}. ${arquivo.caminho} - ${tamanhoKB} KB`);
        });
    }

    // Exibe no console
    console.log(relatorio.join('\n'));

    // Salva em um arquivo
    const caminhoRelatorio = path.join(__dirname, 'relatorio.txt');
    try {
        await fs.writeFile(caminhoRelatorio, relatorio.join('\n'), 'utf8');
        console.log(`\n📝 Relatório salvo em: ${caminhoRelatorio}`);
    } catch (err) {
        console.error(`❌ Erro ao salvar relatório:`, err.message);
    }
}

// Exporta as funções
module.exports = {
    listarArquivos,
    mostrarResultados
};
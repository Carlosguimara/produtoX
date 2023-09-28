const produto = require('./models/produtosModels.js');

(async () => {

    try {
        // 1- CREATE
        const produtoCriado = await produto.create({
            descricao: 'Produto D',
            quantidade: 12,
            preco: 9.56,
            observacao: 'Detalhes do Produto D',
            unidade: "UN",
            // createdAt: Date.now,
            // updatedAt: Date.now,
        })
        // console.log('Produto Criado:', produtoCriado);
        console.log('Produto Criado: com sucesso!', produtoCriado);



        
        //     // Leitura de produtos
        //     const produtos = await Produto.findALL();
        //     console.log('Produtos cadastrados:', produtos.map(p => p.toJSON()));

        //     // Atualizaçao de um produto
        //     const produtoAtualizado = await Produto.update(
        //         { preco: 22.05 },
        //         { where: {id: produtoCriado.id}}
        //     );
        //     console.log('produto Atualizado', produtoAtualizado[0] > 0 ? 'Atualizado com Sucesso' : 'Produto nao encontrado'
        //     );

        //     // Remoçao de produto
        //     const produtoRemovido = await Produto.destroy({ where: {id: produtoCriado.id}});
        //     console.log('produto removido', produtoRemovido[0] > 0 ? 'removido com Sucesso' : 'Produto nao encontrado'
        //     );
    } catch (error) {
        console.log('ERRO\n', error);

        // ao finalizar o script, finaliza a conexão com o banco de dados
    } finally {
        // await Produto.close();

    }
})();
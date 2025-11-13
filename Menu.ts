import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                   LOJA VIRTUAL                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar Produtos                      ");
        console.log("            2 - Buscar Produto por Nome              ");
        console.log("            3 - Adicionar Produto ao Carrinho        ");
        console.log("            4 - Remover Produto do Carrinho          ");
        console.log("            5 - Visualizar Carrinho                  ");
        console.log("            6 - Finalizar Compra                     ");
        console.log("            7 - Acompanhar Pedido                    ");
        console.log("            8 - Cancelar Pedido                      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nLoja Virtual - Obrigado pela preferência!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar todos os produtos disponíveis\n\n");
                break;
            case 2:
                console.log("\n\nBuscar produto por nome\n\n");
                break;
            case 3:
                console.log("\n\nAdicionar produto ao carrinho\n\n");
                break;
            case 4:
                console.log("\n\nRemover produto do carrinho\n\n");
                break;
            case 5:
                console.log("\n\nVisualizar carrinho\n\n");
                break;
            case 6:
                console.log("\n\nFinalizar compra\n\n");
                break;
            case 7:
                console.log("\n\nAcompanhar pedido\n\n");
                break;
            case 8:
                console.log("\n\nCancelar pedido\n\n");
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();
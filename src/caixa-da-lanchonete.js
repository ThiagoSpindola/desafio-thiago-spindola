const cardapio = {
    'cafe': 3.00,
    'chantily': 1.50,
    'suco': 6.20,
    'sanduiche': 6.50,
    'queijo': 2.00,
    'salgado': 7.25,
    'combo1': 9.50,
    'combo2': 7.50,

};

const desconto = {
    'dinheiro': 0.95,
    'credito': 1.03,
    'debito': 1,
};

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if (!(metodoDePagamento in desconto)) {
            return "Forma de pagamento inválida!"
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        }

        let valorTotal = 0
        let carrinho = []

        for(let i of itens) {
            let compra = i.split(",")
            let item = compra[0]
            let quantidade = compra[1]

            if (quantidade == 0) {
                return "Quantidade inválida!"
            }

            if (item in cardapio) {
                if (item == 'chantily' || item == 'queijo') {
                    if (item == 'chantily' && !carrinho.includes('cafe')) {
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    else if (item == 'queijo' && !carrinho.includes('sanduiche')) {
                        return "Item extra não pode ser pedido sem o principal";
                    }
                }

                carrinho.push(item)

                valorTotal += cardapio[item] * quantidade
            }
            else {
                return "Item inválido!"
            }
        }

        valorTotal = valorTotal * desconto[metodoDePagamento]

        return "R$ " + valorTotal.toFixed(2).replace(".",",");
    }

}

export { CaixaDaLanchonete };

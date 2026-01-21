let pecaXadrez = 'amor'

switch (pecaXadrez.toUpperCase()) {
    case 'REI':
        console.log('Move-se uma casa em qualquer direção');
        break;
    case 'RAINHA':
        console.log('Move-se livremente em qualquer direção');
        break;
    case 'TORRE':
        console.log('Move-se em linhas retas (horizontal/vertical)');
        break;
    case 'BISPO':
        console.log('Move-se em diagonais, permanecendo sempre na cor da casa inicial');
        break;
    case 'CAVALO':
        console.log('Move-se em forma de "L" (duas casas em uma direção e uma para o lado) e salta sobre outras peças.');
        break;
    case 'PEÃO':
        console.log('Move-se para frente, capturando na diagonal, e tem movimentos especiais como o avanço duplo inicial e a promoção');
        break;
    default:
        console.log('Peça inválida, digite novamente');
        break;
}


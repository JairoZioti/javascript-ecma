let salario = 1627.50

console.log(salario.toLocaleString('pt-br', {style: 'currency', currency : 'brl'}));

console.log(salario.toLocaleString('eua', {style: 'currency', currency : 'usd'}));

console.log(salario.toLocaleString('eur', {style: 'currency', currency : 'eur'}));
/* Operadores Aritméticos e de comparação */

console.log(3 > 2); //compara dois valores para analisar qual é o maior
console.log(3 < 2); //compara dois valores para analisar qual é o menor
console.log(3 == 2); //compara dois valores para analisar se os dois são iguais
console.log(3 != 2);//compara dois valores para analisar se os dois são diferentes
console.log(3 >= 2); //compara dois valores para analisar qual dos dois é maior ou igual ao outro
console.log(3 <= 2); //compara dois valores para analisar se os dois é menor ou igual ao outro
console.log((3 + 5)== 8);
console.log((2 - 1) != 2);
console.log((2 * 2) > 5);
console.log((2 / 2) == 2);
console.log("Hey!".length > "Hey".length);//verifica qual é string é maior em posições

/* Operadores lógicos */

console.log(true && false); // && representa "and" ou "e", onde só é verdade a comparação entre dois valores "true"
console.log(true && true);
console.log(false && false); 
console.log(false && true);
console.log(true || true); // || represent "or" ou "ou", onde só é falso a comparação entre "false" e "false"
console.log(false || false);
console.log(true || false);
console.log(false || true);

/* Operador Ternário */
console.log(true ? 1 : 2); // escolhe o valor ao meio se a comparação for verdadeira
console.log(false ? 1 : 2);// escolhe o valor do meio se a comparação for falsa
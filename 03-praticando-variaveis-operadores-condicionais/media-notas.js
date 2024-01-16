/*
    Fala um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e sua classificação conforme tabela abaixo.

    media = (nota1 + nota2 + nota3) / 3;

    Classificação
    - média menor que 5, reprovado;
    - media entre 5 e 7, recuperacao;
    - media acima de 7, passou;
*/

const nota1 = 5;
const nota2 = 10;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log(`Media = ${media} Reprovado`);
} else if(media >=5 && media < 7){
    console.log(`Media = ${media} Recuperacao`);
} else {
    console.log(`Media = ${media} Aprovado`);
}


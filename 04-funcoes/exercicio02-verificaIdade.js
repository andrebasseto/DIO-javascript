function verificaIdade(idade){
    if(idade < 18){
        console.log('Menor de idade');
    } else {
        console.log('Maior de idade');
    }
}

(function(){
    verificaIdade(10);
})()
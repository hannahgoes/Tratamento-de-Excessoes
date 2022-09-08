let a = 0; 
let b = 1;

//tenta executar um bloco de código
try{
    //forçando erro variável c não existe
    console.log(a+c)

//captura o erro
} catch(e){
    //e: parametro com objeto do tipo Error
    console.log("Erro: " + e)

}
let a = 50


try {
    let d = a * "b"
    let c = a 
    console.log(a)

    //retorna um erro caso o número seja inválido isNotaNumber
    if(isNaN(c)){
        throw "Não é um número válido"
    }


} catch (erro) {

    if(erro instanceof ReferenceError){
        //Trata o erro do tipo variável não declarada
        console.log("Erro de variável não declarada: ", erro)
    }else{
        //trata qualquer outro tipo de erro 
        console.log(erro)
    }
}
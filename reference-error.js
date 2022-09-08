let a = 50

try {
    console.log(a * b)
} catch (erro) {
    if(erro instanceof ReferenceError){
        console.log("Erro de variável não declarada: ", erro)
    }else{
        console.log("Outro tipo de erro")
    }
}